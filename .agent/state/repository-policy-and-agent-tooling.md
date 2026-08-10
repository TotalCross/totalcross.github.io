<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Repository policy and agent tooling state

- Active milestone: P3 — repository-local skills.
- Active slice: add concise `license-validation` and `logical-commits` skills with
  valid frontmatter and workflows bound to the canonical repository commands.
- Last logical commit: `6f924ed` — repository licensing policy and mapping (P1).
- Active paths: `.agent/PLANS.md`, `.agent/plans/`, `.agent/state/`,
  `.agent/evidence/`, and `AGENTS.md`.
- Next concrete action: commit the completed P2 validator slice, then create both
  repository-local skill files and validate their discovery/frontmatter.
- Focused validation completed: `npm run license:test` passed 5/5 tests;
  `npm run license:check` checked five changed/untracked policy-relevant files with
  zero issues; `git diff --check` passed.
- Deferred validation: policy-wide validation waits until P4 as required by the
  plan; no build is relevant to P0.
- Active decisions: validator classification consumes the ordered REUSE annotations;
  fix mode writes only known project/editorial headers and refuses partial or
  conflicting metadata.
- Blockers: none.
- Deliberate out-of-scope files: Gatsby behavior and remaining starter package
  metadata remain unchanged until the Astro migration.
- Resume command: `git status --short --branch && sed -n '1,180p' .agent/state/repository-policy-and-agent-tooling.md`.
