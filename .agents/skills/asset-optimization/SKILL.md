---
name: asset-optimization
description: Optimize and validate media delivery in the TotalCross Astro website. Use when adding or replacing raster images, animation, or video; changing Astro Image, Picture, or getImage usage; investigating asset-size or page-payload budget failures; or reviewing source-versus-generated media provenance.
---
<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Asset optimization

Measure generated delivery, preserve provenance, and keep optimization changes tied to
the page that consumes each asset.

## Workflow

1. Read the active ExecPlan state and inspect the current asset report before editing.
2. Locate page references with `rg`; do not scan or rewrite unrelated media.
3. Preserve historical `src/assets/**` provenance under `REUSE.toml`. Run the
   license-validation skill for new derivatives or moved files.
4. Prefer Astro `Picture` for responsive AVIF/WebP photographic content, `Image` for
   optimized local images, and `getImage` for CSS backgrounds. Size responsive
   candidates from the maximum rendered CSS width multiplied by the target device
   pixel ratio; provide approximately 2x coverage for important imagery when the
   source resolution permits it. Never upscale a low-resolution source to create a
   fake quality improvement: obtain a better source or constrain the rendered CSS
   width instead. Keep intrinsic sizes, eager-load only the LCP asset, and lazy-load
   below-fold images.
5. Replace large animated GIF delivery with WebM plus MP4 fallback and a compact
   poster. Record deterministic conversion commands; do not add ffmpeg to normal builds.
6. Complete the coherent slice before final validation. Run `npm run assets:test`,
   `npm run license:check`, `npm run workflow:check`, `npm run check`, one fresh
   `npm run build`, `npm run assets:check`, then `npm run validate` as required by the
   active milestone.

## Budget policy

Treat `scripts/assets/budgets.mjs` as canonical. Hard limits apply to generated
`dist/` output and representative fallback-resource proxies. Source masters remain
report-only when normal page delivery is transformed. Keep warnings visible; add a
reviewed path-specific exception only when measured visual quality justifies one.
