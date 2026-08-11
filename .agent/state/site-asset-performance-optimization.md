<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Site asset performance optimization state

- Active milestone: M2 — replace oversized animated GIF delivery.
- Active slice: derive WebM, MP4, and a poster from `led-totalcross.gif`, replace its
  sole page reference with accessible `<video>` delivery, then remove the GIF source.
- Last completed logical slice: M1 responsive static images and optimized CSS
  backgrounds across the home, samples, page hero, and article layouts.
- Active paths: `src/pages/get-started/index.astro`, the source animation derivatives,
  REUSE coverage, asset reporting, and focused playback evidence.
- Next concrete action: inspect the source GIF timing and page contract, then record
  deterministic ffmpeg conversion commands before changing delivery.
- Focused validation completed: reporter tests 2/2; Astro check had zero diagnostics;
  Node 24 build produced 18 pages and 79 optimized images; site/content validation
  passed; home proxy is 2,111,330 bytes (87.7% below M0); no raster exceeds 1 MiB.
- Automated visual evidence: production-output screenshots cover home, samples, and
  the Tecdet article at 1440x900 and 390x844; layouts and responsive media remain
  consistent. One below-fold lazy sample was not fetched by the full-page capture,
  while generated HTML and build output prove its responsive sources exist.
- Deferred validation: M2 build/report/site/playback checks wait until conversion is
  complete.
- Active decisions: M1 uses AVIF/WebP `<Picture>` for photographic content, `<Image>`
  for the LCP hero, and `getImage()` for CSS backgrounds; warning output starts at
  500 KiB while the hard 1 MiB policy is deferred to M3.
- Blockers: none.
- Deliberate out of scope: hard budgets, CI enforcement, and the reusable skill are M3.
- Resume command: `sed -n '1,180p' .agent/state/site-asset-performance-optimization.md && git status --short --branch`.
