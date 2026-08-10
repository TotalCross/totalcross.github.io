<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Post-migration visual corrections state

- Active milestone: M1 — restore favicon and social/external icons.
- Active slice: derive valid favicon/touch metadata from the existing TotalCross
  emblem and replace six footer text placeholders with static accessible SVG icons.
- Last completed logical slice: M0 narrow regression baseline.
- Active paths: `src/layouts/BaseLayout.astro`, `src/components/SiteFooter.astro`, a
  focused `SocialIcon.astro`, public favicon/manifest derivatives, and REUSE mappings.
- Next concrete action: choose the smallest provenance-safe static SVG source, repair
  the broken favicon derivatives, and implement the complete M1 behavior before its
  one milestone build/validation pass.
- Focused validation completed: favicon/icon file types and dimensions inspected;
  existing brand derivatives viewed; legacy footer compared; existing `dist/`
  reported 19 HTML documents with emitted SPDX header comments.
- Deferred validation: M1 Astro check/build/site validation and representative footer
  evidence wait until the full M1 implementation is complete.
- Active decisions: preserve the legacy destinations and TotalCross emblem; render
  social glyphs as static/build-time SVG with no React or client runtime.
- Blockers: none.
- Deliberate out of scope: image payload optimization belongs to the next ExecPlan.
- Resume command: `sed -n '1,180p' .agent/state/post-migration-visual-corrections.md && git status --short --branch`.
