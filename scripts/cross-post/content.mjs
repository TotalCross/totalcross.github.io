/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join, relative, resolve, sep } from "node:path";

const contentRoots = ["src/content/blog"];

function scalar(frontmatter, key, fallback) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
  if (!match) return fallback;
  const value = match[1].trim().replace(/^(?:"(.*)"|'(.*)')$/, "$1$2");
  if (value === "true") return true;
  if (value === "false") return false;
  return value;
}

function list(frontmatter, key) {
  const block = frontmatter.match(new RegExp(`^${key}:\\s*\\n((?: {2}- .+(?:\\n|$))+)`, "m"));
  return block ? [...block[1].matchAll(/^ {2}- (.+)$/gm)].map((match) => match[1].trim()) : [];
}

function nested(frontmatter, key, child, fallback) {
  const block = frontmatter.match(new RegExp(`^${key}:\\s*\\n((?: {2}.+(?:\\n|$))+)`, "m"));
  return block ? scalar(block[1].replace(/^ {2}/gm, ""), child, fallback) : fallback;
}

function bodyWithoutMetadata(source) {
  const body = source.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, "");
  return body.replace(/^<!--\s*\nSPDX-FileCopyrightText:[\s\S]*?SPDX-License-Identifier:[\s\S]*?-->\s*/, "").trim();
}

export function parseArticleSource(source, id, file = `${id}.md`) {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!match) throw new Error(`Article has no YAML frontmatter: ${file}`);
  const frontmatter = match[1];
  const language = scalar(frontmatter, "language", "en");
  const slug = id.split("/").at(-1);
  const legacyPath = scalar(frontmatter, "legacyPath", undefined);

  return {
    id,
    file,
    title: scalar(frontmatter, "title", ""),
    description: scalar(frontmatter, "description", ""),
    language,
    slug,
    canonicalUrl: new URL(
      legacyPath ?? (language === "pt-BR" ? `/pt-br/blog/${slug}/` : `/blog/${slug}/`),
      "https://totalcross.com",
    ).href,
    tags: list(frontmatter, "tags"),
    series: nested(frontmatter, "series", "name", undefined),
    coverImage: scalar(frontmatter, "coverImage", undefined),
    draft: scalar(frontmatter, "draft", false),
    crossPost: {
      dev: nested(frontmatter, "crossPost", "dev", false),
      medium: nested(frontmatter, "crossPost", "medium", false),
    },
    body: bodyWithoutMetadata(source),
  };
}

function articleFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return articleFiles(path);
    return [".md", ".mdx"].includes(extname(path)) ? [path] : [];
  });
}

export function readArticle(root, articleId) {
  const normalized = articleId.replace(/\\/g, "/").replace(/^\/+|\.(?:md|mdx)$/g, "");
  const availableRoot = contentRoots.map((path) => resolve(root, path)).find(existsSync);
  if (!availableRoot) throw new Error("Astro blog content directory was not found");
  const matches = articleFiles(availableRoot).filter((file) => {
    const id = relative(availableRoot, file).split(sep).join("/").replace(/\.(?:md|mdx)$/, "");
    return id === normalized || (!normalized.includes("/") && id.split("/").at(-1) === normalized);
  });
  if (matches.length !== 1) throw new Error(`Article selector must match exactly one file: ${articleId} (matched ${matches.length})`);
  const file = matches[0];
  const id = relative(availableRoot, file).split(sep).join("/").replace(/\.(?:md|mdx)$/, "");
  if (extname(file) === ".mdx") throw new Error("MDX articles require a manual distribution review");
  return parseArticleSource(readFileSync(file, "utf8"), id, file);
}
