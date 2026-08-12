/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, relative, resolve } from "node:path";
import { spawnSync } from "node:child_process";

export const advisoryDefinitions = [
  {
    advisory: "GHSA-3g43-6gmg-66jw",
    package: "axios",
    severity: "high",
    affectedRanges: [">= 0.19.0, < 0.31.1", ">= 1.0.0, < 1.15.2"],
    fixedVersions: ["0.31.1", "1.15.2"],
    ranges: [
      { min: "0.19.0", max: "0.31.1" },
      { min: "1.0.0", max: "1.15.2" },
    ],
  },
  {
    advisory: "GHSA-p92q-9vqr-4j8v",
    package: "axios",
    severity: "high",
    affectedRanges: ["<= 0.31.1", ">= 1.0.0, < 1.16.0"],
    fixedVersions: ["0.32.0", "1.16.0"],
    ranges: [
      { max: "0.31.1", maxInclusive: true },
      { min: "1.0.0", max: "1.16.0" },
    ],
  },
  {
    advisory: "GHSA-hfxv-24rg-xrqf",
    package: "axios",
    severity: "high",
    affectedRanges: ["<= 0.31.1", ">= 1.0.0, < 1.16.0"],
    fixedVersions: ["0.32.0", "1.16.0"],
    ranges: [
      { max: "0.31.1", maxInclusive: true },
      { min: "1.0.0", max: "1.16.0" },
    ],
  },
  {
    advisory: "GHSA-ph9p-34f9-6g65",
    package: "tmp",
    severity: "high",
    affectedRanges: ["< 0.2.6"],
    fixedVersions: ["0.2.6"],
    ranges: [{ max: "0.2.6" }],
  },
  {
    advisory: "GHSA-rpr9-rxv7-x643",
    package: "sanitize-html",
    severity: "critical",
    affectedRanges: ["= 2.17.3"],
    fixedVersions: ["2.17.4"],
    ranges: [{ min: "2.17.3", minInclusive: true, max: "2.17.3", maxInclusive: true }],
  },
];

const manifestSections = ["dependencies", "devDependencies", "optionalDependencies", "peerDependencies"];
const sourceExtensions = new Set([".astro", ".cjs", ".css", ".html", ".js", ".json", ".jsx", ".md", ".mdx", ".mjs", ".ts", ".tsx", ".yaml", ".yml"]);
const scannerExclusions = new Set([
  "scripts/check-dependency-advisories.mjs",
  "scripts/check-dependency-advisories.test.mjs",
  "scripts/security/advisory-regressions.mjs",
]);

