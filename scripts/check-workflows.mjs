/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { existsSync, readFileSync } from "node:fs";

const root = new URL("../", import.meta.url);
const ci = readFileSync(new URL(".github/workflows/ci.yml", root), "utf8");
const pages = readFileSync(new URL(".github/workflows/pages.yml", root), "utf8");
const failures = [];

function requireMatch(value, pattern, label) {
  if (!pattern.test(value)) failures.push(`Missing ${label}`);
}

requireMatch(ci, /^  pull_request:$/m, "pull request CI trigger");
requireMatch(ci, /npm run check[\s\S]*npm run build[\s\S]*npm run assets:check[\s\S]*npm run validate/, "CI Astro and asset validation order");
requireMatch(ci, /actions\/upload-pages-artifact@v4[\s\S]*path: dist/, "CI Pages artifact packaging");
requireMatch(pages, /^      - main$/m, "main-only production push trigger");
requireMatch(pages, /actions: read[\s\S]*contents: read[\s\S]*pages: write[\s\S]*id-token: write/, "Pages deployment permissions");
requireMatch(pages, /group: pages\s+cancel-in-progress: true/, "Pages deployment concurrency");
requireMatch(pages, /actions\/configure-pages@v5/, "Pages configuration action");
requireMatch(pages, /npm run check[\s\S]*npm run build[\s\S]*npm run assets:check[\s\S]*npm run validate/, "Pages Astro and asset validation order");
requireMatch(pages, /actions\/upload-pages-artifact@v4[\s\S]*path: dist/, "production Pages artifact");
requireMatch(pages, /deploy:[\s\S]*needs: build[\s\S]*name: github-pages[\s\S]*actions\/deploy-pages@v4/, "dependent github-pages deployment");
if (existsSync(new URL(".github/workflows/main.yml", root))) failures.push("Legacy Gatsby publish workflow still exists");
if (/gatsby|gh-pages/i.test(`${ci}\n${pages}`)) failures.push("Production workflows still reference legacy publishing");

if (failures.length) {
  console.error(`workflow-check failed:\n${failures.join("\n")}`);
  process.exit(1);
}

console.log("workflow-check: pr-artifact=ready main-pages=ready legacy-publisher=absent");
