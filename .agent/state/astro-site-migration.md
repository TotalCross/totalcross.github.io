<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Astro site migration state

- Active milestone: M0 — baseline and migration guardrails.
- Active slice: all M0 guardrails and technical validation are complete except the
  required production desktop/mobile screenshots.
- Last logical commit: `48f644c` — legacy production baseline manifests and README.
- Active paths: `.agent/baseline/`, `.agent/state/astro-site-migration.md`,
  `.agent/evidence/astro-site-migration.md`, `README.md`, Gatsby configuration and
  route sources, and the current production site.
- Next concrete action: make an in-app browser backend available, capture the eight
  specified legacy screenshots under `.agent/baseline/screenshots/`, record their
  dimensions/hashes, run the M0 closure checks once, and mark M0 complete.
- Focused validation completed: four baseline YAML files parsed; 42 assets, 14 page
  routes, and nine endpoints inventoried; production HTTP checks completed. Gatsby
  build passed under Rosetta Node 14/npm 6 with 14/14 pages and 295 files; targeted
  license check and `git diff --check` passed before the inventory commit.
- Deferred validation: only production desktop/mobile screenshot capture remains.
  Browser setup, discovery troubleshooting, and a later retry all reported no
  available backend; no substitute browser-control surface was used.
- Active decisions: `site` at original revision `999f35b` is the authoritative
  legacy source; `master` is generated production history and must never be merged;
  no production setting changes occur in M0.
- Blockers: Browser backend unavailable for the required M0 visual capture. M1 must
  not start until this validation artifact is captured. GitHub read access is
  available and current permissions report admin.
- Deliberate out-of-scope files: no Gatsby behavior, dependencies, deployment, or
  public content changes until the M0 baseline is accepted.
- Resume command: `git status --short --branch && sed -n '1,180p' .agent/state/astro-site-migration.md`.