function parseSemver(value) {
  const match = /^v?(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?(?:\+[0-9A-Za-z.-]+)?$/.exec(value);
  if (!match) return null;
  return { numbers: match.slice(1, 4).map(Number), prerelease: match[4]?.split(".") ?? [] };
}

function compareIdentifiers(left, right) {
  const leftNumber = /^\d+$/.test(left);
  const rightNumber = /^\d+$/.test(right);
  if (leftNumber && rightNumber) return Number(left) - Number(right);
  if (leftNumber !== rightNumber) return leftNumber ? -1 : 1;
  return left.localeCompare(right);
}

export function compareSemver(leftValue, rightValue) {
  const left = parseSemver(leftValue);
  const right = parseSemver(rightValue);
  if (!left || !right) return null;
  for (let index = 0; index < 3; index += 1) {
    if (left.numbers[index] !== right.numbers[index]) return left.numbers[index] - right.numbers[index];
  }
  if (!left.prerelease.length || !right.prerelease.length) {
    if (left.prerelease.length === right.prerelease.length) return 0;
    return left.prerelease.length ? -1 : 1;
  }
  const length = Math.max(left.prerelease.length, right.prerelease.length);
  for (let index = 0; index < length; index += 1) {
    if (left.prerelease[index] === undefined) return -1;
    if (right.prerelease[index] === undefined) return 1;
    const comparison = compareIdentifiers(left.prerelease[index], right.prerelease[index]);
    if (comparison) return comparison;
  }
  return 0;
}

export function isVulnerable(version, ranges) {
  if (!parseSemver(version)) return null;
  return ranges.some((range) => {
    const minComparison = range.min ? compareSemver(version, range.min) : 1;
    const maxComparison = range.max ? compareSemver(version, range.max) : -1;
    const aboveMinimum = !range.min || minComparison > 0 || (range.minInclusive && minComparison === 0);
    const belowMaximum = !range.max || maxComparison < 0 || (range.maxInclusive && maxComparison === 0);
    return aboveMinimum && belowMaximum;
  });
}

function manifestDeclarations(packageJson, packageName) {
  return manifestSections.flatMap((section) => Object.hasOwn(packageJson[section] ?? {}, packageName)
    ? [{ section, versionSpec: packageJson[section][packageName] }]
    : []);
}

function lockfileCopies(packageLock, packageName) {
  return Object.entries(packageLock.packages ?? {}).flatMap(([path, metadata]) => {
    const resolvedName = path.split("node_modules/").at(-1);
    return resolvedName === packageName ? [{ path, version: metadata.version ?? null }] : [];
  });
}

export function installedCopies(tree, packageName) {
  const copies = [];
  function walk(dependencies, ancestors) {
    for (const [name, metadata] of Object.entries(dependencies ?? {})) {
      const label = `${name}@${metadata.version ?? "unknown"}`;
      const path = [...ancestors, label];
      if (name === packageName) copies.push({ path: path.join(" > "), version: metadata.version ?? null });
      walk(metadata.dependencies, path);
    }
  }
  walk(tree.dependencies, [tree.name ?? "repository"]);
  return copies;
}

function walkSourceFiles(rootPath) {
  const candidates = ["src", "scripts", ".github", "astro.config.mjs", "package.json"];
  const files = [];
  function walk(path) {
    if (!existsSync(path)) return;
    const entries = readdirSync(path, { withFileTypes: true });
    for (const entry of entries) {
      const child = resolve(path, entry.name);
      if (entry.isDirectory()) walk(child);
      else if (sourceExtensions.has(extname(entry.name))) files.push(child);
    }
  }
  for (const candidate of candidates) {
    const path = resolve(rootPath, candidate);
    if (!existsSync(path)) continue;
    if (sourceExtensions.has(extname(path))) files.push(path);
    else walk(path);
  }
  return files;
}

export function sourceReferences(rootPath, packageNames) {
  const references = Object.fromEntries(packageNames.map((name) => [name, []]));
  for (const path of walkSourceFiles(rootPath)) {
    const displayPath = relative(rootPath, path);
    if (scannerExclusions.has(displayPath)) continue;
    const lines = readFileSync(path, "utf8").split(/\r?\n/);
    for (const [index, line] of lines.entries()) {
      for (const name of packageNames) {
        const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const matches = name === "sanitize-html"
          ? line.toLowerCase().includes(name)
          : new RegExp(`["']${escapedName}(?:/[^"']*)?["']`, "i").test(line);
        if (matches) references[name].push(`${displayPath}:${index + 1}`);
      }
    }
  }
  return references;
}

export function evaluateAdvisories({ packageJson, packageLock, installedTrees, sourceReferencesByPackage }) {
  return advisoryDefinitions.map((definition) => {
    const declarations = manifestDeclarations(packageJson, definition.package);
    const locked = lockfileCopies(packageLock, definition.package);
    const installed = installedCopies(installedTrees[definition.package], definition.package);
    const references = sourceReferencesByPackage[definition.package] ?? [];
    const resolvedVersions = [...new Set([...locked, ...installed].map((copy) => copy.version).filter(Boolean))].sort();
    const dependencyPaths = [...new Set([
      ...installed.map((copy) => copy.path),
      ...locked.map((copy) => `lockfile:${copy.path}`),
    ])].sort();
    const evidence = [
      declarations.length
        ? `package declared in package.json: ${declarations.map(({ section, versionSpec }) => `${section}.${definition.package}=${versionSpec}`).join(", ")}`
        : "package absent from package.json",
      locked.length
        ? `package-lock.json entries: ${locked.map(({ path, version }) => `${path}@${version ?? "unknown"}`).join(", ")}`
        : "package absent from package-lock.json",
      installed.length
        ? `npm ls ${definition.package} --all resolved: ${installed.map(({ path }) => path).join(", ")}`
        : `npm ls ${definition.package} --all returned no installed dependency`,
    ];
    if (definition.package === "sanitize-html") {
      evidence.push(references.length
        ? `repository source/tooling references: ${references.join(", ")}`
        : "no direct sanitize-html imports or references in repository source or tooling");
    }

    const vulnerableVersions = resolvedVersions.filter((version) => isVulnerable(version, definition.ranges) === true);
    const unparseableVersions = resolvedVersions.filter((version) => isVulnerable(version, definition.ranges) === null);
    let status;
    let reason;
    if (!declarations.length && !locked.length && !installed.length && !references.length) {
      status = "NOT PRESENT";
      reason = "Removed with the legacy dependency graph; the current manifest, lockfile, and installed tree contain no copy.";
    } else if (vulnerableVersions.length) {
      status = "REQUIRES FIX";
      reason = `Resolved vulnerable version(s): ${vulnerableVersions.join(", ")}.`;
    } else if (unparseableVersions.length || (declarations.length && !resolvedVersions.length) || (installed.length && !locked.length)) {
      status = "REQUIRES FIX";
      reason = "The dependency is present but its complete locked version set cannot be verified.";
    } else if (references.length && !resolvedVersions.length) {
      status = "REQUIRES FIX";
      reason = "Repository source or tooling references the package without an auditable resolved dependency.";
    } else {
      status = "FIXED";
      reason = "Every resolved copy is outside the advisory's affected range.";
    }

    return {
      advisory: definition.advisory,
      package: definition.package,
      severity: definition.severity,
      affectedRanges: definition.affectedRanges,
      fixedVersions: definition.fixedVersions,
      directDependency: declarations.length > 0,
      transitiveDependency: declarations.length === 0 && (locked.length > 0 || installed.length > 0),
      multipleResolvedVersions: resolvedVersions.length > 1,
      resolvedVersions,
      dependencyPaths,
      manifestDeclarations: declarations,
      lockfileEntries: locked,
      installedTreeCopies: installed,
      sourceReferences: references,
      status,
      evidence,
      reason,
    };
  });
}

function npmTree(rootPath, packageName) {
  const npmExecPath = process.env.npm_execpath;
  const command = npmExecPath ? process.execPath : "npm";
  const args = npmExecPath ? [npmExecPath, "ls", packageName, "--all", "--json"] : ["ls", packageName, "--all", "--json"];
  const result = spawnSync(command, args, { cwd: rootPath, encoding: "utf8" });
  if (result.error) throw result.error;
  let tree;
  try {
    tree = JSON.parse(result.stdout);
  } catch (error) {
    throw new Error(`Unable to parse npm ls output for ${packageName}: ${error.message}`);
  }
  if (![0, 1].includes(result.status)) {
    throw new Error(`npm ls ${packageName} failed with exit ${result.status}: ${result.stderr.trim()}`);
  }
  return tree;
}

export function evaluateRepository(rootPath) {
  const packageJson = JSON.parse(readFileSync(resolve(rootPath, "package.json"), "utf8"));
  const packageLock = JSON.parse(readFileSync(resolve(rootPath, "package-lock.json"), "utf8"));
  const packageNames = [...new Set(advisoryDefinitions.map((definition) => definition.package))];
  const installedTrees = Object.fromEntries(packageNames.map((name) => [name, npmTree(rootPath, name)]));
  const sourceReferencesByPackage = sourceReferences(rootPath, packageNames);
  return {
    schemaVersion: 1,
    generatedBy: "npm run security:advisories",
    advisories: evaluateAdvisories({ packageJson, packageLock, installedTrees, sourceReferencesByPackage }),
  };
}
