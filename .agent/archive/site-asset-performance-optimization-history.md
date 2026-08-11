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

## M2 — Efficient animated media delivery

Completed 2026-08-10. Deterministic ffmpeg commands converted the sole 8.3 MB GIF to
VP9/WebM, H.264/MP4, and a WebP poster totaling 461 KB (94.5% smaller). Semantic video
markup preserves autoplay/muted/loop/playsinline behavior and adds native controls,
metadata preload, intrinsic sizing, and fallback content. Automated playback reached
2.5 seconds unpaused with the preferred WebM source.

## M3 — Enforced asset policy

Completed 2026-08-10. A tested canonical budget module protects generated raster,
GIF, total-media, home, and get-started output while source masters remain report-only.
PR CI and Pages enforce budgets in build order. A validated repository skill routes
future media work through Astro optimization, provenance review, and the same checks.

## M4 — v1.0.1 production closure

Completed 2026-08-10. The release candidate passed the combined Level 3 matrix and an
isolated clean-clone Level 4 matrix, merged through required PR CI, and deployed through
the validated Pages workflow. Production HTTP checks proved routes, metadata, optimized
picture/video resources, asset sizes, 404 handling, and HTTPS behavior without Browser.
