<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# HiDPI responsive image correction state

- Active milestone: complete.
- Active slice: none; the final documentation commit records closure.
- Base and branch: `fix/hidpi-responsive-images` at `9788651`, created from the
  fetched `origin/main` on 2026-08-11.
- Last logical commit: `b6110f8` (`docs(agents): account for HiDPI image sizing`);
  implementation is `b9326e5` (`fix(images): correct homepage HiDPI rendering`).
- Active paths: `src/pages/index.astro`,
  `.agents/skills/asset-optimization/SKILL.md`, and this plan's support files.
- Next concrete action: none. If publishing, fetch and recheck remote state before
  any push or pull-request operation.
- Focused validation completed: targeted and repository-wide license checks; Astro
  check; final production build; generated dimensions, markup, candidate, ratio,
  and asset-budget checks; headless Edge captures at 1440 CSS px/DPR2 and 390 px.
- Deferred validation: none. Deployment/release checks are outside this focused
  source patch.
- Active decisions: no higher-resolution `home_homeapp` source exists in narrow
  repository history; keep its 1024 px source and cap normal rendering at 512 CSS
  px. Tecdet's 3366 px source permits 1200/1600 px responsive variants.
- Blockers: none.
- Deliberate out of scope: unrelated assets, generated `dist/`, layout redesign,
  and broader migration/performance work.
- Resume command: `git status --short --branch && sed -n '1,180p' .agent/state/hidpi-responsive-image-correction.md`.
