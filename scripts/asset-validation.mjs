/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { evaluateAssetBudgets } from "./assets/budgets.mjs";
import { formatBytes, generatedMedia, representativePages, sourceMedia } from "./assets/report.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const topCount = 12;
const checking = process.argv.includes("--check");

function printInventory(label, items) {
  const total = items.reduce((sum, item) => sum + item.bytes, 0);
  console.log(`${label}: files=${items.length} bytes=${total} (${formatBytes(total)})`);
  for (const item of items.slice(0, topCount)) {
    console.log(`  ${item.bytes}\t${item.dimensions ?? "-"}\t${item.extension}\t${item.path}`);
  }
}

const source = await sourceMedia(root);
printInventory("source-media", source);

if (existsSync(new URL("../dist/", import.meta.url))) {
  const generated = await generatedMedia(root);
  const pages = representativePages(root);
  const result = evaluateAssetBudgets(generated, pages);
  printInventory("generated-media", generated);
  for (const warning of result.warnings) console.log(`warning: ${warning}`);
  for (const page of pages) {
    console.log(`payload-proxy: route=${page.route} files=${page.files.length} bytes=${page.bytes} (${formatBytes(page.bytes)}) selection=fallback-only`);
  }
  if (checking) {
    for (const failure of result.failures) console.error(`error: ${failure}`);
    if (result.failures.length) process.exitCode = 1;
    else console.log(`asset-check: status=pass failures=0 warnings=${result.warnings.length}`);
  }
} else {
  const message = "generated-media: absent (run npm run build before measuring output)";
  if (checking) {
    console.error(`error: ${message}`);
    process.exitCode = 1;
  } else {
    console.log(message);
  }
}
