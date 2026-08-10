<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Repository policy and agent tooling editorial report

## Editorial Summary

The prerequisite policy plan completed before Astro implementation began. The
repository now has a local execution-planning contract, explicit multi-category
licensing, automated SPDX checks and safe fixes, reusable agent workflows, and a CI
gate that protects both pull requests and the still-active legacy publication path.

## Original Plan versus Actual Outcome

All P0–P4 outcomes were delivered. The plan proposed either REUSE annotations or an
equivalent mapping; the implementation uses REUSE version 1 annotations and a small
dependency-free parser for the exact supported subset. The existing Gatsby publish
workflow was gated, not replaced, because replacement belongs to the Astro plan and
the recovery path must remain until its acceptance checks pass.

## What Changed

- Copied `.agent/PLANS.md` from the recorded depot-tools revision and added root
  agent discovery guidance.
- Added MIT, CC BY 4.0, TotalCross brand, and third-party material terms plus an
  ordered path mapping and plain-language notice.
- Added targeted/all-files checks, conservative fix modes, unit tests, and stable
  package commands.
- Added validated `license-validation` and `logical-commits` repository skills.
- Added the CI policy gate and 45 safe headers to existing project-owned text files.

## Decisions and Trade-offs

Mixed historical artwork defaults to the third-party/provenance-unresolved category;
only unmistakable identity assets use the brand reference. This is deliberately
more restrictive than guessing ownership. The validator has no install-time TOML
dependency, but therefore supports the annotation syntax exercised by the local
mapping rather than claiming to be a general TOML/REUSE implementation.

## Unexpected Problems and Discoveries

The package still declared the Gatsby starter's `0BSD` license, which conflicted
with the approved MIT source policy. Initial header analysis also mistook SPDX
fixture strings for file metadata; scanning was narrowed to the real leading header
region after optional frontmatter or shebangs. The skill validator required PyYAML,
so it was run in an isolated temporary environment that was removed afterward.

## Validation and Measurable Results

The final all-files check accepted 115 policy-relevant files: 64 governed by headers
and 51 by REUSE mappings; five license/license-text paths are intentionally ignored.
The one deliberate all-files fix added 45 headers and changed no mapped material.
Five unit tests passed, both skills passed their scaffold validator, YAML/JSON and
Prettier checks passed, and the focused diff had no whitespace errors.

## Useful Evidence and Examples

Compact command outcomes and provenance are in
`.agent/evidence/repository-policy-and-agent-tooling.md`. Safe and refused fixer
cases are executable in `scripts/license-validation.test.mjs`. Operational guidance
lives in the two `.agents/skills/` directories rather than being duplicated here.

## Limitations, Remaining Work, and Open Questions

Historical image provenance remains unresolved by design. Legal/brand owners should
review the wording of `LicenseRef-TotalCross-Brand` and confirm rights for the Tecdet
article and other customer/partner material. The Astro plan must retain these
classifications when assets move and must add `CHANGELOG.md` coverage for this work.

## Possible Article Angles

- Introducing SPDX and REUSE safely in a legacy marketing repository.
- Why a license fixer should refuse more often than it guesses.
- Treating execution plans as resumable repository state during a framework migration.

## Suggested Narrative

Frame the work as risk reduction before modernization: establish ownership,
recovery, validation, and commit discipline first, then migrate the runtime with
clear boundaries instead of discovering legal and operational ambiguity at release.

## Claims Requiring Human Review

Confirm the legal sufficiency of the custom brand and third-party references, the
actual rights holders for historical artwork, and whether Tecdet granted publication
or relicensing rights beyond its current use on `totalcross.com`.
