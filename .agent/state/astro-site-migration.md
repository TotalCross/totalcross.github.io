<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Astro site migration state

- Active milestone: M3 — blog, SEO, feeds, and localization readiness.
- Active slice: replace the temporary M2 blog/article pages with a typed Astro content
  collection, author/tag routes, article rendering, feeds, sitemap, and translation-
  aware metadata while preserving the Tecdet root route.
- Last completed logical slice: M2 public route and asset parity.
- Active paths: `astro/content.config.ts`, `astro/content/`, blog/article layouts and
  routes, author/tag pages, RSS/sitemap endpoints, metadata components, the Tecdet
  source content, and focused content/feed validators.
- Next concrete action: implement the typed schema and migrate the Tecdet source plus
  a draft fixture, then drive the blog, article, author/tag, RSS, sitemap, canonical,
  JSON-LD, and optional translation links from that collection before M3 validation.
- Validation completed: M0-M1 remain closed. M2 `astro check` passed with zero
  diagnostics; 13 native pages plus the generated 404 compatibility copy satisfy all
  14 legacy route contracts; the route/link checker reported 15 HTML documents and
  zero broken local references; six Why TotalCross/blog/Tecdet desktop/mobile
  screenshots passed comparison with the captured identity and responsive behavior.
- Environment limitation: the Codex in-app Browser has no available backend and will
  not be retried or treated as a blocker. Repository-local automation, headless
  Playwright, screenshots, and command-line validation are the fallback path.
- Active decisions: `site` at original revision `999f35b` remains the authoritative
  legacy source and `master` must never be merged. Astro stays isolated under
  `astro/` while Gatsby recovery remains operational; M7 performs the final source
  layout and asset move after route parity.
- Blockers: none. GitHub read access is available and current permissions report
  admin.
- Deliberate out-of-scope files: cross-posting, deployment, versioning, and Gatsby
  cleanup remain for their later milestones.
- Resume command: `git status --short --branch && sed -n '1,180p' .agent/state/astro-site-migration.md`.
