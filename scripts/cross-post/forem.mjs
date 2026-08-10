/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

const accept = "application/vnd.forem.api-v1+json";

function devTag(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 30);
}

export function createDevPayload(article, intent) {
  const mainImage = article.coverImage
    ? new URL(article.coverImage, "https://totalcross.com").href
    : null;
  return {
    article: {
      title: article.title,
      body_markdown: article.body,
      published: intent === "publish",
      series: article.series ?? null,
      main_image: mainImage,
      canonical_url: article.canonicalUrl,
      description: article.description,
      tags: article.tags.slice(0, 4).map(devTag).filter(Boolean).join(","),
    },
  };
}

async function responseJson(response, label) {
  const text = await response.text();
  if (!response.ok) throw new Error(`${label} failed (${response.status}): ${text.slice(0, 500)}`);
  return text ? JSON.parse(text) : null;
}

export async function findDevArticle(canonicalUrl, { apiKey, fetchImpl = fetch, apiBase = "https://dev.to" }) {
  const headers = { accept, "api-key": apiKey };
  for (let page = 1; page <= 100; page += 1) {
    const response = await fetchImpl(`${apiBase}/api/articles/me/all?per_page=1000&page=${page}`, { headers });
    const articles = await responseJson(response, "DEV article lookup");
    const match = articles.find((article) => article.canonical_url === canonicalUrl);
    if (match) return match;
    if (articles.length < 1000) return undefined;
  }
  throw new Error("DEV article lookup exceeded 100 pages");
}

export async function upsertDev(payload, options) {
  const { apiKey, fetchImpl = fetch, apiBase = "https://dev.to" } = options;
  if (!apiKey) throw new Error("DEVTO_API_KEY is required for a live DEV write");
  const existing = await findDevArticle(payload.article.canonical_url, options);
  const endpoint = existing ? `${apiBase}/api/articles/${existing.id}` : `${apiBase}/api/articles`;
  const method = existing ? "PUT" : "POST";
  const response = await fetchImpl(endpoint, {
    method,
    headers: { accept, "api-key": apiKey, "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  return { operation: existing ? "update" : "create", article: await responseJson(response, `DEV article ${method}`) };
}
