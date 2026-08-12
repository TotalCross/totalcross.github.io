<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Dependency supply-chain audit state

- Active milestone: complete — M0 through M4 accepted.
- Active slice: none; named advisory regression enforcement and audit artifacts are
  ready for review.
- Base: clean `main` and `origin/main` at `5d09d93` (`v1.0.2`).
- Last implementation commit: `3888bbe` — enforce dependency advisory regressions.
- Active paths: none; the M4 worktree changes are complete.
- Next concrete action: use the normal push and PR process if publication is desired.
- Focused validation completed: clean Node 24 install; zero npm audit findings; 666
  package signatures and 93 attestations; exact requested graph/advisory matrix;
  sharp/libvips runtime inspection; focused workflow and license checks.
- Final validation: clean Node 24 install; zero audit findings; 666 signatures and 93
  attestations; five named advisories `NOT PRESENT`; 23 tests; 184/184 license files;
  release/workflow checks; 57 Astro files with zero diagnostics; static production
  build; asset checks with zero failures/one unchanged warning; 14 routes, 20 HTML
  files, and zero broken links.
- Deferred validation: production publication and GitHub-hosted CI are not requested.
- Active decisions: retain current dependency graph; do not regenerate the unchanged
  lockfile; pin all workflow actions; enforce High npm audit, registry signatures,
  and live evaluation of five named historical advisories.
- Blockers: none. Repository Dependabot API returns zero historical records, so the
  archived lock and public advisory ranges are the documented reconstruction source.
- Deliberate out of scope: production publication, Gatsby reintroduction, unrelated
  dependency modernization, and arbitrary major-version migration.
- Resume command: `sed -n '1,180p' .agent/state/dependency-supply-chain-audit.md && git status --short --branch`.
