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
const manifest = readFileSync(new URL(".agent/baseline/legacy-routes.yml", root), "utf8");
const routeBlock = manifest.split(/^endpoints:/m)[0];
const routes = [...routeBlock.matchAll(/^\s+- path: "([^"]+)"/gm)].map((match) => match[1]);

function outputPath(urlPath) {
  if (urlPath === "/") return new URL("index.html", dist);
  if (urlPath.endsWith(".html")) return new URL(urlPath.slice(1), dist);
  return new URL(`${urlPath.slice(1).replace(/\/$/, "")}/index.html`, dist);
}

const missingRoutes = routes.filter((route) => !existsSync(outputPath(route)));

function htmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(path) : extname(path) === ".html" ? [path] : [];
  });
}

const broken = [];
const renderedSpdxHeaders = [];
for (const file of htmlFiles(distPath)) {
  const html = readFileSync(file, "utf8");
  if (/<!--\s*SPDX-FileCopyrightText:[\s\S]*?SPDX-License-Identifier:[\s\S]*?-->/m.test(html)) {
    renderedSpdxHeaders.push(file.replace(distPath, ""));
  }
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1];
    if (/^(?:[a-z]+:|#|\/\/)/i.test(value)) continue;
    const clean = value.split(/[?#]/)[0];
    if (!clean.startsWith("/")) continue;
    const candidate = clean.endsWith("/") || extname(clean) === "" ? outputPath(clean.endsWith("/") ? clean : `${clean}/`) : new URL(clean.slice(1), dist);
    if (!existsSync(candidate)) broken.push(`${file.replace(dist.pathname, "")}: ${value}`);
  }
}

if (missingRoutes.length || broken.length || renderedSpdxHeaders.length) {
  if (missingRoutes.length) console.error(`Missing legacy routes:\n${missingRoutes.join("\n")}`);
  if (broken.length) console.error(`Broken local references:\n${broken.join("\n")}`);
  if (renderedSpdxHeaders.length) console.error(`Rendered SPDX authoring headers:\n${renderedSpdxHeaders.join("\n")}`);
  process.exit(1);
}

console.log(`site-check: routes=${routes.length} html=${htmlFiles(distPath).length} broken=0 rendered-spdx=0`);
