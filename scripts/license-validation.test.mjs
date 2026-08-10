/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import assert from 'node:assert/strict'
import test from 'node:test'
import { canonicalHeader, fixHeader, inspectHeader } from './license/headers.mjs'
import { globToRegExp, PROJECT_COPYRIGHT } from './license/policy.mjs'

const blockPolicy = {
  style: 'block',
  copyright: PROJECT_COPYRIGHT,
  license: 'MIT',
}
const markdownPolicy = { ...blockPolicy, style: 'html', license: 'CC-BY-4.0' }

test('adds an idempotent block header to project source', () => {
  const original = "export const answer = 42\n"
  const fixed = fixHeader(original, blockPolicy)
  assert.equal(fixed.changed, true)
  assert.equal(inspectHeader(fixed.content, blockPolicy).status, 'ok')
  assert.equal(fixHeader(fixed.content, blockPolicy).changed, false)
})

test('places Markdown metadata after frontmatter', () => {
  const original = '---\ntitle: Example\n---\n\nArticle\n'
  const fixed = fixHeader(original, markdownPolicy)
  assert.match(fixed.content, /^---\ntitle: Example\n---\n<!--\nSPDX-/)
  assert.equal(inspectHeader(fixed.content, markdownPolicy).status, 'ok')
})

test('refuses different ownership or license metadata', () => {
  const original = '/*\n * SPDX-FileCopyrightText: 2020 Someone Else\n * SPDX-License-Identifier: Apache-2.0\n */\n'
  const fixed = fixHeader(original, blockPolicy)
  assert.equal(fixed.changed, false)
  assert.equal(fixed.status, 'refused')
  assert.equal(fixed.content, original)
})

test('normalizes duplicate known project headers', () => {
  const header = canonicalHeader(blockPolicy)
  const fixed = fixHeader(`${header}${header}export default true\n`, blockPolicy)
  assert.equal(fixed.changed, true)
  assert.equal(fixed.content.split(header).length - 1, 1)
  assert.equal(inspectHeader(fixed.content, blockPolicy).status, 'ok')
})

test('matches REUSE double-star and exact path patterns', () => {
  assert.equal(globToRegExp('content/blog/**').test('content/blog/post/index.md'), true)
  assert.equal(globToRegExp('package.json').test('package.json'), true)
  assert.equal(globToRegExp('package.json').test('nested/package.json'), false)
})
