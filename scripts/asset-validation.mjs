/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { formatBytes, generatedMedia, representativePages, sourceMedia } from "./assets/report.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const topCount = 12;

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
  printInventory("generated-media", generated);
  for (const page of representativePages(root)) {
    console.log(`payload-proxy: route=${page.route} files=${page.files.length} bytes=${page.bytes} (${formatBytes(page.bytes)}) selection=fallback-only`);
  }
} else {
  console.log("generated-media: absent (run npm run build before measuring output)");
}
