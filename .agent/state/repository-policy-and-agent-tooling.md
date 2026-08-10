<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Repository policy and agent tooling state

- Active milestone: P2 — license validator and safe header fixer.
- Active slice: implement a deterministic Git-aware, path-aware CLI with targeted,
  all-files, and conservative fix modes, then expose stable package commands.
- Last logical commit: `0e31684` — planning contract and agent discovery (P0).
- Active paths: `.agent/PLANS.md`, `.agent/plans/`, `.agent/state/`,
  `.agent/evidence/`, and `AGENTS.md`.
- Next concrete action: commit the completed P1 policy slice, then design the small
  validator around `REUSE.toml` classifications and supported comment styles.
- Focused validation completed: P1 inventory found the existing normalize.css MIT
  notice and stale package `0BSD` declaration; `REUSE.toml` parses as version 1
  with five annotations; `git diff --check` passed.
- Deferred validation: policy-wide validation waits until P4 as required by the
  plan; no build is relevant to P0.
- Active decisions: source/editorial/brand/third-party policy matches the plan;
  unverified historical artwork uses the third-party reference; only unmistakable
  logo/identity files use the brand reference.
- Blockers: none.
- Deliberate out-of-scope files: Gatsby behavior and remaining starter package
  metadata remain unchanged until the Astro migration.
- Resume command: `git status --short --branch && sed -n '1,180p' .agent/state/repository-policy-and-agent-tooling.md`.
