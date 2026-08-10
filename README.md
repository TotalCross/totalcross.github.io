<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# TotalCross website

The production site is `https://totalcross.com`. The repository is migrating from
Gatsby to Astro under `.agent/plans/astro-site-migration.md`.

## Repository and migration guardrails

- `site` is the authoritative legacy source history; `master` contains generated
  GitHub Pages output and must never be merged into source history.
- The completed migration promotes source history to `main` and deploys only a
  GitHub Pages artifact. Generated production output must never be committed.
- Preserve public routes and important asset URLs recorded under `.agent/baseline/`.
- Read `.agent/state/astro-site-migration.md` first when resuming migration work.
- Follow `.agent/PLANS.md`, `AGENTS.md`, and the repository-local license and commit
  skills for implementation, validation, and commits.

## Legacy Gatsby commands

These commands remain supported only while the Astro replacement is implemented and
validated.

### Install

```sh
npm ci
```

### Develop

```sh
npm run develop
```

### Build and serve

```sh
npm run build
npm run serve
```

### License policy

```sh
npm run license:check
npm run license:check:all
npm run license:test
```
