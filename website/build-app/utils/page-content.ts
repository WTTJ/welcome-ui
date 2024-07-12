import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

import matter from 'gray-matter'

import { getPageTree } from './page-tree'

type Data = {
  ariakit?: string
  category?: string
  description?: string
  packageName?: string
  title?: string
  type?: string
  usage?: string
}

/**
 * Gets the content of md file
 */
export function getPageContent(filename: string, isPackage?: boolean) {
  const file = isPackage
    ? join(process.cwd(), '../', 'packages', filename)
    : join(process.cwd(), 'build-app', 'pages', filename)

  const fileExist = existsSync(file)

  if (!fileExist) {
    return { isNotFound: true }
  } else {
    const content = readFileSync(file, 'utf8')
    const { content: contentWithoutMatter, data }: { content: string; data: Data } = matter(content)

    const tree = getPageTree(contentWithoutMatter, isPackage)

    return { content, contentWithoutMatter, data, tree }
  }
}
