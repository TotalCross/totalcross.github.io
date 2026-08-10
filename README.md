<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# TotalCross website

Source for [totalcross.com](https://totalcross.com), built as a static Astro site and
deployed from `main` through GitHub Pages Actions artifacts.

## Requirements and setup

Use Node.js 22.12 or newer; Node 24 is the CI and production-build version.

```sh
npm ci
npm run check
npm run build
npm run validate
```

`dist/` is generated and must not be committed. Start a local development server
with `npm run dev`, or preview a completed production build with `npm run preview`.

## Project layout

- `src/pages/` contains static routes and feed/sitemap endpoints.
- `src/components/`, `src/layouts/`, and `src/styles/` contain shared UI.
- `src/content/` contains typed authors and Markdown/MDX blog articles.
- `src/assets/` contains build-processed images; `public/` contains stable public URLs.
- `scripts/` contains route/content/license/release/workflow validators and optional
  distribution tooling.
- `.agent/` contains the completed migration plan, immutable baselines, and evidence.

All legacy public URL contracts are recorded in `.agent/baseline/legacy-routes.yml`.
The root-level Tecdet article and historical `/using-typescript/` route are preserved
intentionally.

## Validation

```sh
npm test
npm run license:check:all
npm run release:check
npm run workflow:check
npm run check
npm run build
npm run validate
```

`validate` checks the generated legacy route manifest, every local link/asset
reference, RSS, sitemap chain, article metadata, archives, draft exclusion, and
translation fixtures.

After the corresponding commit is deployed, `npm run production:check` performs the
final HTTPS route, metadata, feed, sitemap, asset, redirect, and 404 smoke check
against `https://totalcross.com` (or an origin passed as its first argument).

## Publishing and deployment

Pull requests validate and package a non-deploying Pages artifact. A push to `main`
rebuilds and deploys through the `github-pages` environment; generated output is not
stored on a branch. See [deployment.md](docs/deployment.md).

Blog articles default to Markdown and use the schema in `src/content.config.ts`.
External DEV/Medium distribution is optional, disabled by default, and isolated from
site deployment. See [cross-posting.md](docs/cross-posting.md).

The site implementation follows SemVer; ordinary editorial-only changes do not need
a release. See [CHANGELOG.md](CHANGELOG.md) and [releasing.md](docs/releasing.md).

## Repository policy

Read `AGENTS.md` and `.agent/state/astro-site-migration.md` before resuming remaining
migration/release work. Use the repository-local license and logical-commit skills;
never merge generated `master` history into source or delete the recorded legacy
rollback refs without an explicit post-release decision.
