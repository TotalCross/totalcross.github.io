<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Site asset performance optimization state

- Active milestone: M4 — prepare v1.0.1 and complete review/deployment closure.
- Active slice: Level 3 release candidate is complete; recheck remote/tags/workflows,
  commit the candidate, then prove it in a clean clone before push/PR/merge/deploy.
- Last completed logical slice: M3 tested generated-output budgets now run after builds
  in PR CI and Pages; the repository asset-optimization skill is routed from `AGENTS.md`.
- Active paths: package release metadata, changelog, release checker, plan reporting,
  then clean-clone/GitHub/production evidence.
- Next concrete action: run targeted license/diff checks, commit the v1.0.1 candidate,
  recheck remote state, and execute the Level 4 clean-clone matrix.
- Focused validation completed: skill validation passed; assets tests 4/4; license
  coverage 170/170; workflow policy passed; Astro checked 54 files with zero
  diagnostics; Node 24 built 18 pages; asset and site/content checks passed.
- Budget evidence: generated media is 4,882,580/6,291,456 bytes; home is
  2,111,330/3,145,728; get-started is 1,647,783/2,097,152; zero hard failures and two
  warnings at 605,226 and 727,056 bytes under the 1 MiB raster ceiling.
- Final Level 3: 17 tests passed; license coverage 174/174; release/workflow checks
  passed; Astro checked 54 files with zero diagnostics; Node 24 built 18 pages; asset,
  route/link/SPDX, and content checks passed.
- Deferred validation: Level 4 clean clone, PR checks, merged Pages deployment,
  production HTTP/asset proof, final closure reporting, and v1.0.1 tag.
- Active decisions: release through normal review without bypass; tag only the exact
  deployed source commit after production proof; Browser remains optional and unused.
- Blockers: none.
- Deliberate out of scope: no v1.0.2 feature work or unrelated redesign in this cycle.
- Resume command: `sed -n '1,180p' .agent/state/site-asset-performance-optimization.md && git status --short --branch`.
