import { existsSync, readFileSync, readdirSync } from 'fs'
import matter from 'gray-matter'
import kebabCase from 'lodash/kebabCase'
import { join } from 'path'
import { PageTree } from '../types'

export function getFilesFromPackages() {
  const folder = join(process.cwd(), '../packages')
  let files = [] as any[]

  const folders = readdirSync(folder)

  for (const file of folders) {
    const path = join(folder, `${file}/docs/index.mdx`)
    const fileExist = existsSync(path)
    const fileKebabCase = kebabCase(file)

    if (fileExist) {
      const content = readFileSync(path, 'utf8')
      const {
        data: { category },
      } = matter(content)

      const parentPage = category === 'utilities' ? 'utilities' : 'components'
      const categoryParent = files.filter(resultItem => resultItem.category === category)[0]

      if (categoryParent) {
        categoryParent.pages.push(fileKebabCase)
      } else {
        files.push({ category, parent: parentPage, pages: [fileKebabCase] })
      }
    }
  }

  return files
}

export function getStaticParams(pages: PageTree) {
  return pages.reduce((prev, { pages, parent }) => {
    pages.map(page => {
      prev.push({ category: parent, page })
    })
    return prev
  }, [] as { category?: string; page: string }[])
}

/**
 * Gets the pages tree for docs
 */
export function getDocsPages() {
  const filesFromDirectory = getFilesFromPackages()

  return filesFromDirectory
}
