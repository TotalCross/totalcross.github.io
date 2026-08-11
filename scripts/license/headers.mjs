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

function blockHeader(policy) {
  const [copyright, license] = headerLines(policy)
  return `/*\n * ${copyright}\n * ${license}\n */\n\n`
}

function htmlHeader(policy) {
  const [copyright, license] = headerLines(policy)
  return `<!--\n${copyright}\n${license}\n-->\n\n`
}

export function canonicalHeader(policy) {
  const [copyright, license] = headerLines(policy)
  if (policy.style === 'block' || policy.style === 'astro') return blockHeader(policy)
  if (policy.style === 'html') return htmlHeader(policy)
  if (policy.style === 'hash' || policy.style === 'frontmatter') {
    return `# ${copyright}\n# ${license}\n\n`
  }
  throw new Error(`Unsupported header style: ${policy.style}`)
}

function frontmatterBounds(content) {
  if (!content.startsWith('---')) return null
  const openingEnd = content.indexOf('\n')
  if (openingEnd < 0) return null
  const closingMatch = /^---\s*$/m.exec(content.slice(openingEnd + 1))
  if (!closingMatch) return null
  const closingStart = openingEnd + 1 + closingMatch.index
  const closingNewline = content.indexOf('\n', closingStart)
  return {
    openingEnd: openingEnd + 1,
    closingStart,
    closingEnd: closingNewline < 0 ? content.length : closingNewline + 1,
  }
}

function metadataOffset(content) {
  const frontmatter = frontmatterBounds(content)
  if (frontmatter) return frontmatter.closingEnd
  if (content.startsWith('#!')) {
    const newline = content.indexOf('\n')
    return newline < 0 ? content.length : newline + 1
  }
  return 0
}

function leadingComment(candidate, style) {
  if ((style === 'block' || style === 'astro') && candidate.startsWith('/*')) {
    const end = candidate.indexOf('*/')
    return end < 0 ? candidate : candidate.slice(0, end + 2)
  }
  if (style === 'html' && candidate.startsWith('<!--')) {
    const end = candidate.indexOf('-->')
    return end < 0 ? candidate : candidate.slice(0, end + 3)
  }
  if ((style === 'hash' || style === 'frontmatter') && candidate.startsWith('#')) {
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

function scanRegion(content, policy) {
  if (policy.style === 'astro' || policy.style === 'frontmatter') {
    const frontmatter = frontmatterBounds(content)
    if (!frontmatter) return ''
    return leadingComment(
      content.slice(frontmatter.openingEnd, frontmatter.closingStart),
      policy.style,
    )
  }
  return leadingComment(content.slice(metadataOffset(content)), policy.style)
}

function legacyRegion(content, policy) {
  if (policy.style !== 'astro' && policy.style !== 'frontmatter') return ''
  const offset = metadataOffset(content)
  return leadingComment(content.slice(offset), 'html')
}

function valuesFor(region, tag) {
  const expression = new RegExp(`${tag}:\\s*([^\\r\\n]+)`, 'g')
  return [...region.matchAll(expression)].map((match) =>
    match[1].replace(/\s*(?:\*\/|-->)\s*$/, '').trim(),
  )
}

export function inspectHeader(content, policy) {
  const region = scanRegion(content, policy)
  const legacy = legacyRegion(content, policy)
  const copyrights = valuesFor(`${region}\n${legacy}`, 'SPDX-FileCopyrightText')
  const licenses = valuesFor(`${region}\n${legacy}`, 'SPDX-License-Identifier')
  const conflicts = [
    ...copyrights.filter((value) => value !== policy.copyright),
    ...licenses.filter((value) => value !== policy.license),
  ]

  if (conflicts.length > 0) {
    return { status: 'conflict', reason: `different metadata: ${[...new Set(conflicts)].join(', ')}` }
  }
  const canonicalCount = content.split(canonicalHeader(policy)).length - 1
  const legacyCount = legacy ? content.split(htmlHeader(policy)).length - 1 : 0
  if (canonicalCount + legacyCount > 1 || copyrights.length > 1 || licenses.length > 1) {
    return { status: 'duplicate', reason: 'duplicate SPDX header' }
  }
  if (copyrights.length === 0 && licenses.length === 0) {
    return { status: 'missing', reason: 'missing SPDX header' }
  }
  if (copyrights.length !== 1 || licenses.length !== 1) {
    return { status: 'partial', reason: 'duplicate or incomplete SPDX header' }
  }
  if (legacy) {
    return { status: 'legacy', reason: 'renderable SPDX header uses legacy HTML placement' }
  }
  return { status: 'ok' }
}

function insertHeader(content, policy, header) {
  if (policy.style === 'astro' || policy.style === 'frontmatter') {
    const frontmatter = frontmatterBounds(content)
    if (frontmatter) {
      return `${content.slice(0, frontmatter.openingEnd)}${header}${content.slice(frontmatter.openingEnd)}`
    }
    return `---\n${header}---\n\n${content}`
  }
  const offset = metadataOffset(content)
  return `${content.slice(0, offset)}${header}${content.slice(offset)}`
}

function removeLeadingLegacyHeader(content, policy) {
  const offset = metadataOffset(content)
  const legacy = legacyRegion(content, policy)
  if (!legacy) return content
  let end = offset + legacy.length
  let newlines = 0
  while (content[end] === '\n' && newlines < 2) {
    end += 1
    newlines += 1
  }
  return `${content.slice(0, offset)}${content.slice(end)}`
}

export function fixHeader(content, policy) {
  const inspection = inspectHeader(content, policy)
  const header = canonicalHeader(policy)

  if (inspection.status === 'ok') return { changed: false, content, status: 'ok' }
  if (inspection.status === 'missing') {
    return { changed: true, content: insertHeader(content, policy, header), status: 'fixed' }
  }
  if (inspection.status === 'legacy') {
    const withoutLegacy = removeLeadingLegacyHeader(content, policy)
    return {
      changed: true,
      content: insertHeader(withoutLegacy, policy, header),
      status: 'fixed',
    }
  }
  if (inspection.status === 'duplicate') {
    let withoutKnownHeaders = content.split(header).join('')
    if (policy.style === 'astro' || policy.style === 'frontmatter') {
      withoutKnownHeaders = removeLeadingLegacyHeader(withoutKnownHeaders, policy)
    }
    return {
      changed: true,
      content: insertHeader(withoutKnownHeaders, policy, header),
      status: 'fixed',
    }
  }
  return { changed: false, content, status: 'refused', reason: inspection.reason }
}
