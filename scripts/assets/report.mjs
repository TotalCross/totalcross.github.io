/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join, relative, resolve, sep } from "node:path";
import sharp from "sharp";

export const mediaExtensions = new Set([
  ".avif", ".gif", ".ico", ".jpeg", ".jpg", ".mp4", ".png", ".svg", ".webm", ".webp",
]);

export function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KiB`;
  return `${(bytes / 1024 ** 2).toFixed(2)} MiB`;
}

function walk(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

async function mediaRecord(root, path) {
  let dimensions = null;
  if (![".ico", ".mp4", ".svg", ".webm"].includes(extname(path).toLowerCase())) {
    try {
      const metadata = await sharp(path, { animated: true }).metadata();
      if (metadata.width && metadata.height) dimensions = `${metadata.width}x${metadata.height}`;
    } catch {
      dimensions = null;
    }
  }
  return {
    path: relative(root, path).split(sep).join("/"),
    extension: extname(path).toLowerCase(),
    bytes: statSync(path).size,
    dimensions,
  };
}

async function records(root, paths) {
  const result = await Promise.all(paths.map((path) => mediaRecord(root, path)));
  return result.sort((left, right) => right.bytes - left.bytes || left.path.localeCompare(right.path));
}

export async function sourceMedia(root) {
  const output = execFileSync("git", ["ls-files", "-z", "src/assets", "public"], {
    cwd: root,
    encoding: "utf8",
  });
  const paths = output
    .split("\0")
    .filter(Boolean)
    .filter((path) => mediaExtensions.has(extname(path).toLowerCase()))
    .map((path) => join(root, path));
  return records(root, paths);
}

export async function generatedMedia(root) {
  const dist = join(root, "dist");
  const paths = walk(dist).filter((path) => mediaExtensions.has(extname(path).toLowerCase()));
  return records(dist, paths);
}

function cleanReference(reference) {
  if (!reference || /^(?:[a-z]+:|#|\/\/|data:)/i.test(reference)) return null;
  return reference.split(/[?#]/)[0];
}

function htmlReferences(source) {
  const references = [];
  for (const match of source.matchAll(/<(?:img|script|source|video)\b[^>]*?\b(?:src|poster)="([^"]+)"/gi)) {
    references.push(match[1]);
  }
  for (const match of source.matchAll(/<link\b([^>]*?)>/gi)) {
    const rel = match[1].match(/\brel="([^"]+)"/i)?.[1] ?? "";
    const href = match[1].match(/\bhref="([^"]+)"/i)?.[1];
    if (href && /(?:stylesheet|icon|manifest|preload)/i.test(rel)) references.push(href);
  }
  return references;
}

function cssReferences(source) {
  return [...source.matchAll(/url\((?:"|')?([^"')]+)(?:"|')?\)/g)].map((match) => match[1]);
}

function resolveReference(dist, owner, reference) {
  const clean = cleanReference(reference);
  if (!clean) return null;
  const path = clean.startsWith("/") ? resolve(dist, clean.slice(1)) : resolve(dirname(owner), clean);
  const distPrefix = `${resolve(dist)}${sep}`;
  if (!path.startsWith(distPrefix) || !existsSync(path) || !statSync(path).isFile()) return null;
  return path;
}

export function payloadProxy(dist, htmlPath) {
  const pending = [htmlPath];
  const included = new Set();

  while (pending.length) {
    const path = pending.shift();
    if (included.has(path)) continue;
    included.add(path);
    const extension = extname(path).toLowerCase();
    if (extension !== ".html" && extension !== ".css") continue;
    const source = readFileSync(path, "utf8");
    const references = extension === ".html" ? htmlReferences(source) : cssReferences(source);
    for (const reference of references) {
      const resolved = resolveReference(dist, path, reference);
      if (resolved && !included.has(resolved)) pending.push(resolved);
    }
  }

  const files = [...included].sort();
  return {
    bytes: files.reduce((total, path) => total + statSync(path).size, 0),
    files,
  };
}

export function representativePages(root) {
  const dist = join(root, "dist");
  if (!existsSync(dist)) return [];
  const html = walk(dist).filter((path) => extname(path) === ".html");
  const pages = new Map([["/", join(dist, "index.html")]]);
  for (const path of html) {
    if (!readFileSync(path, "utf8").includes("led-totalcross")) continue;
    const relativePath = relative(dist, path).split(sep).join("/");
    const route = relativePath === "index.html" ? "/" : `/${relativePath.replace(/index\.html$/, "")}`;
    pages.set(route, path);
  }
  return [...pages].map(([route, path]) => ({ route, path, ...payloadProxy(dist, path) }));
}
