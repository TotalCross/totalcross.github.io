/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { readArticle } from "./cross-post/content.mjs";
import { createDevPayload, upsertDev } from "./cross-post/forem.mjs";
import { createDistributionPlan } from "./cross-post/plan.mjs";

const root = new URL("../", import.meta.url).pathname;
const fixture = readArticle(root, "drafts/content-system-fixture");
const tecdet = readArticle(root, "traffic-control-system-by-tecdet");

function jsonResponse(value, status = 200) {
  return new Response(JSON.stringify(value), { status, headers: { "content-type": "application/json" } });
}

test("default article metadata produces no automatic external write", () => {
  assert.deepEqual(createDistributionPlan(tecdet, { destination: "dev", intent: "publish", trigger: "automatic" }), {
    status: "skipped",
    destination: "dev",
    reason: "dev cross-post metadata is disabled",
  });
});

test("opted-in fixture creates the expected DEV draft payload", () => {
  const plan = createDistributionPlan(fixture, { destination: "dev", intent: "draft", trigger: "automatic" });
  assert.equal(plan.status, "planned");
  assert.equal(plan.operation, "upsert-by-canonical-url");
  assert.equal(plan.payload.article.canonical_url, "https://totalcross.com/blog/content-system-fixture/");
  assert.equal(plan.payload.article.published, false);
  assert.equal(plan.payload.article.tags, "tooling,astro");
  assert.doesNotMatch(plan.payload.article.body_markdown, /SPDX-/);
});

test("DEV upsert creates when canonical state is absent", async () => {
  const calls = [];
  const fetchImpl = async (url, options = {}) => {
    calls.push([url, options]);
    return options.method === "POST" ? jsonResponse({ id: 7 }, 201) : jsonResponse([]);
  };
  const result = await upsertDev(createDevPayload(fixture, "draft"), { apiKey: "test", fetchImpl });
  assert.equal(result.operation, "create");
  assert.equal(calls[1][1].method, "POST");
});

test("DEV upsert updates the canonical match instead of duplicating it", async () => {
  const calls = [];
  const fetchImpl = async (url, options = {}) => {
    calls.push([url, options]);
    return options.method === "PUT"
      ? jsonResponse({ id: 42 })
      : jsonResponse([{ id: 42, canonical_url: fixture.canonicalUrl }]);
  };
  const result = await upsertDev(createDevPayload(fixture, "publish"), { apiKey: "test", fetchImpl });
  assert.equal(result.operation, "update");
  assert.match(calls[1][0], /\/api\/articles\/42$/);
  assert.equal(calls[1][1].method, "PUT");
});

test("Medium preparation is manual and contains no unsupported API call", () => {
  const plan = createDistributionPlan(tecdet, { destination: "medium", intent: "draft", trigger: "manual" });
  assert.equal(plan.operation, "manual-import");
  assert.equal(plan.canonicalUrl, tecdet.canonicalUrl);
  assert.equal(JSON.stringify(plan).includes("api.medium.com"), false);
});

test("distribution workflow is manual, dry-run-first, and isolated from Pages", () => {
  const workflow = readFileSync(new URL("../.github/workflows/distribute.yml", import.meta.url), "utf8");
  assert.match(workflow, /workflow_dispatch:/);
  assert.match(workflow, /dry_run:[\s\S]*default: true/);
  assert.doesNotMatch(workflow, /(?:deploy-pages|upload-pages-artifact|\bpush:)/);
});
