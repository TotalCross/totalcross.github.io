<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Release procedure

The site implementation follows Semantic Versioning. `v1.0.0` identifies the first
Astro production cutover; the prior package value `0.1.0` was Gatsby starter
metadata, not an intentional TotalCross release. Later versions cover site/platform
capability or compatibility. Ordinary editorial-only article changes do not require
a software release.

## Changelog policy

Record user-visible site and URL behavior, navigation, deployment, analytics,
publishing-system, and optional distribution changes under `Unreleased`. Do not list
each article's editorial revision. At release time, move the shipped entries into a
dated `## [X.Y.Z] - YYYY-MM-DD` section and restore an empty `Unreleased` section.

## Release checklist

1. Confirm `main` is the production source branch, the worktree is clean, and the
   deployed Pages artifact corresponds to the exact candidate commit.
2. Update `package.json`, `package-lock.json`, and `CHANGELOG.md`, then run
   `npm run release:check` plus the current final validation commands.
3. Commit the release metadata with `chore(release): prepare vX.Y.Z` and let the
   production workflow deploy that exact source commit.
4. Recheck the deployed routes and artifact. Create an annotated tag only after that
   verification:

   ```sh
   git tag -a vX.Y.Z -m "TotalCross site vX.Y.Z"
   git push origin vX.Y.Z
   ```

5. Optionally create a GitHub Release from the same annotated tag and dated changelog
   notes. Do not generate another site artifact for the release.

Never use a lightweight tag for a site release, retag a different commit, or create
the tag before production verification. Before the first cutover, preserve the
recorded legacy source/deployment branch refs and do not merge generated `master`
history into `main`.
