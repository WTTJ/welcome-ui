import { existsSync, readdirSync, statSync } from 'fs'

import { join } from 'path'
import type { PageTree } from '../types'

export function getFilesFromDirectory(dir: string, files: string[][] = [], parentDir?: string) {
  const folder = join(process.cwd(), dir)
  const fileExist = existsSync(folder)

  if (!fileExist) return []

  const fileList = readdirSync(folder)

  for (const file of fileList) {
    const path = `${dir}/${file}`
    const relativePath = path.replace(parentDir || dir, '')

    if (statSync(path).isDirectory()) {
      getFilesFromDirectory(path, files, dir)
    } else {
      if (relativePath !== '/README.md') {
        files.push(relativePath.split('/').filter(Boolean))
      }
    }
  }

  return files
}

const replaceMdxRegex = /.mdx|.md/g

const generatePagesFromFiles = (items: string[][]) => {
  const returnItems = items.reduce((result, [firstItem, secondItem]) => {
    const parent = result.filter(resultItem => resultItem.category === firstItem)

    if (firstItem.includes('.md')) {
      result.push({ pages: [firstItem.replace(replaceMdxRegex, '')] })
    } else if (parent.length) {
      parent[0].pages.push(secondItem.replace(replaceMdxRegex, ''))
    } else {
      result.push({ category: firstItem, pages: [secondItem.replace(replaceMdxRegex, '')] })
    }
    return result
  }, [] as PageTree)

  return returnItems
}

export function getStaticParams(pages: PageTree) {
  return pages.reduce((prev, { category, pages }) => {
    pages.map(page => {
      if (category) {
        prev.push({ category, page })
      } else {
        prev.push({ category: page, page: 'index' })
      }
    })
    return prev
  }, [] as { category?: string; page: string }[])
}

/**
 * Gets the pages tree for design
 */
export function getDesignPages() {
  const filesFromDirectory = getFilesFromDirectory('build-app/design')

  return generatePagesFromFiles(filesFromDirectory)
}
