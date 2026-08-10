/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://totalcross.com",
  output: "static",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.endsWith("/404/") && !page.endsWith("/404.html"),
    }),
  ],
  trailingSlash: "always",
  markdown: {
    shikiConfig: { theme: "github-dark" },
  },
});
