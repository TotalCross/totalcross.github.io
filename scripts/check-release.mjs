/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const root = new URL("../", import.meta.url);
const packageJson = JSON.parse(readFileSync(new URL("package.json", root), "utf8"));
const packageLock = JSON.parse(readFileSync(new URL("package-lock.json", root), "utf8"));
const changelog = readFileSync(new URL("CHANGELOG.md", root), "utf8");
const releaseGuide = readFileSync(new URL("docs/releasing.md", root), "utf8");
const failures = [];
const expectedRepository = "git+https://github.com/TotalCross/totalcross.github.io.git";

function requireValue(condition, message) {
  if (!condition) failures.push(message);
}

requireValue(packageJson.name === "totalcross-site", "Package name is not the repository identity");
requireValue(/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(packageJson.version), "Package version is not SemVer");
requireValue(packageJson.version === "1.0.1", "Post-migration correction release must be version 1.0.1");
requireValue(packageJson.private === true, "Website package must remain private");
requireValue(packageJson.homepage === "https://totalcross.com", "Package homepage is not production");
requireValue(packageJson.repository?.url === expectedRepository, "Package repository metadata is incorrect");
requireValue(packageJson.bugs?.url === "https://github.com/TotalCross/totalcross.github.io/issues", "Package issue URL is incorrect");
requireValue(packageLock.name === packageJson.name && packageLock.version === packageJson.version, "Lockfile root identity differs from package.json");
requireValue(packageLock.packages?.[""]?.name === packageJson.name && packageLock.packages?.[""]?.version === packageJson.version, "Lockfile workspace identity differs from package.json");
requireValue(/^## \[Unreleased\]$/m.test(changelog), "Changelog has no Unreleased section");
requireValue(changelog.includes(`Target release: \`v${packageJson.version}\``) || changelog.includes(`## [${packageJson.version}]`), "Changelog does not identify the package release");
requireValue(releaseGuide.includes("git tag -a vX.Y.Z"), "Release guide does not require an annotated tag");
requireValue(releaseGuide.includes("deployed Pages artifact corresponds to the exact candidate commit"), "Release guide does not bind tag to deployed source");

const tag = `v${packageJson.version}`;
const localTag = execFileSync("git", ["tag", "--list", tag], { cwd: root, encoding: "utf8" }).trim();
if (localTag) {
  const objectType = execFileSync("git", ["cat-file", "-t", tag], { cwd: root, encoding: "utf8" }).trim();
  requireValue(objectType === "tag", `${tag} must be an annotated tag`);
  requireValue(changelog.includes(`## [${packageJson.version}]`), `${tag} exists but has no changelog release section`);
}

if (failures.length) {
  console.error(`release-check failed:\n${failures.join("\n")}`);
  process.exit(1);
}

console.log(`release-check: package=${packageJson.name} version=${packageJson.version} changelog=ready tag=${localTag || "absent-as-expected"}`);
