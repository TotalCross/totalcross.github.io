<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Site asset performance optimization state

- Active milestone: M1 — optimize static raster delivery.
- Active slice: route homepage and remaining generated raster offenders through
  Astro `Picture`, `Image`, or `getImage` with responsive dimensions and modern
  formats while preserving the existing layout.
- Last completed logical slice: M0 deterministic source/output inventory and
  fallback-resource payload proxy.
- Active paths: homepage/page components that import the measured offenders,
  `astro.config.mjs` only if encoder defaults are justified, and asset reporting.
- Next concrete action: inspect the current homepage component contracts and replace
  raw `ImageMetadata.src` delivery for the dominant static assets before one M1 build.
- Focused validation completed: reporter tests passed 2/2; fresh Node 24 build produced
  18 pages; baseline report measured 50 source and 50 generated media files at
  31,553,407 bytes, home proxy 17,129,268 bytes, and get-started proxy 9,511,556 bytes.
- Deferred validation: M1 Astro/build/report/site/visual checks wait until all static
  raster transformations are implemented.
- Active decisions: Sharp 0.35.3 is explicit for deterministic reporting and Astro
  transforms; payload proxies include HTML plus local fallback/CSS resources and
  intentionally ignore `srcset` candidate selection.
- Blockers: none.
- Deliberate out of scope: GIF-to-video conversion is M2; hard budgets and CI are M3.
- Resume command: `sed -n '1,180p' .agent/state/site-asset-performance-optimization.md && git status --short --branch`.
