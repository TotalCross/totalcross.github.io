/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { evaluateRepository } from "./security/advisory-regressions.mjs";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);

function option(name) {
  const index = args.indexOf(name);
  if (index === -1) return null;
  if (!args[index + 1]) throw new Error(`${name} requires a path`);
  return args[index + 1];
}

const root = resolve(option("--root") ?? repositoryRoot);
const outputPath = option("--output");
const checkOutputPath = option("--check-output");
if (outputPath && checkOutputPath) throw new Error("Use either --output or --check-output, not both");

const artifact = evaluateRepository(root);
const serialized = `${JSON.stringify(artifact, null, 2)}\n`;

for (const result of artifact.advisories) {
  const versions = result.resolvedVersions.length ? result.resolvedVersions.join(",") : "none";
  console.log(`advisory-check: ${result.advisory} package=${result.package} severity=${result.severity} versions=${versions} status=${result.status}`);
}

if (outputPath) writeFileSync(resolve(root, outputPath), serialized);

const failures = artifact.advisories.filter(({ status }) => status === "REQUIRES FIX");
if (checkOutputPath) {
  const expectedPath = resolve(root, checkOutputPath);
  if (!existsSync(expectedPath) || readFileSync(expectedPath, "utf8") !== serialized) {
    failures.push({ advisory: "artifact", reason: `${checkOutputPath} is missing or stale; run npm run security:advisories` });
  }
}

if (failures.length) {
  console.error(`dependency-advisory-check failed:\n${failures.map(({ advisory, reason }) => `${advisory}: ${reason}`).join("\n")}`);
  process.exit(1);
}

console.log(`dependency-advisory-check: advisories=${artifact.advisories.length} requires-fix=0 artifact=${outputPath ?? checkOutputPath ?? "stdout-only"}`);
