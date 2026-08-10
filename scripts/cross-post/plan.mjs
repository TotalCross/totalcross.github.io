/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { createDevPayload } from "./forem.mjs";

export function destinationEnabled(article, destination, trigger) {
  return trigger === "manual" || article.crossPost[destination] === true;
}

export function createDistributionPlan(article, { destination, intent, trigger }) {
  if (!destinationEnabled(article, destination, trigger)) {
    return { status: "skipped", destination, reason: `${destination} cross-post metadata is disabled` };
  }
  if (destination === "dev") {
    return {
      status: "planned",
      destination,
      operation: "upsert-by-canonical-url",
      lookup: "/api/articles/me/all?per_page=1000&page=<n>",
      payload: createDevPayload(article, intent),
    };
  }
  return {
    status: "planned",
    destination,
    operation: "manual-import",
    intent,
    canonicalUrl: article.canonicalUrl,
    importUrl: "https://medium.com/p/import",
    instructions: "Import the canonical URL in Medium, review formatting, confirm the canonical link, then save as draft or publish as requested.",
  };
}

export async function verifyCanonicalDeployment(canonicalUrl, fetchImpl = fetch) {
  const response = await fetchImpl(canonicalUrl, { redirect: "follow", signal: AbortSignal.timeout(15000) });
  const html = await response.text();
  if (!response.ok) throw new Error(`Canonical deployment returned ${response.status}: ${canonicalUrl}`);
  const escaped = canonicalUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (!new RegExp(`<link[^>]+rel=["']canonical["'][^>]+href=["']${escaped}["']`).test(html)) {
    throw new Error(`Canonical deployment metadata was not found: ${canonicalUrl}`);
  }
}
