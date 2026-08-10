/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

function headerLines(policy) {
  return [
    `SPDX-FileCopyrightText: ${policy.copyright}`,
    `SPDX-License-Identifier: ${policy.license}`,
  ]
}

export function canonicalHeader(policy) {
  const [copyright, license] = headerLines(policy)
  if (policy.style === 'block') return `/*\n * ${copyright}\n * ${license}\n */\n\n`
  if (policy.style === 'html') return `<!--\n${copyright}\n${license}\n-->\n\n`
  if (policy.style === 'hash') return `# ${copyright}\n# ${license}\n\n`
  throw new Error(`Unsupported header style: ${policy.style}`)
}

function frontmatterEnd(content) {
  if (!content.startsWith('---')) return null
  const closing = content.slice(4).search(/^---\s*$/m)
  if (closing < 0) return null
  const closingStart = closing + 4
  const closingEnd = content.indexOf('\n', closingStart)
  return closingEnd < 0 ? content.length : closingEnd + 1
}

function metadataOffset(content) {
  const frontmatter = frontmatterEnd(content)
  if (frontmatter !== null) return frontmatter
  if (content.startsWith('#!')) {
    const newline = content.indexOf('\n')
    return newline < 0 ? content.length : newline + 1
  }
  return 0
}

function scanRegion(content, policy) {
  const offset = metadataOffset(content)
  const candidate = content.slice(offset)
  if (policy.style === 'block' && candidate.startsWith('/*')) {
    const end = candidate.indexOf('*/')
    return end < 0 ? candidate : candidate.slice(0, end + 2)
  }
  if (policy.style === 'html' && candidate.startsWith('<!--')) {
    const end = candidate.indexOf('-->')
    return end < 0 ? candidate : candidate.slice(0, end + 3)
  }
  if (policy.style === 'hash' && candidate.startsWith('#')) {
    const lines = candidate.split(/(?<=\n)/)
    let end = 0
    for (const line of lines) {
      if (line.startsWith('#') || line.trim() === '') end += line.length
      else break
    }
    return candidate.slice(0, end)
  }
  return ''
}

function valuesFor(region, tag) {
  const expression = new RegExp(`${tag}:\\s*([^\\r\\n]+)`, 'g')
  return [...region.matchAll(expression)].map((match) =>
    match[1].replace(/\s*(?:\*\/|-->)\s*$/, '').trim(),
  )
}

export function inspectHeader(content, policy) {
  const region = scanRegion(content, policy)
  const copyrights = valuesFor(region, 'SPDX-FileCopyrightText')
  const licenses = valuesFor(region, 'SPDX-License-Identifier')
  const conflicts = [
    ...copyrights.filter((value) => value !== policy.copyright),
    ...licenses.filter((value) => value !== policy.license),
  ]
  const canonical = canonicalHeader(policy)
  const canonicalCount = content.split(canonical).length - 1

  if (conflicts.length > 0) {
    return { status: 'conflict', reason: `different metadata: ${[...new Set(conflicts)].join(', ')}` }
  }
  if (canonicalCount > 1) {
    return { status: 'duplicate', reason: 'duplicate SPDX header' }
  }
  if (copyrights.length === 0 && licenses.length === 0) {
    return { status: 'missing', reason: 'missing SPDX header' }
  }
  if (copyrights.length !== 1 || licenses.length !== 1) {
    return {
      status: 'partial',
      reason: 'duplicate or incomplete SPDX header',
    }
  }
  return { status: 'ok' }
}

function insertionOffset(content) {
  return metadataOffset(content)
}

function insertHeader(content, header) {
  const offset = insertionOffset(content)
  return `${content.slice(0, offset)}${header}${content.slice(offset)}`
}

export function fixHeader(content, policy) {
  const inspection = inspectHeader(content, policy)
  const header = canonicalHeader(policy)

  if (inspection.status === 'ok') return { changed: false, content, status: 'ok' }
  if (inspection.status === 'missing') {
    return { changed: true, content: insertHeader(content, header), status: 'fixed' }
  }
  if (inspection.status === 'duplicate') {
    const withoutKnownHeaders = content.split(header).join('')
    return {
      changed: true,
      content: insertHeader(withoutKnownHeaders, header),
      status: 'fixed',
    }
  }
  return { changed: false, content, status: 'refused', reason: inspection.reason }
}
