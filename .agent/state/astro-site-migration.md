<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Astro site migration state

- Active milestone: M7 — legacy removal and final handoff.
- Active slice: remove Gatsby/React/generated-branch infrastructure, move Astro into
  conventional `src/` and `public/` paths, finalize documentation/changelog/evidence,
  then prove a fresh clone and the final production release candidate.
- Last completed logical slice: M5 GitHub Pages Actions cutover.
- Active paths: legacy Gatsby source/config/dependencies/assets, Astro path moves,
  package scripts/lockfile, README/AGENTS/changelog, final validators, archival tags,
  fresh-clone evidence, production deployment, and v1.0.0 release metadata.
- Next concrete action: identify only Gatsby-era paths/dependencies now made obsolete,
  move `astro/` to `src/` and `static/` to `public/`, update import/license/build
  contracts, and remove the recovery toolchain before final validation.
- Validation completed: M0-M6 are closed. M5 PR run `31436490487` produced artifact
  `9081190501` for exact source `52b14de`; `main` now points to that commit and is the
  default branch. Pages build type is `workflow`; deployment run `31436630165` passed.
  All 14 legacy routes, RSS, sitemap chain, nine critical endpoints/assets, and the
  added sitemap files returned 200; HTTP redirected 301 to HTTPS; Astro/canonical/
  article/RSS metadata passed. The exact local artifact matched both committed M1
  home screenshot hashes at 1440x900 and 390x844.
- Environment limitation: the Codex in-app Browser has no available backend and will
  not be retried or treated as a blocker. Repository-local automation, headless
  Playwright, screenshots, and command-line validation are the fallback path.
- Active decisions: `site` at original revision `999f35b` remains the authoritative
  legacy source and `master` must never be merged. Astro stays isolated under
  `astro/` while Gatsby recovery remains operational; M7 performs the final source
  layout and asset move after route parity.
- Blockers: none. GitHub read access is available and current permissions report
  admin.
- External follow-up: GitHub's HTTPS-enforcement API currently returns 404 because a
  GitHub certificate does not exist behind the Cloudflare-served custom domain. The
  edge already redirects HTTP to HTTPS; recheck once at final handoff without
  blocking cleanup or release validation.
- Deliberate out-of-scope files: legacy branch deletion remains prohibited. M7 may
  preserve archival tags and create v1.0.0 only after final production proof.
- Resume command: `git status --short --branch && sed -n '1,180p' .agent/state/astro-site-migration.md`.
