<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Site asset performance optimization state

- Active milestone: M4 — prepare v1.0.1 and complete review/deployment closure.
- Active slice: update version/changelog/release policy and close plan reporting before
  the clean-clone, PR, protected merge, Pages deployment, production proof, and tag.
- Last completed logical slice: M3 tested generated-output budgets now run after builds
  in PR CI and Pages; the repository asset-optimization skill is routed from `AGENTS.md`.
- Active paths: package release metadata, changelog, release checker, plan reporting,
  then clean-clone/GitHub/production evidence.
- Next concrete action: inspect the current release validator and changelog contracts,
  update them for v1.0.1, and run the plan's final Level 3 matrix once.
- Focused validation completed: skill validation passed; assets tests 4/4; license
  coverage 170/170; workflow policy passed; Astro checked 54 files with zero
  diagnostics; Node 24 built 18 pages; asset and site/content checks passed.
- Budget evidence: generated media is 4,882,580/6,291,456 bytes; home is
  2,111,330/3,145,728; get-started is 1,647,783/2,097,152; zero hard failures and two
  warnings at 605,226 and 727,056 bytes under the 1 MiB raster ceiling.
- Deferred validation: final Level 3 release matrix, Level 4 clean clone, PR checks,
  merged Pages deployment, production HTTP/asset proof, and v1.0.1 tag.
- Active decisions: release through normal review without bypass; tag only the exact
  deployed source commit after production proof; Browser remains optional and unused.
- Blockers: none.
- Deliberate out of scope: no v1.0.2 feature work or unrelated redesign in this cycle.
- Resume command: `sed -n '1,180p' .agent/state/site-asset-performance-optimization.md && git status --short --branch`.
