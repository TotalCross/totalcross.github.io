<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Repository policy and agent tooling evidence

- 2026-08-10, P0 baseline: `feat/astro-site-migration` pointed to `999f35b`, the
  same commit as `site`, `origin/site`, and `origin/HEAD`; only the two supplied
  ExecPlans were untracked.
- 2026-08-10, P0 planning contract: copied
  `TotalCross/totalcross-depot-tools/.agent/PLANS.md` verbatim from commit
  `83528e55751b2dc749a9f54e0a443620552195be` into `.agent/PLANS.md`. The source
  checkout contained unrelated untracked files; the copy used the committed blob,
  not the working-tree file.
- 2026-08-10, P0 validation: `cmp` confirmed the local contract is byte-identical
  to the recorded committed blob; `git diff --check` passed. Root `AGENTS.md` is 32
  lines and names the plan resume protocol, both required skills, file-size
  guideline, preservation rule, and four proportional validation levels.
