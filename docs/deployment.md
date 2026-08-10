<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# GitHub Pages deployment

`main` is the production source branch. Pull requests run source validation and
package the generated `dist/` directory as a non-deploying Pages artifact. Pushes to
`main` rebuild the same source and deploy the artifact through GitHub's `github-pages`
environment. Generated output is never committed or pushed to a branch.

The deployment workflow has only the permissions required by GitHub Pages and uses a
single `pages` concurrency group so a newer run cancels an older pending/in-progress
deployment. The build job must succeed before the deployment job can access its
artifact.

Production remains `https://totalcross.com`. The GitHub Pages repository setting owns
the custom domain; a source-tree `CNAME` file is not used to switch or remove it.
Enable HTTPS enforcement only after GitHub reports the custom domain healthy under
the Actions-based deployment.

The migration preserves these rollback refs and does not merge them into `main`:

- `site=999f35b34166e1a7eaf51ff72dc39eabc0fbb4ca` — legacy Gatsby source.
- `master=6c82739530d09e70ff15fd04786584d9b94d7ff7` — generated legacy production.
- `site-2020=754482dcacb2ba49a88ecfce358cf2211c1bf62d`.
- `site-2021=3fe92ce4bdd384ec2c16486d779f451b4a5c54a6`.

Do not delete these branches during cutover. If rollback is required before the Astro
release is final, restore legacy Pages branch publishing from `master:/` and make
`site` the default source branch again.

Their exact tips are also protected by annotated tags:

- `archive/legacy-site-2026-08-10`
- `archive/legacy-pages-2026-08-10`
- `archive/site-2020-2026-08-10`
- `archive/site-2021-2026-08-10`

GitHub's Pages API still reports `https_enforced=false` because it has no certificate
state for the Cloudflare-served custom domain. This does not change the deployed
artifact: production HTTPS works and the public HTTP endpoint redirects to HTTPS.
