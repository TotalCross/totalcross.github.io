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

- Replaced generated `master` branch publication with validated GitHub Pages Actions
  artifacts deployed from source-only `main`.
- Preserved all legacy public page routes while moving their implementation from
  Gatsby/React pages to static Astro pages.
- Made the local `/blog/` the canonical blog destination; external platforms are
  optional distribution channels.

### Removed

- No removal is released yet. Gatsby build and deployment cleanup belongs to the
  final cutover and will be recorded before `v1.0.0` is tagged.
