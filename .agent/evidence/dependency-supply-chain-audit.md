<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Dependency supply-chain audit evidence

- 2026-08-12 | revision `5d09d93` | M0 setup | `git status --short --branch` |
  PASS | clean `main`, identical to `origin/main`; host shell Node 25.2.1/npm 11.6.2;
  bundled authoritative runtime Node 24.14.0 | no dependency commands run yet.
- 2026-08-12 | revision `5d09d93` | M0 scope | manifest/workflow/script inspection |
  PASS | Astro 7.2 range, direct `sharp` 0.35.3, Node engine `>=22.12.0`; CI and Pages
  use Node 24 plus `npm ci`; optional distribution executes local script with native
  `fetch` | resolved graph and audit pending.
- 2026-08-12 | revision `5d09d93` | M0 clean dependency baseline | Node 24.14.0,
  npm 11.6.2; `npm ci`; `npm audit --json`; targeted `npm ls` and lock extraction |
  PASS | 668 installed; 759 lock entries; zero audit findings; requested current
  packages limited to PostCSS 8.5.26, two js-yaml 4.3.1 copies, and sharp 0.35.3 |
  platform optional entries explain the installed/locked count difference.
- 2026-08-12 | revision `5d09d93` | M0 supply-chain baseline | `npm audit
  signatures`; lock source/integrity/install-script extraction | PASS | 666 verified
  registry signatures; 93 attestations; zero non-registry sources; zero registry
  tarballs without integrity; install scripts only for esbuild 0.28.2 and optional
  fsevents 2.3.3 | npm does not require every package to publish an attestation.
- 2026-08-12 | revision `5d09d93` | M1 advisory reconstruction | repository
  Dependabot API, global GitHub Advisory Database, archived `site` lock at `999f35b`,
  old Dependabot PR inventory | PASS with limitation | repository endpoint returned
  zero alerts; exact current/old versions were compared to authoritative ranges;
  old PRs #7-#11 target `site` | vanished alert numbers cannot be reconstructed.
- 2026-08-12 | revision `5d09d93` | M1 native-image check | `sharp.versions` |
  PASS | sharp 0.35.3 loads bundled libvips 8.18.3, outside GHSA-f88m-g3jw-g9cj;
  all locked `@img/sharp-libvips-*` packages are 1.3.2 | host is darwin-arm64.
- 2026-08-12 | revision `5d09d93` | M2 workflow hardening | immutable action
  refs, explicit High audit and signature gates, `npm run workflow:check`, targeted
  license check, `git diff --check` | PASS | workflow policy accepts all three
  workflows; 9/9 changed/untracked license paths compliant; incorporated into
  implementation commit `3888bbe`
  | Level 3 pending at that checkpoint.
- 2026-08-12 | revision `5d09d93` + audit worktree | M3 Level 3 closure | clean
  Node 24 `npm ci`; both audit gates; test, all-files license, release/workflow,
  Astro, build, asset, and site validation; YAML parse; diff check | PASS | zero
  vulnerabilities; 666 signatures/93 attestations; 17 tests; 179 license files;
  54 Astro files with zero diagnostics; static build; assets zero failures/one
  unchanged 727,056-byte warning; 14 routes/20 HTML/zero broken links | production
  publication was not requested.
- 2026-08-12 | implementation `3888bbe` | named advisory evaluator and
  structured artifact | `npm run security:advisories`; `npm run
  security:advisories:check`; targeted unit/CLI tests | PASS | five independent
  records are `NOT PRESENT` from manifest, lock, and installed-tree evidence; the
  Critical sanitize-html record also has zero source/tooling references; fixture
  reintroduction produces `REQUIRES FIX` and exit 1 | complete structured result is
  `.agent/evidence/dependency-advisory-regressions.json`.
- 2026-08-12 | implementation `3888bbe` | authoritative advisory range
  recheck | GitHub Advisory API for all five GHSAs | PASS | implemented affected and
  fixed ranges match current GitHub records; three Axios and tmp are High,
  sanitize-html is Critical | advisory metadata last updated 2026-06-11/12.
- 2026-08-12 | implementation `3888bbe` | M4 Level 3 closure | clean Node 24
  `npm ci`; npm High audit and signatures; named advisory artifact check; tests;
  all-files license; release/workflow; Astro; build; assets; site/content validation
  | PASS | zero vulnerabilities; 666 signatures/93 attestations; five `NOT PRESENT`
  advisory records; 23 tests; 184 license files; 57 Astro files with zero
  diagnostics; static build; assets zero failures/one unchanged warning; 14 routes,
  20 HTML, zero broken links | production publication was not requested.
