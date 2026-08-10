/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const dist = new URL("dist/", root);
const distPath = fileURLToPath(dist);
const failures = [];

function requireFile(relativePath) {
  const url = new URL(relativePath, dist);
  if (!existsSync(url)) failures.push(`Missing generated file: ${relativePath}`);
  return existsSync(url) ? readFileSync(url, "utf8") : "";
}

function requireMatch(value, pattern, label) {
  if (!pattern.test(value)) failures.push(`Missing ${label}`);
}

function generatedText(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return generatedText(path);
    return [".html", ".xml"].includes(extname(path)) ? [readFileSync(path, "utf8")] : [];
  }).join("\n");
}

const article = requireFile("traffic-control-system-by-tecdet/index.html");
const blog = requireFile("blog/index.html");
const rss = requireFile("rss.xml");
const sitemapCompatibility = requireFile("sitemap.xml");
const sitemapIndex = requireFile("sitemap-index.xml");
const sitemapRoutes = requireFile("sitemap-0.xml");

requireFile("blog/authors/kaique-mancoso/index.html");
requireFile("blog/tags/linux-arm/index.html");
requireFile("blog/categories/customer-stories/index.html");

requireMatch(article, /<link rel="canonical" href="https:\/\/totalcross\.com\/traffic-control-system-by-tecdet\/"/, "self-canonical Tecdet URL");
requireMatch(article, /<meta property="og:type" content="article"/, "article Open Graph type");
requireMatch(article, /"@type":"BlogPosting"/, "BlogPosting JSON-LD");
requireMatch(article, /<meta property="article:author" content="Kaique Mancoso"/, "article author metadata");
requireMatch(article, /href="\/blog\/tags\/linux-arm\/"/, "article tag link");
requireMatch(article, /aria-label="On this page"|class="toc"/, "article table of contents");
requireMatch(blog, /Traffic control system by Tecdet/, "content-driven blog listing");
requireMatch(rss, /Traffic control system by Tecdet/, "Tecdet RSS item");
requireMatch(rss, /https:\/\/totalcross\.com\/traffic-control-system-by-tecdet\//, "RSS canonical article URL");
requireMatch(sitemapCompatibility, /https:\/\/totalcross\.com\/sitemap-index\.xml/, "compatibility sitemap index target");
requireMatch(sitemapIndex, /sitemap-0\.xml/, "generated sitemap shard");
requireMatch(sitemapRoutes, /https:\/\/totalcross\.com\/traffic-control-system-by-tecdet\//, "article sitemap URL");
requireMatch(sitemapRoutes, /https:\/\/totalcross\.com\/blog\//, "blog sitemap URL");

const generated = generatedText(distPath);
if (/Content system fixture|Exemplo do sistema de conteúdo|content-system-fixture/i.test(generated)) {
  failures.push("Draft fixture leaked into production output");
}

const fixtures = [
  ["astro/content/blog/drafts/content-system-fixture.md", "en"],
  ["astro/content/blog/drafts/pt-br/content-system-fixture.md", "pt-BR"],
];
for (const [path, language] of fixtures) {
  const source = readFileSync(new URL(path, root), "utf8");
  requireMatch(source, /^translationKey: content-system-fixture$/m, `${language} translation key`);
  requireMatch(source, new RegExp(`^language: ${language}$`, "m"), `${language} language metadata`);
  requireMatch(source, /^draft: true$/m, `${language} draft exclusion`);
  requireMatch(source, /^series:\n {2}name: .+\n {2}order: 1$/m, `${language} series metadata`);
}

if (failures.length) {
  console.error(`content-check failed:\n${failures.join("\n")}`);
  process.exit(1);
}

console.log("content-check: article=1 archives=3 rss=1 sitemaps=3 drafts=excluded translations=paired");
