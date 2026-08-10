/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://totalcross.com",
  output: "static",
  srcDir: "./astro",
  publicDir: "./static",
  outDir: "./dist",
  trailingSlash: "always",
});
