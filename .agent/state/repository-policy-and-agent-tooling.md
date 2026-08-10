<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Repository policy and agent tooling state

- Active milestone: P4 — CI integration and policy closure.
- Active slice: add all-files license validation to PR/build gates, apply safe
  headers to clearly owned tracked files, and perform the policy plan's single final
  validation including controlled fixer/refusal checks.
- Last logical commit: `5f6890a` — safe SPDX validator and fixer (P2).
- Active paths: `.agent/PLANS.md`, `.agent/plans/`, `.agent/state/`,
  `.agent/evidence/`, and `AGENTS.md`.
- Next concrete action: commit the completed P3 skills, then inspect the current
  workflow/package build gate and implement P4 integration without migrating Gatsby.
- Focused validation completed: skill-creator `quick_validate.py` reported both
  skills valid in an isolated temporary environment; no scaffold TODOs remain;
  targeted license check reported four compliant files and zero issues.
- Deferred validation: policy-wide validation waits until P4 as required by the
  plan; no build is relevant to P0.
- Active decisions: both skills remain concise and use existing repository scripts;
  no duplicated resource scripts or references are needed.
- Blockers: none.
- Deliberate out-of-scope files: Gatsby behavior and remaining starter package
  metadata remain unchanged until the Astro migration.
- Resume command: `git status --short --branch && sed -n '1,180p' .agent/state/repository-policy-and-agent-tooling.md`.
