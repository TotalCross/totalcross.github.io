<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Site asset performance optimization history

## M0 — Deterministic asset baseline

Completed 2026-08-10 without changing image delivery. A dependency-light reporter
uses explicit Sharp metadata plus repository/output traversal to rank source and
generated media. A tested fallback-resource graph provides representative page
payload proxies without claiming browser/network fidelity. The first fresh build
proved every 30.09 MiB source media byte was copied into generated output, with home
and get-started proxies at 16.34 MiB and 9.07 MiB respectively.

## M1 — Responsive static raster delivery

Completed 2026-08-10. Astro now generates responsive AVIF/WebP pictures, an optimized
eager LCP image, and optimized CSS backgrounds while preserving intrinsic dimensions
and below-fold lazy loading. Static generated media excluding the deferred GIF fell
81.0%, the home proxy fell 87.7% to 2.01 MiB, and automated desktop/mobile screenshots
covered every changed page class.
