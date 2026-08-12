/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { existsSync, readFileSync } from "node:fs";

const root = new URL("../", import.meta.url);
const ci = readFileSync(new URL(".github/workflows/ci.yml", root), "utf8");
const pages = readFileSync(new URL(".github/workflows/pages.yml", root), "utf8");
const distribute = readFileSync(new URL(".github/workflows/distribute.yml", root), "utf8");
const failures = [];

function requireMatch(value, pattern, label) {
  if (!pattern.test(value)) failures.push(`Missing ${label}`);
}

requireMatch(ci, /^  pull_request:$/m, "pull request CI trigger");
requireMatch(ci, /npm ci[\s\S]*npm audit --audit-level=high[\s\S]*npm audit signatures[\s\S]*npm run security:advisories:check[\s\S]*npm run security:advisories:test/, "CI dependency audit gates");
requireMatch(ci, /npm run check[\s\S]*npm run build[\s\S]*npm run assets:check[\s\S]*npm run validate/, "CI Astro and asset validation order");
requireMatch(ci, /actions\/upload-pages-artifact@[0-9a-f]{40}[\s\S]*path: dist/, "CI Pages artifact packaging");
requireMatch(pages, /^      - main$/m, "main-only production push trigger");
requireMatch(pages, /actions: read[\s\S]*contents: read[\s\S]*pages: write[\s\S]*id-token: write/, "Pages deployment permissions");
requireMatch(pages, /group: pages\s+cancel-in-progress: true/, "Pages deployment concurrency");
requireMatch(pages, /actions\/configure-pages@[0-9a-f]{40}/, "Pages configuration action");
requireMatch(pages, /npm ci[\s\S]*npm audit --audit-level=high[\s\S]*npm audit signatures[\s\S]*npm run security:advisories:check[\s\S]*npm run security:advisories:test/, "Pages dependency audit gates");
requireMatch(pages, /npm run check[\s\S]*npm run build[\s\S]*npm run assets:check[\s\S]*npm run validate/, "Pages Astro and asset validation order");
requireMatch(pages, /actions\/upload-pages-artifact@[0-9a-f]{40}[\s\S]*path: dist/, "production Pages artifact");
requireMatch(pages, /deploy:[\s\S]*needs: build[\s\S]*name: github-pages[\s\S]*actions\/deploy-pages@[0-9a-f]{40}/, "dependent github-pages deployment");

for (const [name, workflow] of Object.entries({ ci, pages, distribute })) {
  for (const match of workflow.matchAll(/^\s*-?\s*uses:\s+(\S+)/gm)) {
    if (!/^[^@\s]+@[0-9a-f]{40}$/.test(match[1])) {
      failures.push(`Mutable or invalid action reference in ${name}: ${match[1]}`);
    }
  }
}

if (existsSync(new URL(".github/workflows/main.yml", root))) failures.push("Legacy Gatsby publish workflow still exists");
if (/gatsby|gh-pages/i.test(`${ci}\n${pages}`)) failures.push("Production workflows still reference legacy publishing");

if (failures.length) {
  console.error(`workflow-check failed:\n${failures.join("\n")}`);
  process.exit(1);
}

console.log("workflow-check: pr-artifact=ready main-pages=ready legacy-publisher=absent");
