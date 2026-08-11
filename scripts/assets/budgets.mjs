/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

const MiB = 1024 ** 2;
const KiB = 1024;

export const assetBudgets = Object.freeze({
  generatedMediaBytes: 6 * MiB,
  generatedRasterBytes: 1 * MiB,
  generatedGifBytes: 256 * KiB,
  warningRasterBytes: 500 * KiB,
  payloadProxyBytes: Object.freeze({
    "/": 3 * MiB,
    "/get-started/": 2 * MiB,
  }),
});

const rasterExtensions = new Set([".avif", ".jpeg", ".jpg", ".png", ".webp"]);

export function evaluateAssetBudgets(generated, pages, budgets = assetBudgets) {
  const failures = [];
  const warnings = [];
  const totalBytes = generated.reduce((sum, item) => sum + item.bytes, 0);

  if (totalBytes > budgets.generatedMediaBytes) {
    failures.push(`generated-media-over-budget bytes=${totalBytes} limit=${budgets.generatedMediaBytes}`);
  }

  for (const item of [...generated].sort((left, right) => left.path.localeCompare(right.path))) {
    if (rasterExtensions.has(item.extension) && item.bytes > budgets.warningRasterBytes) {
      warnings.push(`generated-raster-over-500KiB bytes=${item.bytes} path=${item.path}`);
    }
    if (rasterExtensions.has(item.extension) && item.bytes > budgets.generatedRasterBytes) {
      failures.push(`generated-raster-over-budget bytes=${item.bytes} limit=${budgets.generatedRasterBytes} path=${item.path}`);
    }
    if (item.extension === ".gif" && item.bytes > budgets.generatedGifBytes) {
      failures.push(`generated-gif-over-budget bytes=${item.bytes} limit=${budgets.generatedGifBytes} path=${item.path}`);
    }
  }

  for (const page of [...pages].sort((left, right) => left.route.localeCompare(right.route))) {
    const limit = budgets.payloadProxyBytes[page.route];
    if (limit !== undefined && page.bytes > limit) {
      failures.push(`payload-proxy-over-budget route=${page.route} bytes=${page.bytes} limit=${limit}`);
    }
  }

  return { failures, warnings };
}
