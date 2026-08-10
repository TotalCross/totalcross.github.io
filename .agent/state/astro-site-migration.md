<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Astro site migration state

- Active milestone: M2 — public page and route parity.
- Active slice: port the remaining legacy public routes into the shared Astro shell,
  preserve trailing-slash behavior and important asset paths, then add manifest-led
  route and link checks.
- Last completed logical slice: M1 Astro foundation and home visual system.
- Active paths: `.agent/baseline/legacy-routes.yml`, legacy `src/pages/` sources,
  shared `astro/components/`, new `astro/pages/` routes, reusable legacy images,
  route/link validation scripts, and M2 state/evidence.
- Next concrete action: read the compact route manifest and only the legacy page
  sources required to map each route, then port them using the M1 components before
  M2's single check/build/route/link/visual validation stage.
- Validation completed: M0 baseline/recovery evidence is closed. M1 `astro check`
  passed with zero diagnostics; the supported Node 24 production build generated the
  static home route and canonical metadata with no client script source; Playwright
  comparisons at 1440×900 and 390×844 retained the legacy shared shell and hero
  identity without overflow.
- Environment limitation: the Codex in-app Browser has no available backend and will
  not be retried or treated as a blocker. Repository-local automation, headless
  Playwright, screenshots, and command-line validation are the fallback path.
- Active decisions: `site` at original revision `999f35b` remains the authoritative
  legacy source and `master` must never be merged. Astro stays isolated under
  `astro/` while Gatsby recovery remains operational; M7 performs the final source
  layout and asset move after route parity.
- Blockers: none. GitHub read access is available and current permissions report
  admin.
- Deliberate out-of-scope files: blog content-system work, deployment, cross-posting,
  versioning, and Gatsby cleanup remain for their later milestones.
- Resume command: `git status --short --branch && sed -n '1,180p' .agent/state/astro-site-migration.md`.
