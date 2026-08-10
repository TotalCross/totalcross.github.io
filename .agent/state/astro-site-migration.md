<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Astro site migration state

- Active milestone: M6 — optional cross-posting.
- Active slice: add an isolated, opt-in DEV/Forem adapter and manual Medium preparation
  path without coupling canonical site publication to external services.
- Last completed logical slice: M3 typed blog publishing, SEO, feeds, and localization
  readiness.
- Active paths: cross-post scripts/tests/state, the manual distribution workflow,
  article cross-post metadata, and focused fixture payloads/documentation.
- Next concrete action: implement the idempotent DEV payload/state adapter with dry-run
  coverage, then add the opt-in post-deployment workflow and supported Medium manual
  preparation path before M6 validation.
- Validation completed: M0-M2 remain closed. M3 Node 24 `astro check` passed with zero
  diagnostics; the build generated 18 native pages and 20 HTML documents after 404
  preparation; route/link validation found all 14 legacy contracts and zero broken
  references. Content validation passed the Tecdet article, three archives, RSS,
  sitemap chain, canonical/social/JSON-LD metadata, excluded drafts, and paired EN/PT
  fixtures. License regression tests passed 6/6, the final targeted check accepted
  31/31 changed files, and the milestone-wide check accepted 175/175 files.
- Environment limitation: the Codex in-app Browser has no available backend and will
  not be retried or treated as a blocker. Repository-local automation, headless
  Playwright, screenshots, and command-line validation are the fallback path.
- Active decisions: `site` at original revision `999f35b` remains the authoritative
  legacy source and `master` must never be merged. Astro stays isolated under
  `astro/` while Gatsby recovery remains operational; M7 performs the final source
  layout and asset move after route parity.
- Blockers: none. GitHub read access is available and current permissions report
  admin.
- Deliberate out-of-scope files: deployment, versioning, and Gatsby cleanup remain
  for their later milestones; M6 must not change production publication behavior.
- Resume command: `git status --short --branch && sed -n '1,180p' .agent/state/astro-site-migration.md`.
