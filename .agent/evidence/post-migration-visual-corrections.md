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
- 2026-08-10, M1 implementation: regenerated 32px PNG/ICO and 180px Apple-touch
  derivatives from the existing 512px TotalCross brand emblem. The head now declares
  ICO, PNG, Apple touch, manifest, and theme color metadata; the manifest declares
  stable root scope plus eight verified PNG sizes. Font Awesome Free Brands 7.3.1 is
  build-time-only, with CC BY 4.0/MIT provenance recorded in `NOTICE.md`.
- 2026-08-10, M1 social output: GitHub, legacy Twitter bird labeled X (Twitter),
  Telegram, YouTube, Instagram, and LinkedIn render as static SVG paths inside labeled
  links with `target="_blank"` and `rel="noopener noreferrer"`. Generated home HTML
  contains all six and no client `<script>`.
- 2026-08-10, M1 validation: targeted licensing passed 8/8 changed policy paths;
  Astro check reported 49 files and zero diagnostics; the build produced 18 pages;
  site/content validation reported `routes=14 html=20 broken=0`, complete archives,
  RSS/sitemaps, draft exclusion, and translation pairing. The focused checker found
  four head relationships, six social icons, eight manifest icons, and zero scripts.
- 2026-08-10, M1 visual evidence: local production full-page captures at 1440×900 and
  390×844 preserve layout and show six recognizable footer glyphs. SHA-256 values are
  `5d0ecd282e9dce9f11ef411e9a93e88bb0f99f4065bc411649f3b6a06a9b642f` and
  `1bcfac838791ec8ca3ab80c41e029bcddcbb4090f64e61e45103b6e9ef35d544`.
- 2026-08-10, M2 header model: `.astro` uses the canonical JavaScript block inside
  Astro frontmatter; renderable `src/content/blog` Markdown/MDX uses YAML comments
  inside content frontmatter; other Markdown retains non-rendered documentation
  headers. The fixer creates minimal Astro frontmatter when absent, migrates only
  verified legacy values, normalizes duplicates, and refuses conflicts.
- 2026-08-10, M2 migration: the deliberate all-files fixer accepted 151/151 and moved
  29 known authored headers, then four approved no-blank-line variants after their
  focused regression test. Tecdet page/article headers were moved manually with the
  existing third-party holder and `LicenseRef-ThirdParty-Material` unchanged.
- 2026-08-10, M2 validation: 11 license tests passed; all-files validation accepted
  151/151 with 62 mapped and 20 ignored paths. Astro check reported 49 files and zero
  diagnostics; 18 pages built; generated validation reported
  `routes=14 html=20 broken=0 rendered-spdx=0`, with complete content/feed/sitemap
  assertions. An independent recognized-comment scan also found `html=20 leaked=0`.
- 2026-08-10, M3 closure: the exact Level 3 matrix passed 17 total unit tests,
  151/151 all-files licensing, release identity at 1.0.0/tag v1.0.0, workflow policy,
  zero Astro diagnostics, 18 native pages, `routes=14 html=20 broken=0
  rendered-spdx=0`, and all article/archive/feed/sitemap/draft/translation checks.
  Production publication is intentionally deferred to the combined v1.0.1 boundary.
