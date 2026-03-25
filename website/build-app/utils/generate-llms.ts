import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

import matter from 'gray-matter'

import * as iconCollections from '@/components/Icon/icons'
import { themeVariables } from '@/theme/generated/variables'

import { getFilesFromPackages } from './pages-components'
import { getRepository } from './transform-name'

export type ComponentInfo = {
  id: string // kebab-case URL slug: 'button-group'
  name: string // PascalCase folder name: 'ButtonGroup'
}

export type FoundationInfo = {
  filePath: string // relative to website dir: 'build-app/pages/foundations/...'
  slugParts: string[] // URL parts: ['getting-started'] or ['theming', 'basics']
  title: string // display name for llms.txt
}

export type GenerationResult = {
  markdown: string
  warnings: string[]
}

type PropDef = {
  defaultValue: null | { value: string }
  description?: string
  required: boolean
  type: {
    name?: string
    raw?: string
    value?: PropValue[] | string
  }
}

type PropertiesFile = Record<string, { props: Record<string, PropDef> }>

type PropValue = { name?: string; value: string }

const COMPONENTS_DIR = join(process.cwd(), '../lib/src/components')

// Components excluded from generation due to non-playground interactive content
// or other problems.
const EXCLUSION_LIST: string[] = []

// Foundation pages included in llms output. Add entries here to expand coverage.
const FOUNDATIONS: FoundationInfo[] = [
  {
    filePath: 'build-app/pages/foundations/getting-started.mdx',
    slugParts: ['getting-started'],
    title: 'Getting Started',
  },
  {
    filePath: 'build-app/pages/foundations/theming/basics.mdx',
    slugParts: ['theming', 'basics'],
    title: 'Theming Basics',
  },
]

export function getComponentList(): ComponentInfo[] {
  const groups = getFilesFromPackages('components')
  return groups.flatMap(group =>
    group.pages.map((page: { id: string }) => ({
      id: page.id,
      name: getRepository(page.id),
    }))
  )
}

export function getFoundationList(): FoundationInfo[] {
  return FOUNDATIONS
}

function fenceCode(code: string): string {
  return `\`\`\`tsx\n${code.trim()}\n\`\`\``
}

function readComponentFile(name: string, relPath: string): null | string {
  const path = join(COMPONENTS_DIR, name, relPath)
  return existsSync(path) ? readFileSync(path, 'utf8') : null
}

function readWebsiteFile(relPath: string): null | string {
  const path = join(process.cwd(), relPath)
  return existsSync(path) ? readFileSync(path, 'utf8') : null
}

function resolveColors(name: string): string {
  // Mirror Colors component filtering logic
  const entries = Object.entries(themeVariables).filter(([key]) =>
    /\d/.test(key)
      ? !!key.match(new RegExp(`^--color-${name}-\\d+$`))
      : key.startsWith(`--color-${name}`)
  )
  if (entries.length === 0) return `> _[No color tokens found for: ${name}]_`
  return entries.map(([key, value]) => `- \`${key}\`: ${value}`).join('\n')
}

function resolveTheme(entry: string): string {
  const entries = Object.entries(themeVariables).filter(([key]) => key.startsWith(`--${entry}`))
  if (entries.length === 0) return `> _[No theme variables found for: ${entry}]_`
  return entries.map(([key, value]) => `- \`${key}\`: ${value}`).join('\n')
}

// Mirror the import rewrite from build-app/components/Mdx/Div.tsx
function transformImports(code: string): string {
  return code.replaceAll(/(from|import) '@\/components\/([\w-./]+)'/g, "$1 'welcome-ui/$2'")
}

// Matches self-closed divs: <div attr="val"></div>
const DIV_RE = /<div\b([^>]*)>\s*<\/div>/g

export function generateComponentMarkdown(id: string): GenerationResult {
  const warnings: string[] = []
  const info = getComponentList().find(c => c.id === id)

  if (!info) {
    return {
      markdown: `# Not found\n\nNo component with id \`${id}\`.`,
      warnings: [`Component not found: ${id}`],
    }
  }

  const { name } = info

  if (EXCLUSION_LIST.includes(name)) {
    warnings.push(`${name} is in the exclusion list`)
    return { markdown: `# ${name}\n\n_Documentation not available in text format._`, warnings }
  }

  const mdxRaw = readComponentFile(name, 'docs/index.mdx')
  if (!mdxRaw) {
    return {
      markdown: `# ${name}\n\n_Documentation source not found._`,
      warnings: [`Missing docs/index.mdx for ${name}`],
    }
  }

  const { content: mdxContent, data } = matter(mdxRaw)
  const title: string = data.title ?? name

  const overviewCode = readComponentFile(name, 'docs/examples/overview.tsx')
  if (!overviewCode) warnings.push(`Missing overview.tsx for ${name}`)

  const propsRaw = readComponentFile(name, 'docs/properties.json')
  const properties: null | PropertiesFile = propsRaw ? JSON.parse(propsRaw) : null

  const parts: string[] = [`# ${title}`]

  if (data.description) parts.push('', data.description)

  if (overviewCode) {
    parts.push('', '## Overview', '', fenceCode(transformImports(overviewCode)))
  }

  const examples = replaceAllDivs(mdxContent.trim(), name, warnings)
  parts.push('', '## Examples', '', examples)

  if (properties) {
    parts.push('', generatePropsSection(properties))
  }

  return { markdown: parts.join('\n'), warnings }
}

