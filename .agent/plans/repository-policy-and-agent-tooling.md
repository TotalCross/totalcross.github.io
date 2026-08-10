<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Establish repository licensing and agent execution policy

This ExecPlan follows `.agent/PLANS.md`. It is a prerequisite/supporting plan for
`.agent/plans/astro-site-migration.md` and should be completed during that plan's
first milestone before broad Astro file creation begins.

## Purpose / Big Picture

Give `TotalCross/totalcross.github.io` an explicit, machine-readable licensing
policy and reusable agent workflows before the Gatsby-to-Astro migration creates or
moves many files. At completion, project-authored source has consistent SPDX
metadata owned by `2026 Amalgam Solucoes em TI Ltda.`, editorial content and brand
assets have deliberately separate terms, CI detects licensing drift, a safe fixer
handles routine headers, and repository-local skills guide both license maintenance
and logical commits.

Also copy the ExecPlan contract from
`TotalCross/totalcross-depot-tools/.agent/PLANS.md` into this repository at
`.agent/PLANS.md` so future plans do not depend on cross-repository instructions.
Preserve that copied file's existing copyright/license notice and content.

## Working Set and Resume Protocol

Use these paths during execution:

- `.agent/PLANS.md`: local verbatim copy of the referenced TotalCross ExecPlan
  contract. Read it when creating or materially revising an ExecPlan.
- `.agent/plans/repository-policy-and-agent-tooling.md`: this plan.
- `.agent/state/repository-policy-and-agent-tooling.md`: first read on resume.
- `.agent/evidence/repository-policy-and-agent-tooling.md`: compact append-only
  command/check evidence; search selectively.
- `.agent/archive/repository-policy-and-agent-tooling-history.md`: completed detail.
- `.agents/skills/license-validation/SKILL.md`: reusable license check/fix workflow.
- `.agents/skills/logical-commits/SKILL.md`: reusable commit preparation workflow.
- `scripts/license-validation.mjs`: deterministic repository license validator/fixer.
- `LICENSE`, `LICENSES/`, `NOTICE.md`, and `REUSE.toml` or equivalent SPDX mapping:
  legal/policy material described below.

Keep implementation files ideally below 20 KB or about 600 lines. Split the license
script into `scripts/license/` helpers if it approaches that boundary. Do not turn a
skill into a repository manual; each skill should load only the instructions needed
for its recurring task.

## Progress

- [x] P0 — Copy the ExecPlan contract and add concise agent discovery guidance.
- [x] P1 — Establish the repository licensing policy and SPDX mapping.
- [ ] P2 — Implement license validation and safe header fixing.
- [ ] P3 — Add `license-validation` and `logical-commits` skills.
- [ ] P4 — Integrate CI/package commands and validate the policy once.

## Current Architecture and Scope

The website repository currently has no explicit repository license, no root
`AGENTS.md`, and no repository-local license/commit skills. Existing files include
project code, generated/lock metadata, blog content, TotalCross brand assets, and
third-party/customer/partner assets. These categories must not be silently assigned
one license simply because they share a repository.

This plan establishes repository policy; it does not attempt to determine ownership
of every historical third-party asset from appearance alone. Ambiguous assets are
recorded for human review and left unchanged until provenance is known.

## Plan of Work

### P0 — Local planning contract and agent discovery

Copy the current referenced
`TotalCross/totalcross-depot-tools/.agent/PLANS.md` verbatim to `.agent/PLANS.md`.
Record the source repository, source path, and source commit SHA in compact evidence
so later maintainers know which revision was copied. Do not rewrite its SPDX header.
If a local file unexpectedly exists, compare first and do not overwrite divergent
instructions silently.

Add a concise root `AGENTS.md` because the repository currently lacks one. It should
point agents to `.agent/PLANS.md`, the active plan/state resume protocol, the two
skills below, the soft 20 KB/~600-line file guideline, milestone-final validation,
and the requirement to preserve unrelated local changes. Keep details in the skill
files instead of duplicating them in `AGENTS.md`.

Acceptance: a new agent can discover the local planning contract and knows when to
load each repository skill without consulting another repository.

### P1 — Licensing policy and SPDX mapping

Adopt the following policy unless an ownership review discovers a conflicting
existing license:

1. Project-authored website source, configuration, workflows, scripts, tests, and
   repository technical documentation are MIT licensed.
2. Original TotalCross blog/editorial content is CC BY 4.0 so it can be shared and
   cross-posted with attribution while the canonical article remains on
   `totalcross.com`.
3. TotalCross names, logos, trademarks, distinctive brand assets, and proprietary
   marketing artwork are not granted under MIT or CC BY 4.0. Represent this with a
   repository-defined SPDX license reference such as
   `LicenseRef-TotalCross-Brand`, documented under `LICENSES/`/`NOTICE.md`; make
   clear that no trademark rights are granted.
4. Customer, partner, font, image, icon, and other third-party materials retain
   their original ownership, notices, and license terms. Never replace their
   metadata with Amalgam ownership merely because they are moved or reused.
