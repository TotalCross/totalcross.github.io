/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { canonicalHeader, fixHeader, inspectHeader } from './license/headers.mjs'
import { globToRegExp, headerStyleFor, policyFor, PROJECT_COPYRIGHT } from './license/policy.mjs'
import { selectedFiles } from './license-validation.mjs'

const blockPolicy = {
  style: 'block',
  copyright: PROJECT_COPYRIGHT,
  license: 'MIT',
}
const astroPolicy = { ...blockPolicy, style: 'astro' }
const markdownPolicy = { ...blockPolicy, style: 'frontmatter', license: 'CC-BY-4.0' }

test('adds an idempotent block header to project source', () => {
  const original = "export const answer = 42\n"
  const fixed = fixHeader(original, blockPolicy)
  assert.equal(fixed.changed, true)
  assert.equal(inspectHeader(fixed.content, blockPolicy).status, 'ok')
  assert.equal(fixHeader(fixed.content, blockPolicy).changed, false)
})

test('places renderable Markdown metadata inside frontmatter', () => {
  const original = '---\ntitle: Example\n---\n\nArticle\n'
  const fixed = fixHeader(original, markdownPolicy)
  assert.match(fixed.content, /^---\n# SPDX-FileCopyrightText:[^\n]+\n# SPDX-License-Identifier: CC-BY-4.0\n\ntitle:/)
  assert.equal(inspectHeader(fixed.content, markdownPolicy).status, 'ok')
  assert.equal(fixHeader(fixed.content, markdownPolicy).changed, false)
})

test('places Astro metadata inside existing frontmatter', () => {
  const original = '---\nconst answer = 42\n---\n<div>{answer}</div>\n'
  const fixed = fixHeader(original, astroPolicy)
  assert.match(fixed.content, /^---\n\/\*\n \* SPDX-FileCopyrightText:/)
  assert.equal(fixed.content.indexOf('SPDX-'), fixed.content.lastIndexOf('SPDX-FileCopyrightText'))
  assert.equal(inspectHeader(fixed.content, astroPolicy).status, 'ok')
  assert.equal(fixHeader(fixed.content, astroPolicy).changed, false)
})

test('creates minimal Astro frontmatter for a template without it', () => {
  const fixed = fixHeader('<p>Example</p>\n', astroPolicy)
  assert.match(fixed.content, /^---\n\/\*[\s\S]*?\*\/\n\n---\n\n<p>/)
  assert.equal(inspectHeader(fixed.content, astroPolicy).status, 'ok')
})

test('migrates only the exact legacy Astro HTML header', () => {
  const legacy = '<!--\nSPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.\nSPDX-License-Identifier: MIT\n-->\n'
  const original = `---\nconst answer = 42\n---\n${legacy}<div>{answer}</div>\n`
  const fixed = fixHeader(original, astroPolicy)
  assert.equal(fixed.changed, true)
  assert.doesNotMatch(fixed.content, /<!--\nSPDX-/)
  assert.equal(inspectHeader(fixed.content, astroPolicy).status, 'ok')
})

test('refuses conflicting metadata in a legacy Astro position', () => {
  const original = '---\n---\n<!--\nSPDX-FileCopyrightText: 2020 Someone Else\nSPDX-License-Identifier: Apache-2.0\n-->\n'
  const fixed = fixHeader(original, astroPolicy)
  assert.equal(fixed.changed, false)
  assert.equal(fixed.status, 'refused')
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

test('applies the editorial license to Astro blog content', () => {
  const mappings = new Map()
  const policy = policyFor('src/content/blog/post.mdx', mappings)
  assert.equal(policy.license, 'CC-BY-4.0')
  assert.equal(policy.style, 'frontmatter')
  assert.equal(headerStyleFor('docs/guide.md'), 'html')
  assert.equal(headerStyleFor('src/pages/index.astro'), 'astro')
})

test('all-files selection excludes tracked paths deleted from the worktree', () => {
  const root = mkdtempSync(join(tmpdir(), 'totalcross-license-'))
  try {
    execFileSync('git', ['init', '-q'], { cwd: root })
    writeFileSync(join(root, 'keep.txt'), 'keep\n')
    writeFileSync(join(root, 'deleted.txt'), 'delete\n')
    execFileSync('git', ['add', 'keep.txt', 'deleted.txt'], { cwd: root })
    execFileSync('git', ['-c', 'user.name=Test', '-c', 'user.email=test@example.com', 'commit', '-qm', 'fixture'], { cwd: root })
    rmSync(join(root, 'deleted.txt'))
    assert.deepEqual(selectedFiles(root, true), ['keep.txt'])
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})
