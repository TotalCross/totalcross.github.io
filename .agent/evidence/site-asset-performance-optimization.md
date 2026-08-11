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
