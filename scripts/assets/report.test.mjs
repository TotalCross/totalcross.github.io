/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { formatBytes, payloadProxy } from "./report.mjs";

test("formats deterministic byte units", () => {
  assert.equal(formatBytes(512), "512 B");
  assert.equal(formatBytes(1536), "1.5 KiB");
  assert.equal(formatBytes(2 * 1024 * 1024), "2.00 MiB");
});

test("payload proxy sums unique fallback resources and CSS dependencies", () => {
  const dist = mkdtempSync(join(tmpdir(), "totalcross-assets-"));
  try {
    const html = '<link rel="stylesheet" href="/styles/site.css"><img src="/images/fallback.png" srcset="/images/large.png 2x">';
    const css = 'body{background:url("../images/fallback.png")}';
    const fallback = "12345";
    mkdirSync(join(dist, "styles"));
    mkdirSync(join(dist, "images"));
    writeFileSync(join(dist, "index.html"), html);
    writeFileSync(join(dist, "styles/site.css"), css);
    writeFileSync(join(dist, "images/fallback.png"), fallback);
    writeFileSync(join(dist, "images/large.png"), "not-counted");
    const result = payloadProxy(dist, join(dist, "index.html"));
    assert.equal(result.files.length, 3);
    assert.equal(result.bytes, Buffer.byteLength(html) + Buffer.byteLength(css) + Buffer.byteLength(fallback));
  } finally {
    rmSync(dist, { recursive: true, force: true });
  }
});
