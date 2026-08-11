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

function requireNoMatch(path, pattern, label) {
  if (pattern.test(bodies.get(path) ?? "")) failures.push(`${path}: contains ${label}`);
}

requireMatch("/", /<meta name="generator" content="Astro v7\.2\.0"/, "Astro generator metadata");
requireMatch("/", /<link rel="canonical" href="https:\/\/totalcross\.com\/"/, "production canonical URL");
requireMatch("/", /href="\/blog\/"/, "local blog navigation");
requireMatch("/", /<picture\b/, "responsive picture markup");
requireMatch("/", /\.avif(?:\s|\?|\")/, "AVIF responsive image source");
requireMatch("/", /\.webp(?:\s|\?|\")/, "WebP image fallback");
requireMatch("/get-started/", /<video[^>]*autoplay[^>]*muted[^>]*loop[^>]*playsinline/, "animated video behavior");
requireMatch("/get-started/", /<source src="[^"]+\.webm" type="video\/webm"/, "WebM video source");
requireMatch("/get-started/", /<source src="[^"]+\.mp4" type="video\/mp4"/, "MP4 video fallback");
requireNoMatch("/get-started/", /\.gif(?:\?|\")/i, "GIF media delivery");
requireMatch("/traffic-control-system-by-tecdet/", /"@type":"BlogPosting"/, "article JSON-LD");
requireMatch("/traffic-control-system-by-tecdet/", /<meta property="og:type" content="article"/, "article Open Graph type");
requireMatch("/rss.xml", /https:\/\/totalcross\.com\/traffic-control-system-by-tecdet\//, "canonical RSS item");
requireMatch("/sitemap.xml", /https:\/\/totalcross\.com\/sitemap-index\.xml/, "sitemap compatibility target");

const optimizedAssetChecks = [
  { page: "/", pattern: /src="([^"]*home_tecdet[^"]*\.webp)"/, label: "home Tecdet fallback", limit: 1024 ** 2, group: "home" },
  { page: "/", pattern: /src="([^"]*home_coffee[^"]*\.webp)"/, label: "home coffee fallback", limit: 1024 ** 2, group: "home" },
  { page: "/get-started/", pattern: /poster="([^"]+\.webp)"/, label: "video poster", limit: 1024 ** 2, group: "demo" },
  { page: "/get-started/", pattern: /src="([^"]+\.webm)" type="video\/webm"/, label: "WebM video", limit: 1024 ** 2, group: "demo" },
  { page: "/get-started/", pattern: /src="([^"]+\.mp4)" type="video\/mp4"/, label: "MP4 video", limit: 1024 ** 2, group: "demo" },
];

const optimizedAssets = await Promise.all(optimizedAssetChecks.map(async (check) => {
  const path = bodies.get(check.page)?.match(check.pattern)?.[1];
  if (!path) {
    failures.push(`${check.page}: missing ${check.label} URL`);
    return { ...check, bytes: 0 };
  }
  try {
    const response = await fetch(new URL(path, `${origin}/`), {
      headers: { "cache-control": "no-cache", "user-agent": "totalcross-release-check/1.0" },
      signal: AbortSignal.timeout(30000),
    });
    const bytes = (await response.arrayBuffer()).byteLength;
    if (response.status !== 200) failures.push(`${path}: expected 200, received ${response.status}`);
    if (bytes > check.limit) failures.push(`${path}: ${check.label} is ${bytes} bytes (limit ${check.limit})`);
    return { ...check, path, bytes };
  } catch (error) {
    failures.push(`${path}: ${error.message}`);
    return { ...check, path, bytes: 0 };
  }
}));

const demoBytes = optimizedAssets.filter((asset) => asset.group === "demo").reduce((sum, asset) => sum + asset.bytes, 0);
if (demoBytes > 2 * 1024 ** 2) failures.push(`video delivery is ${demoBytes} bytes (limit ${2 * 1024 ** 2})`);

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

console.log(`production-check: origin=${origin} legacy-routes=${legacyRoutes.length} required=${required.length} optimized-assets=${optimizedAssets.length} video-bytes=${demoBytes} missing-route=404 https-redirect=ok`);
