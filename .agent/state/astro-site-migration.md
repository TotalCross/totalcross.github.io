<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Astro site migration state

- Active milestone: M5 — modern GitHub Pages cutover.
- Active slice: remotely prove the committed PR Pages artifact, then promote the same
  source commit to `main`, switch Pages to Actions, and verify the production deploy
  without changing or deleting any legacy rollback ref.
- Last completed logical slice: M4 version, changelog, and release metadata.
- Active paths: `.github/workflows/`, Astro build/validation commands, GitHub branch
  and Pages configuration, remote rollback refs, and deployed smoke evidence.
- Next concrete action: commit and push the clean feature branch, open a draft PR
  against the current default `site`, and require its validation/artifact run to pass
  before creating/promoting `main` or changing the Pages source.
- Validation completed: M0-M4 and M6 are closed. M5 local Node 24 validation passed
  7 license tests, 6 cross-post tests, release/workflow checks, 0 Astro diagnostics,
  an 18-page build, `routes=14 html=20 broken=0`, and all content/feed/sitemap assertions. Live state
  was rechecked unchanged: default `site`, legacy Pages `master:/`, custom domain,
  HTTPS enforcement off, no `main`, and all four rollback refs at recorded commits.
  The all-files license validator also now excludes intentionally deleted tracked
  paths; its regression test and 201/201 repository closeout pass.
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
