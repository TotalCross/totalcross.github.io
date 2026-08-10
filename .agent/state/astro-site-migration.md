<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Astro site migration state

- Active milestone: M0 — baseline and migration guardrails.
- Active slice: capture immutable source/deployment refs, remote Pages settings,
  route/asset/metadata/tracking inventories, and representative production visuals.
- Last logical commit: `a44ea2d` — completed policy/CI/header prerequisite (M0A).
- Active paths: `.agent/baseline/`, `.agent/state/astro-site-migration.md`,
  `.agent/evidence/astro-site-migration.md`, `README.md`, Gatsby configuration and
  route sources, and the current production site.
- Next concrete action: commit the M0A handoff, load the GitHub and browser operating
  instructions, recheck remote refs/settings, then create compact baseline manifests.
- Focused validation completed: supporting policy plan P0–P4 completed; staged final
  policy check accepted 115/115 files; worktree was clean after commit `a44ea2d`.
- Deferred validation: the single legacy Gatsby build, route count, and production
  desktop/mobile screenshots occur after the M0 inventories are implemented.
- Active decisions: `site` at original revision `999f35b` is the authoritative
  legacy source; `master` is generated production history and must never be merged;
  no production setting changes occur in M0.
- Blockers: none known; GitHub Pages settings may depend on available credentials.
- Deliberate out-of-scope files: no Gatsby behavior, dependencies, deployment, or
  public content changes until the M0 baseline is accepted.
- Resume command: `git status --short --branch && sed -n '1,180p' .agent/state/astro-site-migration.md`.
