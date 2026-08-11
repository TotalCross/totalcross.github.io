<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Site asset performance optimization evidence

- 2026-08-10, M0 reporter: `scripts/asset-validation.mjs` inventories tracked source
  and generated media with deterministic path/extension/bytes/dimensions and reports
  the 12 largest entries. Its fallback-only payload proxy includes HTML, local `src`/
  poster resources, linked styles/icons/manifest, and recursive CSS URLs while
  explicitly excluding `srcset` candidate selection. Two focused tests pass.
- 2026-08-10, M0 baseline build: Node 24 built 18 pages. Source and generated media
  both contain 50 files totaling 31,553,407 bytes (30.09 MiB), proving raw source
  delivery. Largest outputs are Tecdet 10,846,651; GIF 8,325,288; coffee 2,952,258;
  Tecdet article 1,720,676; sample banner 1,177,657; hero 1,108,142; and printer
  1,092,660 bytes.
- 2026-08-10, M0 payload proxies: `/` includes 72 unique fallback resources totaling
  17,129,268 bytes (16.34 MiB). `/get-started/` includes 60 totaling 9,511,556 bytes
  (9.07 MiB). These are deterministic static regression proxies, not browser transfer
  measurements or `srcset` selection simulations.
- 2026-08-10, M1 responsive raster result: the generated artifact is 12,746,822 bytes
  including the unchanged 8,325,288-byte GIF; static media excluding that GIF fell
  from 23,228,119 to 4,421,534 bytes (81.0%). The home proxy fell to 2,111,330 bytes
  (2.01 MiB, 87.7% below M0). Delivered `home_tecdet` and `home_coffee` fallbacks fell
  94.4% and 97.3%; no static raster exceeds 1 MiB. Warnings identify Tecdet WebP
  fallbacks at 727,056 and 605,226 bytes for M3 policy.
- 2026-08-10, M1 checks: reporter tests passed 2/2; Astro checked 52 files with zero
  diagnostics; Node 24 built 18 pages and 79 optimized images; route/link/SPDX and
  content validation passed. Six automated production-output screenshots cover home,
  samples, and the Tecdet article at 1440x900 and 390x844. Their SHA-256 prefixes are
  `86328f96`, `66f299d4`, `3155da4c`, `a6d1c8e7`, `40090155`, and `e7cc0fd7`.
- 2026-08-10, M2 source: `led-totalcross.gif` was 8,325,288 bytes, 270x480,
  185 frames, and 13.07 seconds; SHA-256 `8107547f...55e2b2`. Its only page reference
  was get-started. Reproducible conversions (wrapped here for readability) were:

  ```text
  ffmpeg -hide_banner -loglevel error -i src/assets/led-totalcross.gif -map_metadata -1 -an -vf "scale=270:-2:flags=lanczos,format=yuv420p" -c:v libvpx-vp9 -crf 34 -b:v 0 -deadline good -cpu-used 2 -row-mt 1 -fps_mode vfr -y src/assets/led-totalcross.webm
  ffmpeg -hide_banner -loglevel error -i src/assets/led-totalcross.gif -map_metadata -1 -an -vf "scale=270:-2:flags=lanczos,format=yuv420p" -c:v libx264 -preset slow -crf 24 -movflags +faststart -fps_mode vfr -y src/assets/led-totalcross.mp4
  ffmpeg -hide_banner -loglevel error -i src/assets/led-totalcross.gif -map_metadata -1 -frames:v 1 -vf "scale=270:-2:flags=lanczos" -c:v libwebp -quality 80 -y src/assets/led-totalcross-poster.webp
  ```
- 2026-08-10, M2 result: WebM 191,142 bytes, MP4 260,976, and poster 8,928 total
  461,046 bytes (94.5% below the GIF). Their SHA-256 prefixes are `31ed375a`,
  `273c9b5b`, and `2fbdbc16`. Generated media is 4,882,580 bytes and get-started's
  proxy fell from 9.07 to 1.57 MiB. No built or source page references a GIF.
- 2026-08-10, M2 playback: headless Chromium selected the VP9/WebM source, reported
  `paused=false`, `currentTime=2.5`, `duration=13.07`, `readyState=4`, and 270x480.
  Focused plus desktop/mobile screenshots have SHA-256 prefixes `837c8ddf`,
  `53d31210`, and `42b5eb74`. Astro check/build and route/link/SPDX/content validation
  passed with 18 pages and zero diagnostics.
- 2026-08-10, M3 policy: generated media ≤6 MiB; each generated raster ≤1 MiB with
  warnings above 500 KiB; generated GIF ≤256 KiB; home proxy ≤3 MiB; get-started
  proxy ≤2 MiB. Source masters are report-only. PR CI and Pages both run
  `assets:check` after build and before site validation; workflow policy enforces order.
- 2026-08-10, M3 Level 3: repository skill validation passed; asset tests passed 4/4;
  license coverage passed 170/170; workflow policy passed; Astro checked 54 files with
  zero diagnostics; Node 24 built 18 pages; route/link/SPDX/content checks passed.
  Asset check reports zero failures and two warnings, with generated media at
  4,882,580/6,291,456 bytes, home at 2,111,330/3,145,728, and get-started at
  1,647,783/2,097,152.
- 2026-08-10, M4 Level 3 candidate: package/lock/changelog identify v1.0.1. Eleven
  license tests and six cross-post tests passed; license policy accepted 174/174;
  release and workflow policy passed; Astro checked 54 files with zero diagnostics;
  Node 24 built 18 pages; asset budgets passed with zero failures/two warnings; route,
  link, rendered-SPDX, RSS/sitemap, draft, and translation validation passed.
- 2026-08-10, production-check contract: HTTP validation now requires responsive
  picture AVIF/WebP markup, autoplay/muted/loop/playsinline WebM+MP4 delivery, no GIF
  reference, five fetchable optimized assets each below 1 MiB, and combined video plus
  poster below 2 MiB. It remains deferred until the candidate is deployed.
