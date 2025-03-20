import kebabCase from 'lodash/kebabCase'
import { marked } from 'marked'
import rehypeParse from 'rehype-parse'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'

import type { PropertiesProps } from '../components/Props'

export type Toc = {
  children?: TocItem[]
} & TocItem

export type TocItem = {
  href: string
  id: string
  title: string
}

export function getPageTree(content: string, isOverview?: boolean) {
  if (!content) return

  const tree = unified()
    .use(rehypeParse, { fragment: true })
    .parse(marked(content) as string)

  const tableOfContents = [] as Toc[]

  if (isOverview) {
    tableOfContents.push({ href: '#', id: 'definition', title: 'Definition' })
    tableOfContents.push({
      href: '#installation',
      id: 'installation',
      title: 'Installation',
    })
    tableOfContents.push({
      href: '#examples',
      id: 'examples',
      title: 'Examples',
    })
  }

  visit(tree, 'element', node => {
    if (node.tagName === 'h2') {
      const child = node.children[0]
      const title = child && 'value' in child ? child.value : ''
      const id = kebabCase(title)

      tableOfContents.push({ href: `#${id}`, id, title })
    }

    if (node.tagName === 'h3') {
      const parentHeading = tableOfContents[tableOfContents.length - 1]

      if (!parentHeading) return

      const child = node.children[0]
      const title = child && 'value' in child ? child.value : ''
      const id = kebabCase(title)

      parentHeading.children = parentHeading.children || []
      parentHeading.children.push({ href: `#${id}`, id, title })
    }
  })

  return tableOfContents
}

export function getPropertiesTree(content: PropertiesProps['items']) {
  if (!content) return

  const tableOfContents = [] as Toc[]

  Object.entries(content).map(([name, props]) => {
    const id = kebabCase(name)
    const childProperty = { children: [], href: `#${id}`, id, title: name } as Toc

    const properties = props.props

    Object.entries(properties).map(([childName]) => {
      const childId = kebabCase(`${id}-${childName}`)

      childProperty?.children?.push({ href: `#${childId}`, id: childId, title: childName })
    })

    tableOfContents.push(childProperty)
  })

  return tableOfContents
}
