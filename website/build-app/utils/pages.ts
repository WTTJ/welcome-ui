import { existsSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

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

type ItemPageTree = string[]
export type ResultsPageTree = {
  [key: string]: 'index' | ItemPageTree
}
export type ResultsPage = ResultsPageTree | {}

const groupBy = (items: ItemPageTree[]) =>
  items.reduce((result, item) => {
    const firstItem = item[0]
    if (firstItem.includes('.md')) {
      result[firstItem.replace(replaceMdxRegex, '')] = 'index'
    } else {
      result[firstItem] = [
        ...Array.from(result[firstItem] ? result[firstItem] : []),
        item[1].replace(replaceMdxRegex, ''),
      ]
    }

    return result
  }, {} as ResultsPageTree)

export function generatePagesFromFiles(files: string[][]): ResultsPageTree {
  return groupBy(files)
}

/**
 * Gets the pages tree for design
 */
export function getDesignPages() {
  const filesFromDirectory = getFilesFromDirectory('build-app/design')

  return generatePagesFromFiles(filesFromDirectory)
}

/**
 * Gets the pages tree for docs
 */
export function getDocsPages() {
  const filesFromDirectory = getFilesFromDirectory('../docs/pages/components')

  return generatePagesFromFiles(filesFromDirectory)
}
