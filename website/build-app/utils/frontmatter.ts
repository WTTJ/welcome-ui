import yaml from 'js-yaml'

type FrontmatterResult<T extends Record<string, unknown>> = {
  content: string
  data: T
}

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/

export function parseFrontmatter<T extends Record<string, unknown>>(
  raw: string
): FrontmatterResult<T> {
  const match = raw.match(FRONTMATTER_RE)
  if (!match) return { content: raw, data: {} as T }
  const loaded = yaml.load(match[1])
  const data =
    loaded && typeof loaded === 'object' && !Array.isArray(loaded) ? (loaded as T) : ({} as T)
  return { content: match[2], data }
}
