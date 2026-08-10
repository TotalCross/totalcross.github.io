<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Optional article distribution

TotalCross.com is always the canonical publisher. External distribution is disabled
by default and runs separately from the Pages build, so missing credentials or a
destination failure cannot block or roll back the website.

## DEV / Forem

An automatic request is allowed only when an article declares `crossPost.dev: true`.
The manual `Distribute canonical article` workflow is itself an explicit request and
can override that metadata. Its `dry_run` input defaults to `true`; live DEV writes
require the `DEVTO_API_KEY` Actions secret.

The adapter follows the current [Forem API v1](https://developers.forem.com/api/v1):
it supplies the required v1 accept and API-key headers, searches the authenticated
account's published and draft articles for the canonical TotalCross URL, then updates
that article or creates one. This canonical-URL lookup is the external state that
prevents duplicate posts.

Dry-run examples:

```sh
node scripts/cross-post.mjs --article drafts/content-system-fixture --destination dev --intent draft --dry-run
node scripts/cross-post.mjs --article traffic-control-system-by-tecdet --destination dev --intent publish --trigger manual --dry-run
```

A live run first verifies that the canonical URL is deployed and declares itself as
canonical. Only then can the adapter call DEV. The publication intent is explicit:
`draft` sends `published: false`; `publish` sends `published: true`.

## Medium

Medium distribution uses no API or credential. Run the workflow with `medium` to
prepare the canonical URL and instructions, then use Medium's supported
[Import a story](https://help.medium.com/hc/en-us/articles/214550207-Importing-a-post-to-Medium)
flow. Review the imported formatting and canonical link before saving or publishing.
If import fails, follow Medium's documented manual copy/paste path and
[set the canonical link](https://help.medium.com/hc/en-us/articles/360033930293-Set-a-canonical-link).

## Automatic use after deployment

Future post-deployment automation must invoke the CLI with the default `automatic`
trigger. That path never overrides article metadata. It must remain downstream of a
successful canonical Pages deployment and must not become a prerequisite or `needs`
dependency of the deployment job.
