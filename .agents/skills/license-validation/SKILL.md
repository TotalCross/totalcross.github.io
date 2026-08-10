---
name: license-validation
description: Validate and conservatively repair SPDX copyright and license metadata in the TotalCross website repository. Use when creating, moving, splitting, or relicensing files; when license CI fails; before closing a milestone that changes tracked files; or when ownership and REUSE mappings need review.
---
<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# License validation

Use the repository's canonical validator. Do not mass-edit headers manually or infer
ownership from a path, filename, or visual appearance.

## Workflow

1. Inspect `git status --short` and the focused diff for the files in the active
   logical slice. Preserve unrelated changes.
2. Run `npm run license:check` for changed, staged, and untracked files.
3. For reported paths, read only the relevant entries in `NOTICE.md`, `REUSE.toml`,
   and the focused diff. Preserve existing notices.
4. If the file is clearly project-owned, run `npm run license:fix`. Use
   `npm run license:fix -- --all` only for a deliberate, reviewed repository-wide
   cleanup.
5. Review every fixer change with a focused diff. Revert or escalate anything whose
   ownership is not certain; never substitute a guessed holder or license.
6. Re-run the targeted check. At milestone closure or in CI, run
   `npm run license:check:all` once.

## Policy boundaries

- Project-authored source, tooling, configuration, workflows, tests, and technical
  documentation use MIT and `SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.`.
- Original TotalCross editorial/blog content uses CC BY 4.0 with the same copyright
  notice and identifies `totalcross.com` as canonical where applicable.
- TotalCross trademarks, logos, distinctive brand assets, and proprietary marketing
  artwork are excluded through `LicenseRef-TotalCross-Brand`.
- Customer, partner, font, image, icon, and other third-party materials retain their
  terms. Unverified material uses `LicenseRef-ThirdParty-Material` until human review.
- JSON, binaries, generated metadata, and other non-commentable files use reviewed
  `REUSE.toml` annotations rather than injected comments.

The fixer may add known project/editorial headers and normalize exact duplicates.
It must refuse different holders, unknown licenses, partial metadata, third-party
notices, and brand classifications. Treat refusal as a request for human ownership
review, not as permission to weaken the check.
