<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Astro site migration history

## M0A — Repository licensing and agent tooling prerequisite

Completed 2026-08-10 at `a44ea2d`. The supporting plan installed the local planning
contract, licensing policy and mappings, conservative validator/fixer, repository
skills, project file headers, and a license CI gate while retaining the legacy
Gatsby publication path. Its separate editorial report records policy limitations
and human-review items.

## M0 — Baseline and migration guardrails

Completed 2026-08-10 from source checkpoint `c7182dc`. M0 recorded immutable source
and deployment refs, current Pages configuration, 14 public routes, nine endpoints,
42 source image assets, integrations, navigation/metadata behavior, live HTTP
responses, and the recoverable legacy publication path. The Gatsby production build
passed under the documented Rosetta Node 14/npm 6 compatibility environment with
14/14 routes and 295 generated files.

The in-app Browser limitation was replaced by the approved automated fallback.
Headless Playwright captured eight deterministic desktop/mobile viewport baselines
from the immutable deployed `master` artifact, and their dimensions and hashes are
recorded beside the images. No production or remote repository settings changed in
M0.
