<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Astro site migration state

- Active milestone: M5 — modern GitHub Pages cutover.
- Active slice: add source-only PR CI and Pages artifact deployment, validate the
  production artifact, then promote source history to `main` and switch Pages only
  after preserving and rechecking every rollback ref.
- Last completed logical slice: M4 version, changelog, and release metadata.
- Active paths: `.github/workflows/`, Astro build/validation commands, GitHub branch
  and Pages configuration, remote rollback refs, and deployed smoke evidence.
- Next concrete action: recheck local/remote HEADs, default branch, Pages source,
  domain, HTTPS health, Actions permissions, and legacy refs; then replace the legacy
  Gatsby workflow with PR CI plus an explicit Pages artifact deployment workflow.
- Validation completed: M0-M4 and M6 are closed. M4 `release:check` confirmed
  `totalcross-site@1.0.0`, matching lockfile metadata, Unreleased changelog state,
  annotated-tag procedure, and no local tag. `git ls-remote` also confirmed no remote
  `v1.0.0`; no tag or release was created.
- Environment limitation: the Codex in-app Browser has no available backend and will
  not be retried or treated as a blocker. Repository-local automation, headless
  Playwright, screenshots, and command-line validation are the fallback path.
- Active decisions: `site` at original revision `999f35b` remains the authoritative
  legacy source and `master` must never be merged. Astro stays isolated under
  `astro/` while Gatsby recovery remains operational; M7 performs the final source
  layout and asset move after route parity.
- Blockers: none. GitHub read access is available and current permissions report
  admin.
- Deliberate out-of-scope files: Gatsby dependency/source cleanup and the release tag
  remain for M7; legacy branches must not be deleted during M5.
- Resume command: `git status --short --branch && sed -n '1,180p' .agent/state/astro-site-migration.md`.
