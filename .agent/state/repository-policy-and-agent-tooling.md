<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Repository policy and agent tooling state

- Active milestone: complete — P0 through P4 accepted.
- Active slice: final P4 policy/CI/header changes are ready for their logical commit.
- Last logical commit: `d1a1327` — repository license and commit skills (P3).
- Active paths: `.agent/PLANS.md`, `.agent/plans/`, `.agent/state/`,
  `.agent/evidence/`, and `AGENTS.md`.
- Next concrete action: commit P4, then start Astro M0A by creating/reading its state
  file and reconciling the completed supporting-plan outcome.
- Focused validation completed: repository-wide fixer reported 45 safe changes and
  no issues; final staged all-files check reported 115/115 compliant, 51 mapped,
  five ignored;
  five tests, YAML/JSON parsing, pinned Prettier, excluded-file immutability, and
  `git diff --check` passed.
- Deferred validation: no Gatsby build was required because P4 changes headers and
  gates only; full clean-build/deployment validation belongs to the Astro plan.
- Active decisions: the legacy `site` publication action remains as a recovery path
  until Astro deployment acceptance passes; it is now gated by license validation.
- Blockers: none.
- Deliberate out-of-scope files: Gatsby behavior and remaining starter package
  metadata remain unchanged until the Astro migration; legal confirmation of brand
  wording and ambiguous historical asset provenance remains human review.
- Handoff item: Astro M4 must include this completed policy/tooling work in the new
  `CHANGELOG.md` and `v1.0.0` reconciliation.
- Resume command: `git status --short --branch && sed -n '1,180p' .agent/state/repository-policy-and-agent-tooling.md`.
