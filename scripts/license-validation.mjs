/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { fixHeader, inspectHeader } from './license/headers.mjs'
import { mappedFiles, policyFor } from './license/policy.mjs'

function git(root, args) {
  const result = spawnSync('git', args, { cwd: root, encoding: 'buffer' })
  if (result.status !== 0) {
    throw new Error(result.stderr.toString('utf8').trim() || `git ${args.join(' ')} failed`)
  }
  return result.stdout.toString('utf8')
}

function nulPaths(output) {
  return output.split('\0').filter(Boolean)
}

export function selectedFiles(root, all) {
  if (all) {
    return nulPaths(git(root, ['ls-files', '-z'])).filter((file) =>
      existsSync(resolve(root, file)),
    )
  }
  const changed = nulPaths(
    git(root, ['diff', '--name-only', '-z', '--diff-filter=ACMR', 'HEAD']),
  )
  const untracked = nulPaths(
    git(root, ['ls-files', '--others', '--exclude-standard', '-z']),
  )
  return [...new Set([...changed, ...untracked])].sort()
}

function parseArguments(args) {
  const known = new Set(['--all', '--fix'])
  const unknown = args.filter((argument) => !known.has(argument))
  if (unknown.length > 0) throw new Error(`unknown option(s): ${unknown.join(', ')}`)
  return { all: args.includes('--all'), fix: args.includes('--fix') }
}

function main() {
  const options = parseArguments(process.argv.slice(2))
  const root = git(process.cwd(), ['rev-parse', '--show-toplevel']).trim()
  const files = selectedFiles(root, options.all)
  const mappings = mappedFiles(root, files)
  const counts = { checked: 0, compliant: 0, fixed: 0, ignored: 0, mapped: 0 }
  const issues = []

  for (const file of files) {
    const policy = policyFor(file, mappings)
    if (policy.kind === 'ignored') {
      counts.ignored += 1
      continue
    }
    counts.checked += 1
    if (policy.kind === 'mapped') {
      counts.mapped += 1
      counts.compliant += 1
      continue
    }
    if (policy.kind === 'unresolved') {
      issues.push(`${file}: no safe ownership or header policy`)
      continue
    }

    let content
    try {
      content = readFileSync(`${root}/${file}`, 'utf8')
    } catch (error) {
      issues.push(`${file}: cannot read as text (${error.code || error.message})`)
      continue
    }

    if (options.fix) {
      const result = fixHeader(content, policy)
      if (result.changed) {
        writeFileSync(`${root}/${file}`, result.content)
        counts.fixed += 1
        counts.compliant += 1
      } else if (result.status === 'ok') {
        counts.compliant += 1
      } else {
        issues.push(`${file}: ${result.reason}; fixer refused`)
      }
      continue
    }

    const inspection = inspectHeader(content, policy)
    if (inspection.status === 'ok') counts.compliant += 1
    else issues.push(`${file}: ${inspection.reason}`)
  }

  console.log(
    `license-validation: checked=${counts.checked} compliant=${counts.compliant} ` +
      `mapped=${counts.mapped} fixed=${counts.fixed} ignored=${counts.ignored} ` +
      `issues=${issues.length}`,
  )
  for (const issue of issues) console.error(`- ${issue}`)
  if (issues.length > 0) process.exitCode = 1
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    main()
  } catch (error) {
    console.error(`license-validation: ${error.message}`)
    process.exitCode = 2
  }
}