export function generateFoundationMarkdown(slugParts: string[]): GenerationResult {
  const warnings: string[] = []
  const info = FOUNDATIONS.find(f => f.slugParts.join('/') === slugParts.join('/'))

  if (!info) {
    return {
      markdown: `# Not found\n\nNo foundation page at \`${slugParts.join('/')}\`.`,
      warnings: [`Foundation page not found: ${slugParts.join('/')}`],
    }
  }

  const raw = readWebsiteFile(info.filePath)
  if (!raw) {
    return {
      markdown: `# ${info.title}\n\n_Source file not found._`,
      warnings: [`Missing foundation file: ${info.filePath}`],
    }
  }

  const { content } = matter(raw)
  // No component context needed, foundations have no data-playground divs
  const markdown = replaceAllDivs(content.trim(), '', warnings)
  return { markdown, warnings }
}

export function generateLlmsTxt(baseUrl = ''): string {
  const components = getComponentList()
  const foundations = getFoundationList()
  const lines = [
    '# Welcome UI',
    '> A React component library by Welcome to the Jungle.',
    '',
    '## Foundations',
    '',
    ...foundations.map(
      ({ slugParts, title }) =>
        `- [${title}](${baseUrl}/llms/foundations/${slugParts.join('/')}.md)`
    ),
    '',
    '## Components',
    '',
    ...components.map(({ id, name }) => `- [${name}](${baseUrl}/llms/components/${id}.md)`),
  ]
  return lines.join('\n')
}

function extractAttr(attrs: string, name: string): null | string {
  const m = attrs.match(new RegExp(`${name}="([^"]+)"`))
  return m ? m[1] : null
}

// JSON enum values are JSON-encoded: `"lg"` (with surrounding quotes) or `false` (bare keyword)
function formatEnumValue(raw: string): string {
  if (raw.startsWith('"') && raw.endsWith('"')) return `'${raw.slice(1, -1)}'`
  return raw // true, false, null, numeric literals
}

function generatePropsSection(properties: PropertiesFile): string {
  const subsections = Object.entries(properties).map(
    ([subName, { props }]) => `### ${subName}\n\n${propsToInterface(subName, props)}`
  )
  return `## Props\n\n${subsections.join('\n\n')}`
}

function propsToInterface(subName: string, props: Record<string, PropDef>): string {
  const interfaceName = subName.split('.').join('') + 'Props'
  const body = Object.entries(props)
    .map(([propName, def]) => propToLine(propName, def))
    .join('\n')
  return `\`\`\`tsx\ninterface ${interfaceName} {\n${body}\n}\n\`\`\``
}

function propToLine(propName: string, def: PropDef): string {
  const lines: string[] = []

  const commentParts: string[] = []
  if (def.description?.trim()) commentParts.push(def.description.trim())
  if (def.defaultValue)
    commentParts.push(`Default: ${String(def.defaultValue.value).replace(/^"|"$/g, '')}`)
  if (commentParts.length > 0) lines.push(`  /** ${commentParts.join('. ')} */`)

  const optional = def.required ? '' : '?'
  lines.push(`  ${propName}${optional}: ${toPropTypescript(def.type)}`)

  return lines.join('\n')
}

function replaceAllDivs(content: string, componentName: string, warnings: string[]): string {
  return content.replace(DIV_RE, (_full, attrs: string) => {
    const playground = extractAttr(attrs, 'data-playground')
    if (playground) return resolvePlayground(playground, componentName, warnings)

    const icons = extractAttr(attrs, 'data-icons')
    if (icons) {
      const collection = iconCollections[icons as keyof typeof iconCollections]
      if (Array.isArray(collection)) {
        return collection.map(n => `\`${n}\``).join(', ')
      }
      warnings.push(`Unknown icon collection: ${icons}`)
      return ''
    }

    const colors = extractAttr(attrs, 'data-colors')
    if (colors) return resolveColors(colors)

    const theme = extractAttr(attrs, 'data-theme')
    if (theme) return resolveTheme(theme)

    const unhandled = attrs.trim()
    warnings.push(`Unhandled div stripped: <div ${unhandled}>`)
    return ''
  })
}

function resolvePlayground(filename: string, componentName: string, warnings: string[]): string {
  const code = readComponentFile(componentName, `docs/examples/${filename}`)
  if (!code) {
    warnings.push(`Missing example file: docs/examples/${filename}`)
    return `> _Example not found: ${filename}_`
  }
  return fenceCode(transformImports(code))
}

function toPropTypescript(type: PropDef['type']): string {
  if (!type) return 'unknown'
  const { name, raw, value } = type

  if (raw === 'boolean') return 'boolean'

  if (name === 'enum' && Array.isArray(value)) {
    return value.map(v => formatEnumValue(v.value)).join(' | ')
  }

  if (name === 'union' && Array.isArray(value)) {
    return value.map(v => v.name ?? formatEnumValue(v.value)).join(' | ')
  }

  return raw ?? name ?? 'unknown'
}
