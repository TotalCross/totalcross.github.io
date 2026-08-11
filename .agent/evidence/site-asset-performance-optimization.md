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
