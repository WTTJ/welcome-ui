import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

import matter from 'gray-matter'

import { getPageTree } from './page-tree'

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
    const { content: contentWithoutMatter, data } = matter(content)

    const tree = getPageTree(contentWithoutMatter)

    return { content, contentWithoutMatter, data, tree }
  }
}
