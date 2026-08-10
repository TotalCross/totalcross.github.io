<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Repository policy and agent tooling state

- Active milestone: P1 — repository licensing policy and SPDX mapping.
- Active slice: inventory existing notices and classify tracked paths without
  guessing ownership; then add the root license, notice, license texts/reference,
  and SPDX-compatible mapping.
- Last logical commit: none; branch begins at `999f35b` from `site`.
- Active paths: `.agent/PLANS.md`, `.agent/plans/`, `.agent/state/`,
  `.agent/evidence/`, and `AGENTS.md`.
- Next concrete action: commit the completed P0 slice, then inspect tracked file
  categories, existing notices, and package metadata needed for P1.
- Focused validation completed: `.agent/PLANS.md` matches the source commit
  byte-for-byte; root guidance and plan paths were inspected; `git diff --check`
  passed.
- Deferred validation: policy-wide validation waits until P4 as required by the
  plan; no build is relevant to P0.
- Active decisions: `site` remains the authoritative baseline; the existing
  `feat/astro-site-migration` branch already starts exactly at `origin/site`;
  supplied plans are normalized to the paths named by the request.
- Blockers: none.
- Deliberate out-of-scope files: Gatsby behavior remains unchanged; P1 may classify
  its tracked files but does not migrate them.
- Resume command: `git status --short --branch && sed -n '1,180p' .agent/state/repository-policy-and-agent-tooling.md`.
