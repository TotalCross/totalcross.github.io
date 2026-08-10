<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Post-migration visual corrections evidence

- 2026-08-10, M0 branch baseline: focused branch and remote `main` both resolve to
  `5a1abc26f751f3680ac4cbff47d98d3169454d6f`; the two supplied ExecPlans were the
  only untracked paths.
- 2026-08-10, M0 favicon/head: `BaseLayout.astro` links only `/favicon.ico` with
  `sizes="any"` and omits the 32px PNG, Apple touch icon, and web manifest. The ICO is
  a 16×16 two-color Windows resource. The 32×32 PNG visibly contains only a small red
  mark, while `public/icons/icon-192x192.png` is a complete TotalCross emblem; all
  eight manifest PNGs have the dimensions declared by their filenames.
- 2026-08-10, M0 social parity: the current footer emits two-character placeholders
  for GitHub, X, Telegram, YouTube, Instagram, and LinkedIn with neither `target` nor
  `rel`. Legacy `site` used the corresponding Font Awesome brand glyphs. Destinations
  survived the migration unchanged.
- 2026-08-10, M0 SPDX emission: the existing generated `dist/` contains recognized
  project SPDX header comments in 19 HTML documents; `dist/index.html` begins with
  both authoring tags. Policy classifies Astro/HTML/Markdown/MDX as HTML-comment
  style, and the fixer inserts that header immediately after frontmatter, where Astro
  renders it into output.
