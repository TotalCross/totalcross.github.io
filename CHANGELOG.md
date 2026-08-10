<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Changelog

All notable changes to the site implementation are documented here. This project
follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and uses
[Semantic Versioning](https://semver.org/spec/v2.0.0.html) for site/platform
capability and compatibility releases.

Target release: `v1.0.0`, the Astro production cutover.

## [Unreleased]

### Added

- Astro static-site foundation with shared responsive components and preserved
  TotalCross visual identity.
- Typed Markdown/MDX blog content, author/tag/category archives, RSS, sitemap,
  canonical/social metadata, JSON-LD, and optional English/Portuguese translations.
- Default-off DEV/Forem distribution with canonical idempotency and supported manual
  Medium import preparation.
- Automated route, link, content, metadata, license, and visual validation evidence.

### Changed

- Adopted conventional Astro `src/` and `public/` source layout with standard
  install/check/build/validate commands.
- Replaced generated `master` branch publication with validated GitHub Pages Actions
  artifacts deployed from source-only `main`.
- Preserved all legacy public page routes while moving their implementation from
  Gatsby/React pages to static Astro pages.
- Made the local `/blog/` the canonical blog destination; external platforms are
  optional distribution channels.

### Removed

- Gatsby, React, Styled Components, FontAwesome, legacy image-processing plugins,
  `gh-pages`, and their generated-branch operational paths.
- Obsolete Gatsby pages/components/configuration and verified-unused legacy assets.
- Legacy Universal Analytics, Google Tag Manager, and Hotjar injection; no analytics
  is shipped until a current consent/privacy-reviewed integration is selected.
