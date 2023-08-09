import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import { marked } from 'marked'
import { visit } from 'unist-util-visit'
import slugify from 'slugify'

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
      // @ts-ignore
      const title = node.children[0]?.value
      const id = slugify(title.toLowerCase())

      tableOfContents.push({ id, title, href: `#${id}` })
    }

    if (node.tagName === 'h3') {
      const parentHeading = tableOfContents[tableOfContents.length - 1]

      if (!parentHeading) return

      // @ts-ignore
      const title = node.children[0].value
      const id = slugify(title.toLowerCase())

      parentHeading.children = parentHeading.children || []
      parentHeading.children.push({ id, title, href: `#${id}` })
    }
  })

  return tableOfContents
}
