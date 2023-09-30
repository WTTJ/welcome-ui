import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import { marked } from 'marked'
import { visit } from 'unist-util-visit'
import kebabCase from 'lodash/kebabCase'

export type TocITem = {
  id: string
  title: string
  href: string
}

export type Toc = TocITem & {
  children?: TocITem[]
}

export function getPageTree(content?: string) {
  if (!content) return

  const tree = unified().use(rehypeParse, { fragment: true }).parse(marked(content))

  const tableOfContents = [] as Toc[]

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
