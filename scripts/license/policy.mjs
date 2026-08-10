/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { readFileSync } from 'node:fs'
import { extname } from 'node:path'

export const PROJECT_COPYRIGHT = '2026 Amalgam Solucoes em TI Ltda.'
export const SOURCE_LICENSE = 'MIT'
export const EDITORIAL_LICENSE = 'CC-BY-4.0'

const ignoredPrefixes = ['.git/', '.cache/', 'dist/', 'node_modules/', 'public/']
const ignoredPaths = new Set(['LICENSE'])

const blockCommentExtensions = new Set([
  '.c', '.cc', '.cpp', '.css', '.js', '.jsx', '.mjs', '.ts', '.tsx',
])
const htmlCommentExtensions = new Set(['.astro', '.html', '.md', '.mdx'])
const hashCommentExtensions = new Set([
  '.bash', '.conf', '.properties', '.py', '.sh', '.toml', '.yaml', '.yml',
])
const hashCommentNames = new Set([
  '.gitignore', '.prettierignore', 'Dockerfile', 'Makefile', 'robots.txt',
])

function quotedStrings(value) {
  const strings = []
  for (const match of value.matchAll(/"(?:[^"\\]|\\.)*"/g)) {
    strings.push(JSON.parse(match[0]))
  }
  return strings
}

export function parseReuseAnnotations(source) {
  return source
    .split('[[annotations]]')
    .slice(1)
    .map((block) => {
      const pathValue = block.match(/(?:^|\n)path\s*=\s*(\[[\s\S]*?\]|"(?:[^"\\]|\\.)*")/)
      const copyright = block.match(/(?:^|\n)SPDX-FileCopyrightText\s*=\s*("(?:[^"\\]|\\.)*")/)
      const license = block.match(/(?:^|\n)SPDX-License-Identifier\s*=\s*("(?:[^"\\]|\\.)*")/)
      if (!pathValue || !copyright || !license) return null
      return {
        paths: quotedStrings(pathValue[1]),
        copyright: JSON.parse(copyright[1]),
        license: JSON.parse(license[1]),
      }
    })
    .filter(Boolean)
}

export function globToRegExp(glob) {
  let expression = '^'
  for (let index = 0; index < glob.length; index += 1) {
    const character = glob[index]
    if (character === '*' && glob[index + 1] === '*') {
      expression += '.*'
      index += 1
    } else if (character === '*') {
      expression += '[^/]*'
    } else if (character === '?') {
      expression += '[^/]'
    } else {
      expression += character.replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
    }
  }
  return new RegExp(`${expression}$`)
}

export function mappedFiles(root, files) {
  const annotations = parseReuseAnnotations(readFileSync(`${root}/REUSE.toml`, 'utf8'))
  const result = new Map()
  for (const annotation of annotations) {
    const matchers = annotation.paths.map(globToRegExp)
    for (const file of files) {
      if (matchers.some((matcher) => matcher.test(file))) result.set(file, annotation)
    }
  }
  return result
}

export function headerStyleFor(file) {
  const extension = extname(file).toLowerCase()
  const name = file.split('/').at(-1)
  if (blockCommentExtensions.has(extension)) return 'block'
  if (htmlCommentExtensions.has(extension)) return 'html'
  if (hashCommentExtensions.has(extension) || hashCommentNames.has(name)) return 'hash'
  return null
}

export function policyFor(file, mappings) {
  if (ignoredPaths.has(file) || file.startsWith('LICENSES/')) return { kind: 'ignored' }
  if (ignoredPrefixes.some((prefix) => file.startsWith(prefix))) return { kind: 'ignored' }
  if (mappings.has(file)) return { kind: 'mapped', ...mappings.get(file) }

  const style = headerStyleFor(file)
  if (!style) return { kind: 'unresolved' }

  const editorial = file.startsWith('src/content/blog/')
  return {
    kind: 'header',
    style,
    copyright: PROJECT_COPYRIGHT,
    license: editorial ? EDITORIAL_LICENSE : SOURCE_LICENSE,
  }
}
