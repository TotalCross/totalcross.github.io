/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import assert from "node:assert/strict";
import test from "node:test";
import { assetBudgets, evaluateAssetBudgets } from "./budgets.mjs";

const media = (path, extension, bytes) => ({ path, extension, bytes });

test("accepts the measured generated artifact within explicit budgets", () => {
  const result = evaluateAssetBudgets(
    [media("_astro/photo.webp", ".webp", 600 * 1024), media("_astro/demo.webm", ".webm", 200 * 1024)],
    [{ route: "/", bytes: 2 * 1024 ** 2 }, { route: "/get-started/", bytes: 1.5 * 1024 ** 2 }],
  );
  assert.deepEqual(result.failures, []);
  assert.deepEqual(result.warnings, ["generated-raster-over-500KiB bytes=614400 path=_astro/photo.webp"]);
});

test("reports deterministic hard-limit failures", () => {
  const result = evaluateAssetBudgets(
    [
      media("_astro/large.png", ".png", assetBudgets.generatedRasterBytes + 1),
      media("_astro/legacy.gif", ".gif", assetBudgets.generatedGifBytes + 1),
      media("_astro/padding.webm", ".webm", assetBudgets.generatedMediaBytes),
    ],
    [{ route: "/", bytes: assetBudgets.payloadProxyBytes["/"] + 1 }],
  );
  assert.deepEqual(result.failures, [
    `generated-media-over-budget bytes=7602178 limit=${assetBudgets.generatedMediaBytes}`,
    `generated-raster-over-budget bytes=${assetBudgets.generatedRasterBytes + 1} limit=${assetBudgets.generatedRasterBytes} path=_astro/large.png`,
    `generated-gif-over-budget bytes=${assetBudgets.generatedGifBytes + 1} limit=${assetBudgets.generatedGifBytes} path=_astro/legacy.gif`,
    `payload-proxy-over-budget route=/ bytes=${assetBudgets.payloadProxyBytes["/"] + 1} limit=${assetBudgets.payloadProxyBytes["/"]}`,
  ]);
});
