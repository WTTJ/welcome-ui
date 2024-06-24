import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import { marked } from 'marked'
import { visit } from 'unist-util-visit'
import kebabCase from 'lodash/kebabCase'

import { PropertiesProps } from '../components/Props'

export type TocItem = {
  id: string
  title: string
  href: string
}

export type Toc = TocItem & {
  children?: TocItem[]
}

export function getPageTree(content: string, isOverview?: boolean) {
  if (!content) return

  const tree = unified().use(rehypeParse, { fragment: true }).parse(marked(content))

  const tableOfContents = [] as Toc[]

  if (isOverview) {
    tableOfContents.push({ id: 'definition', title: 'Definition', href: '#' })
    tableOfContents.push({
      id: 'installation',
      title: 'Installation',
      href: '#installation',
    })
    tableOfContents.push({
      id: 'examples',
      title: 'Examples',
      href: '#examples',
    })
  }

  visit(tree, 'element', node => {
    if (node.tagName === 'h2') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const title = node.children[0]?.value
      const id = kebabCase(title)

      tableOfContents.push({ id, title, href: `#${id}` })
    }

    if (node.tagName === 'h3') {
      const parentHeading = tableOfContents[tableOfContents.length - 1]

      if (!parentHeading) return

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const title = node.children[0].value
      const id = kebabCase(title)

      parentHeading.children = parentHeading.children || []
      parentHeading.children.push({ id, title, href: `#${id}` })
    }
  })

  return tableOfContents
}

export function getPropertiesTree(content: PropertiesProps['items']) {
  if (!content) return

  const tableOfContents = [] as Toc[]

  Object.entries(content).map(([name, props]) => {
    const id = kebabCase(name)
    const childProperty = { id, title: name, href: `#${id}`, children: [] } as Toc

    const properties = props.props

    Object.entries(properties).map(([childName]) => {
      const childId = kebabCase(`${id}-${childName}`)

      childProperty?.children?.push({ id: childId, title: childName, href: `#${childId}` })
    })

    tableOfContents.push(childProperty)
  })

  return tableOfContents
}
