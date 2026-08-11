<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Changelog

All notable changes to the site implementation are documented here. This project
follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and uses
[Semantic Versioning](https://semver.org/spec/v2.0.0.html) for site/platform
capability and compatibility releases.

## [Unreleased]

## [1.0.1] - 2026-08-10

### Fixed

- Restored complete TotalCross favicon, Apple-touch, and web-manifest icon metadata
  from the existing brand emblem.
- Replaced footer social-network initials with accessible static brand SVGs and
  restored protected new-tab behavior for external destinations.
- Kept authored Astro and blog SPDX metadata machine-verifiable in source frontmatter
  without repeatedly emitting those headers into generated HTML.

### Changed

- Routed large photographic content and CSS backgrounds through responsive Astro
  AVIF/WebP generation while preserving intrinsic dimensions and lazy/LCP behavior.
- Replaced the 8.3 MB embedded-project GIF with accessible WebM/MP4 video and a WebP
  poster totaling 461 KB, preserving its animation and responsive presentation.
- Added deterministic source/generated media reporting and enforced generated-output
  budgets in pull-request CI and GitHub Pages builds.
- Reduced the homepage fallback-resource proxy from 16.34 MiB to 2.01 MiB and the
  get-started proxy from 9.07 MiB to 1.57 MiB.

## [1.0.0] - 2026-08-10

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
