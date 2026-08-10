<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Astro site migration state

- Active milestone: M0 — baseline and migration guardrails.
- Active slice: baseline manifests and README guardrails are ready to commit; next
  run the single legacy Gatsby build and retry production screenshot capture.
- Last logical commit: `bafb553` — Astro migration prerequisite handoff (M0A).
- Active paths: `.agent/baseline/`, `.agent/state/astro-site-migration.md`,
  `.agent/evidence/astro-site-migration.md`, `README.md`, Gatsby configuration and
  route sources, and the current production site.
- Next concrete action: commit the M0 inventory slice; install with an isolated
  compatible Node/npm toolchain if needed, run the legacy production build once,
  record its route count, and retry the required browser screenshots.
- Focused validation completed: four baseline YAML files parsed; 42 assets, 14 page
  routes, and nine endpoints are inventoried; production HTTP checks completed;
  targeted license check and `git diff --check` passed.
- Deferred validation: the single legacy Gatsby build and production desktop/mobile
  screenshots remain. Screenshot capture is temporarily blocked because Browser
  discovery returned no available backend after the prescribed troubleshooting flow.
- Active decisions: `site` at original revision `999f35b` is the authoritative
  legacy source; `master` is generated production history and must never be merged;
  no production setting changes occur in M0.
- Blockers: Browser backend unavailable for M0 visual capture; other M0 work can
  continue. GitHub read access is available and current permissions report admin.
- Deliberate out-of-scope files: no Gatsby behavior, dependencies, deployment, or
  public content changes until the M0 baseline is accepted.
- Resume command: `git status --short --branch && sed -n '1,180p' .agent/state/astro-site-migration.md`.
