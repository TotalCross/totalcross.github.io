/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { evaluateAdvisories } from "./security/advisory-regressions.mjs";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const checker = resolve(repositoryRoot, "scripts/check-dependency-advisories.mjs");

function tree(dependencies = {}) {
  return { name: "fixture", dependencies };
}

function dependency(version, dependencies) {
  return { version, ...(dependencies ? { dependencies } : {}) };
}

function evaluate({ packageJson = {}, packageLock = { packages: { "": {} } }, installedTrees = {}, references = {} } = {}) {
  return evaluateAdvisories({
    packageJson,
    packageLock,
    installedTrees: {
      axios: installedTrees.axios ?? tree(),
      tmp: installedTrees.tmp ?? tree(),
      "sanitize-html": installedTrees["sanitize-html"] ?? tree(),
    },
    sourceReferencesByPackage: references,
  });
}

test("reports all five named advisories as absent only when manifest, lock, tree, and source are empty", () => {
  const results = evaluate();
  assert.deepEqual(results.map(({ advisory, status }) => [advisory, status]), [
    ["GHSA-3g43-6gmg-66jw", "NOT PRESENT"],
    ["GHSA-p92q-9vqr-4j8v", "NOT PRESENT"],
    ["GHSA-hfxv-24rg-xrqf", "NOT PRESENT"],
    ["GHSA-ph9p-34f9-6g65", "NOT PRESENT"],
    ["GHSA-rpr9-rxv7-x643", "NOT PRESENT"],
  ]);
});

test("evaluates every resolved copy and records direct, transitive, and multiple-version state", () => {
  const results = evaluate({
    packageLock: { packages: {
      "": {},
      "node_modules/parent-a/node_modules/axios": { version: "0.32.0" },
      "node_modules/parent-b/node_modules/axios": { version: "1.16.0" },
    } },
    installedTrees: { axios: tree({
      "parent-a": dependency("1.0.0", { axios: dependency("0.32.0") }),
      "parent-b": dependency("1.0.0", { axios: dependency("1.16.0") }),
    }) },
  });
  for (const result of results.filter(({ package: name }) => name === "axios")) {
    assert.equal(result.status, "FIXED");
    assert.equal(result.directDependency, false);
    assert.equal(result.transitiveDependency, true);
    assert.equal(result.multipleResolvedVersions, true);
    assert.deepEqual(result.resolvedVersions, ["0.32.0", "1.16.0"]);
    assert.equal(result.installedTreeCopies.length, 2);
    assert.equal(result.lockfileEntries.length, 2);
    assert.equal(result.dependencyPaths.length, 4);
  }
});

test("marks each named advisory as requiring a fix when its vulnerable version returns", () => {
  const results = evaluate({
    packageJson: { dependencies: { axios: "0.21.1", tmp: "0.2.5", "sanitize-html": "2.17.3" } },
    packageLock: { packages: {
      "": { dependencies: { axios: "0.21.1", tmp: "0.2.5", "sanitize-html": "2.17.3" } },
      "node_modules/axios": { version: "0.21.1" },
      "node_modules/tmp": { version: "0.2.5" },
      "node_modules/sanitize-html": { version: "2.17.3" },
    } },
    installedTrees: {
      axios: tree({ axios: dependency("0.21.1") }),
      tmp: tree({ tmp: dependency("0.2.5") }),
      "sanitize-html": tree({ "sanitize-html": dependency("2.17.3") }),
    },
  });
  assert.equal(results.length, 5);
  assert.ok(results.every(({ status }) => status === "REQUIRES FIX"));
  assert.ok(results.every(({ directDependency }) => directDependency));
});

test("classifies tmp and sanitize-html fixed boundaries outside their affected ranges", () => {
  const results = evaluate({
    packageLock: { packages: {
      "": {},
      "node_modules/tool/node_modules/tmp": { version: "0.2.6" },
      "node_modules/sanitizer/node_modules/sanitize-html": { version: "2.17.4" },
    } },
    installedTrees: {
      tmp: tree({ tool: dependency("1.0.0", { tmp: dependency("0.2.6") }) }),
      "sanitize-html": tree({ sanitizer: dependency("1.0.0", { "sanitize-html": dependency("2.17.4") }) }),
    },
  });
  assert.equal(results.find(({ advisory }) => advisory === "GHSA-ph9p-34f9-6g65").status, "FIXED");
  assert.equal(results.find(({ advisory }) => advisory === "GHSA-rpr9-rxv7-x643").status, "FIXED");
});

test("fails a sanitize-html source reference that has no auditable dependency", () => {
  const result = evaluate({ references: { "sanitize-html": ["src/example.mjs:1"] } })
    .find(({ package: name }) => name === "sanitize-html");
  assert.equal(result.status, "REQUIRES FIX");
  assert.match(result.reason, /without an auditable resolved dependency/);
});

test("CLI exits non-zero and emits REQUIRES FIX for all reintroduced vulnerable dependencies", (context) => {
  const root = mkdtempSync(join(tmpdir(), "totalcross-advisory-"));
  context.after(() => rmSync(root, { recursive: true, force: true }));
  const vulnerable = { axios: "0.21.1", tmp: "0.2.5", "sanitize-html": "2.17.3" };
  const packageJson = { name: "fixture", version: "1.0.0", dependencies: vulnerable };
  const packageLock = {
    name: "fixture",
    version: "1.0.0",
    lockfileVersion: 3,
    packages: {
      "": { dependencies: vulnerable },
      "node_modules/axios": { version: "0.21.1" },
      "node_modules/tmp": { version: "0.2.5" },
      "node_modules/sanitize-html": { version: "2.17.3" },
    },
  };
  writeFileSync(join(root, "package.json"), JSON.stringify(packageJson));
  writeFileSync(join(root, "package-lock.json"), JSON.stringify(packageLock));
  for (const [name, version] of Object.entries(vulnerable)) {
    mkdirSync(join(root, "node_modules", name), { recursive: true });
    writeFileSync(join(root, "node_modules", name, "package.json"), JSON.stringify({ name, version }));
  }

  const result = spawnSync(process.execPath, [checker, "--root", root, "--output", "advisories.json"], {
    cwd: repositoryRoot,
    encoding: "utf8",
    env: process.env,
  });
  assert.equal(result.status, 1);
  for (const advisory of ["GHSA-3g43-6gmg-66jw", "GHSA-p92q-9vqr-4j8v", "GHSA-hfxv-24rg-xrqf", "GHSA-ph9p-34f9-6g65", "GHSA-rpr9-rxv7-x643"]) {
    assert.match(result.stdout, new RegExp(`${advisory}.*REQUIRES FIX`));
  }
  assert.match(result.stderr, /dependency-advisory-check failed/);
  const artifact = JSON.parse(readFileSync(join(root, "advisories.json"), "utf8"));
  assert.ok(artifact.advisories.every(({ status }) => status === "REQUIRES FIX"));
});