5. New project-authored files use
   `SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.` and the SPDX license
   identifier appropriate to their category.

Add root `LICENSE` for MIT and keep machine-readable license texts/references under
`LICENSES/` when useful. Add `NOTICE.md` explaining scope and exclusions in plain
language. Use `REUSE.toml` or an equivalent SPDX-compatible mapping for files that
cannot safely contain comments, generated/lock files, binary assets, and groups of
files sharing metadata.

Expected examples:

    Project source:
    SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
    SPDX-License-Identifier: MIT

    Original blog content:
    SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
    SPDX-License-Identifier: CC-BY-4.0

Do not add comment headers to JSON or other formats where comments are invalid.
Do not classify an ambiguous third-party or brand asset automatically; use mapping
or an explicit review list.

Acceptance: policy scope is unambiguous for project source, original editorial
content, brand material, third-party material, and non-commentable/generated files.

### P2 — License validator and safe fixer

Implement `scripts/license-validation.mjs` as a small deterministic CLI. If the
implementation grows, split parsing, policy, Git selection, and fixer logic under
`scripts/license/`.

Required modes:

- default/check mode: inspect relevant changed/staged files for fast local use;
- `--all`: inspect all tracked policy-relevant files for CI/milestone validation;
- `--fix`: add or repair only headers/mappings that are safe and unambiguous;
- `--fix --all`: permitted for deliberate migration cleanup, never an implicit
  default.

The policy should be path/format aware. Support comment styles needed by the repo,
including HTML comments for `.astro`/Markdown, line/block comments for JS/TS/CSS,
and `#` comments for YAML/shell where appropriate. Do not inject comments into
formats that reject them.

The fixer must be conservative. It may add the known Amalgam/MIT or Amalgam/CC-BY
header to clearly project-authored files, normalize duplicate project headers, and
update supported mapping metadata. It must refuse to overwrite a different
copyright holder, an unknown license, third-party notice, or brand classification;
report those cases instead.

Use Git-tracked files rather than recursively scanning dependency/build directories.
Ignore generated output such as `dist/`, dependency directories, caches, and other
explicitly untracked/build-only paths. Keep output concise: counts, paths needing
attention, reason, and exit status. Full diagnostics may be saved in evidence/logs
when needed.

Expose stable package commands, for example:

    npm run license:check
    npm run license:check:all
    npm run license:fix

Exact names may change if repository conventions require it, but skills and CI must
call one canonical interface rather than duplicating license logic.

Acceptance: safe project files can be fixed automatically; ambiguous/third-party
files are never relicensed; check mode exits non-zero on actionable policy drift.

### P3 — Repository-local skills

Create `.agents/skills/license-validation/SKILL.md` with concise YAML frontmatter and
instructions to use the canonical validator rather than manually editing many
headers. It should trigger when files are created, moved, split, relicensed, or when
license CI fails. The workflow is: inspect the small relevant diff, run targeted
check, use `--fix` only on safe project-owned files, review its diff, and escalate
unknown ownership instead of guessing. It must mention that project source is MIT,
original blog content is CC BY 4.0, brand material is excluded, and third-party
terms are preserved.

Create `.agents/skills/logical-commits/SKILL.md`. It should be used before staging
or committing repository changes and require:

- inspect `git status --short`, focused diff/stat, and staged diff;
- preserve unrelated local changes and never stage them opportunistically;
- split unrelated responsibilities into separate commits;
- keep each commit coherent and independently understandable;
- write commit subjects/messages in English;
- follow Conventional Commits, using meaningful scopes when helpful;
- explain the reason/observable change, not only filenames;
- avoid noisy checkpoint/WIP commits when there is no logical completed slice;
- do not rerun full build/test matrices before every commit; milestone validation
  remains the final stage defined by the active ExecPlan;
- recheck staged content immediately before commit.

Include a few representative forms, not a large catalog:

    chore(license): establish SPDX licensing policy
    feat(astro): add shared site layout
    feat(blog): add typed article collections
    ci(pages): deploy static artifact with GitHub Pages

Keep both skills small and action-oriented. `AGENTS.md` should name them and state
when to read them; it should not duplicate their full workflow.

Acceptance: agents have reusable, discoverable workflows for both license repair and
commit hygiene.

### P4 — CI and integration

Add license validation to PR CI and the production build gate using the same script
interface. CI should run `--all`; normal local agent work should prefer targeted
checks until milestone closure to avoid unnecessary repeated work. License failure
must show actionable paths without dumping large file contents.

Before broad Astro migration starts, apply headers/mappings to the repository-owned
files that this policy can classify safely. Do not mass-edit uncertain historical
assets solely to make CI green; record them and use explicit mapping/review instead.

Update `CHANGELOG.md` under `Unreleased` when it exists in the migration sequence;
if this supporting plan executes before changelog creation, record a state item so
M4 of the Astro plan includes this policy/tooling as part of `v1.0.0`.

Use logical Conventional Commits while implementing this plan. Suggested boundaries
are the local planning/agent contract, licensing policy, validator/fixer, skills,
and CI integration, but combine or split them based on the actual coherent diff.

