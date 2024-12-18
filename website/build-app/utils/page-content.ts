import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

import matter from 'gray-matter'

import { MIGRATED_PACKAGES } from '../../../migrated_packages'

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
export function getPageContent({ filename, isPackage }: { filename: string; isPackage?: boolean }) {
  let file = join(process.cwd(), 'build-app', 'pages', filename)
  if (isPackage) {
    const isMigratedPackage = MIGRATED_PACKAGES.some(pkg => filename.includes(pkg))

    file = isMigratedPackage
      ? join(process.cwd(), '../', 'lib', 'src', 'components', filename)
      : join(process.cwd(), '../', 'packages', filename)
  }

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
