<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Astro site migration state

- Active milestone: M1 — Astro foundation and visual system.
- Active slice: inspect the M1 source shell, add the current Astro/TypeScript static
  foundation, and implement the representative shared shell and home page.
- Last completed logical slice: M0 automated visual baseline closure from clean
  checkpoint `c7182dc`.
- Active paths: `package.json`, lockfile, Astro/TypeScript configuration,
  `src/layouts/`, `src/components/`, `src/styles/`, reusable `src/assets/`, the home
  page, and the M1 migration state/evidence.
- Next concrete action: inspect only the legacy header/footer/home sources and their
  manifest-listed assets, then implement the Astro shell before running M1's final
  check/build/visual comparison.
- Validation completed: M0 inventories account for 42 assets, 14 routes, and nine
  endpoints; the live HTTP crawl passed; the documented Rosetta Gatsby build passed
  with 14/14 pages and 295 files; eight Playwright viewport baselines have verified
  dimensions and SHA-256 hashes and passed representative visual spot inspection.
- Environment limitation: the Codex in-app Browser has no available backend and will
  not be retried or treated as a blocker. Repository-local automation, headless
  Playwright, screenshots, and command-line validation are the fallback path.
- Active decisions: `site` at original revision `999f35b` is the authoritative
  legacy source; `master` is generated production history and must never be merged;
  no production setting changes occur in M0.
- Blockers: none. GitHub read access is available and current permissions report
  admin.
- Deliberate out-of-scope files: public route migration, blog content, deployment,
  cross-posting, versioning, and Gatsby cleanup remain for their later milestones.
- Resume command: `git status --short --branch && sed -n '1,180p' .agent/state/astro-site-migration.md`.