Acceptance: fresh repository CI validates licensing automatically, safe local fix is
documented through the skill, and normal Astro migration can create new files
without inventing license rules ad hoc.

Final validation is performed once after P0-P4 implementation: run the validator
with `--all`, exercise `--fix` on controlled fixtures or a deliberately missing
project header, verify no third-party/brand file is rewritten, and run the smallest
configuration/CI syntax checks needed for changed files. Remove fixtures afterward.

## Surprises & Discoveries

Record only discoveries that change policy or implementation, especially ambiguous
ownership, existing hidden notices, unsupported file formats, or conflicts between
historical licenses and the proposed defaults. Move resolved detail to archive.

- Observation: the source checkout had unrelated untracked files, so the planning
  contract was copied from the committed blob rather than the working tree.
  Evidence: `.agent/evidence/repository-policy-and-agent-tooling.md`.
- Observation: `package.json` still declared the Gatsby starter's `0BSD` license and
  upstream repository metadata; P1 corrected only the license field to MIT, while
  the Astro migration will replace the remaining starter metadata.
  Evidence: `.agent/evidence/repository-policy-and-agent-tooling.md`.
- Observation: historical artwork has mixed customer, brand, screenshot, and
  marketing provenance. It is mapped to an excluded third-party reference by
  default, with only unmistakable TotalCross identity assets mapped to the brand
  reference; no ownership was inferred from filenames alone.
  Evidence: `REUSE.toml` and `NOTICE.md`.

## Decision Log

- Decision: MIT for project-authored website source/tooling/docs. Rationale: simple
  permissive open-source terms for the site implementation. Date: 2026-08-10.
- Decision: CC BY 4.0 for original blog/editorial content. Rationale: encourage
  attributed sharing/cross-posting without treating prose as software. Date:
  2026-08-10.
- Decision: brand/trademark assets are excluded through a repository-defined SPDX
  license reference and notice; third-party materials retain original terms.
  Rationale: repository visibility must not silently grant brand or third-party
  rights. Date: 2026-08-10.
- Decision: all new project-authored copyright notices identify
  `2026 Amalgam Solucoes em TI Ltda.` Date: 2026-08-10.
- Decision: validator/fixer is conservative and Git-aware; CI checks all tracked
  relevant files, while local use defaults to changed/staged scope. Rationale:
  correctness with low execution/token cost. Date: 2026-08-10.
- Decision: repository skills live under `.agents/skills/<name>/SKILL.md` and are
  referenced from root `AGENTS.md`. Date: 2026-08-10.

## Validation and Acceptance

Validation is milestone-final, not edit-final. Completion requires: local
`.agent/PLANS.md` copied and provenance recorded; root license/notice/mapping files
present; project source and original editorial content mapped to their intended SPDX
identifiers; brand and third-party exclusions explicit; safe fixer demonstrated;
ambiguous ownership preserved; CI license check enabled; both skills discoverable
from `AGENTS.md`; and no unrelated local changes included in commits.

## Risks and Open Questions

Historical images/fonts/customer logos may lack provenance. Treat uncertainty as a
review requirement, not permission to assign MIT/CC terms. The legal wording for
`LicenseRef-TotalCross-Brand` and `NOTICE.md` may require owner/legal review before
release. If future editorial policy should be All Rights Reserved instead of CC BY
4.0, decide before publishing new articles under CC BY because already granted
licenses should not be assumed reversible.

## Idempotence and Recovery

Copy `.agent/PLANS.md` only after comparing any existing file. Re-running header
check/fix must converge without duplicating notices. The fixer must leave unknown
holders/licenses untouched. Keep policy classification centralized so skills and CI
do not diverge. Before commits, use the logical-commits skill and recheck staged
content. Never discard or rewrite unrelated working-tree changes.

If CI blocks on an ambiguous asset, prefer an explicit reviewed SPDX mapping or a
narrow documented exclusion over changing the asset's ownership. If a policy choice
requires legal review, leave implementation in a non-publishing state and record the
blocker in state rather than guessing.

## Outcomes & Retrospective

At completion record actual classified file counts, unresolved ownership items,
validator/fixer behavior, CI integration, local planning-contract source SHA, skill
paths, and any deviations from the proposed MIT/CC-BY/brand policy. Point to compact
evidence rather than copying command output.

P0 installed the exact planning contract from the recorded source revision,
normalized both active plan paths, and made the plan/skill/validation workflow
discoverable from root `AGENTS.md`.

P1 established the MIT source policy, CC BY 4.0 editorial policy, explicit brand
and third-party exclusions, standard license texts, and path-specific REUSE
annotations. The legacy Tecdet article remains customer material rather than being
automatically relicensed.

## Revision Note

2026-08-10: Initial supporting plan split from the Astro migration ExecPlan to keep
both plans under the preferred 20 KB/~600-line boundary while making licensing,
SPDX validation/fix, agent skills, and local planning-contract installation explicit.
