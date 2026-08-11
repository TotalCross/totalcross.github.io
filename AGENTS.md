<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Repository agent instructions

Read `.agent/PLANS.md` in full before creating or materially revising an ExecPlan.
For ongoing work, read the active file under `.agent/state/` first, then inspect only
the plan sections and repository paths needed for the next slice.

Use `.agents/skills/license-validation/SKILL.md` whenever files are created, moved,
split, or relicensed, or when license validation fails. Use
`.agents/skills/logical-commits/SKILL.md` before staging or committing changes.
Use `.agents/skills/asset-optimization/SKILL.md` when adding or replacing site media,
changing Astro image delivery, or investigating asset-budget failures.

Keep implementation and active planning files ideally below 20 KB or about 600
lines. Split focused responsibilities when that improves maintainability. Preserve
unrelated local changes, and do not stage them opportunistically.

Complete a coherent milestone or slice before its final validation. Earlier focused
diagnostics are appropriate only when needed to understand or unblock a concrete
failure. Do not repeatedly run full builds or test matrices during implementation.

Use the smallest validation level that establishes the current change:

1. Level 1 — focused static checks or targeted tests for the edited contract.
2. Level 2 — component or subsystem tests and its production build when relevant.
3. Level 3 — milestone-wide build, integration, route, link, policy, and visual checks.
4. Level 4 — clean-clone and production/deployment verification for release closure.

Record concise results in the active evidence file and keep the state file current
after logical commits and milestone boundaries.

The production implementation uses conventional Astro paths: authored code and
content live under `src/`, stable public files under `public/`, and generated output
under ignored `dist/`. Do not reintroduce Gatsby, React, branch-generated Pages
output, or a source-tree CNAME. Use Node 24 for parity with CI.

For ordinary changes, run the smallest relevant checks. Before a production or
release boundary, use `npm test`, `npm run license:check:all`, `npm run release:check`,
`npm run workflow:check`, `npm run check`, `npm run build`, and `npm run validate`.
