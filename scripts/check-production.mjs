/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { readFileSync } from "node:fs";

const root = new URL("../", import.meta.url);
const origin = (process.argv[2] ?? "https://totalcross.com").replace(/\/$/, "");
const manifest = readFileSync(new URL(".agent/baseline/legacy-routes.yml", root), "utf8");
const routeBlock = manifest.split(/^endpoints:/m)[0];
const legacyRoutes = [...routeBlock.matchAll(/^\s+- path: "([^"]+)"/gm)].map((match) => match[1]);
const required = [
  ...legacyRoutes,
  "/rss.xml",
  "/sitemap.xml",
  "/sitemap-index.xml",
  "/sitemap-0.xml",
  "/robots.txt",
  "/manifest.webmanifest",
  "/favicon.ico",
  "/favicon-32x32.png",
  "/icons/icon-192x192.png",
  "/totalcross_logo.png",
  "/googledf7144400c12b6c2.html",
  "/blog/authors/kaique-mancoso/",
  "/blog/categories/customer-stories/",
  "/blog/tags/linux-arm/",
];
const failures = [];
const bodies = new Map();
const queue = [...required];
const marker = Date.now();

async function worker() {
  while (queue.length) {
    const path = queue.shift();
    const separator = path.includes("?") ? "&" : "?";
    try {
      const response = await fetch(`${origin}${path}${separator}production-check=${marker}`, {
        headers: { "cache-control": "no-cache", "user-agent": "totalcross-release-check/1.0" },
        redirect: "follow",
        signal: AbortSignal.timeout(30000),
      });
      if (response.status !== 200) failures.push(`${path}: expected 200, received ${response.status}`);
      const contentType = response.headers.get("content-type") ?? "";
      if (/html|xml|text|json/.test(contentType)) bodies.set(path, await response.text());
      else await response.arrayBuffer();
    } catch (error) {
      failures.push(`${path}: ${error.message}`);
    }
  }
}

await Promise.all(Array.from({ length: 6 }, worker));

function requireMatch(path, pattern, label) {
  if (!pattern.test(bodies.get(path) ?? "")) failures.push(`${path}: missing ${label}`);
}

requireMatch("/", /<meta name="generator" content="Astro v7\.2\.0"/, "Astro generator metadata");
requireMatch("/", /<link rel="canonical" href="https:\/\/totalcross\.com\/"/, "production canonical URL");
requireMatch("/", /href="\/blog\/"/, "local blog navigation");
requireMatch("/traffic-control-system-by-tecdet/", /"@type":"BlogPosting"/, "article JSON-LD");
requireMatch("/traffic-control-system-by-tecdet/", /<meta property="og:type" content="article"/, "article Open Graph type");
requireMatch("/rss.xml", /https:\/\/totalcross\.com\/traffic-control-system-by-tecdet\//, "canonical RSS item");
requireMatch("/sitemap.xml", /https:\/\/totalcross\.com\/sitemap-index\.xml/, "sitemap compatibility target");

try {
  const missing = await fetch(`${origin}/release-check-missing-page-${marker}/`, {
    redirect: "manual",
    signal: AbortSignal.timeout(30000),
  });
  if (missing.status !== 404) failures.push(`unknown route: expected 404, received ${missing.status}`);
} catch (error) {
  failures.push(`unknown route: ${error.message}`);
}

if (origin.startsWith("https://")) {
  try {
    const insecure = await fetch(origin.replace(/^https:/, "http:"), {
      redirect: "manual",
      signal: AbortSignal.timeout(30000),
    });
    if (![301, 302, 307, 308].includes(insecure.status) || !insecure.headers.get("location")?.startsWith("https://")) {
      failures.push(`HTTP origin did not redirect to HTTPS (status ${insecure.status})`);
    }
  } catch (error) {
    failures.push(`HTTP redirect: ${error.message}`);
  }
}

if (failures.length) {
  console.error(`production-check failed:\n${failures.join("\n")}`);
  process.exit(1);
}

console.log(`production-check: origin=${origin} legacy-routes=${legacyRoutes.length} required=${required.length} missing-route=404 https-redirect=ok`);
