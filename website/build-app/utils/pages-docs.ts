import { existsSync, readFileSync, readdirSync } from 'fs'
import matter from 'gray-matter'
import kebabCase from 'lodash/kebabCase'
import { join } from 'path'
import { PageTree } from '../types'

type Parent = 'components' | 'hooks'

export function getFilesFromPackages(selectedParent: Parent) {
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
        data: { category, parent },
      } = matter(content)

      if (parent !== selectedParent) continue

      const categoryParent = files.filter(resultItem => resultItem.category === category)[0]

      if (categoryParent) {
        categoryParent.pages.push(fileKebabCase)
      } else {
        files.push({ category, parent, pages: [fileKebabCase] })
      }
    }
  }

  return files
}

export function getStaticParams(pages: PageTree) {
  console.log(pages)
  return pages.reduce((prev, { pages }) => {
    pages.map(page => {
      prev.push({ category: page })
    })
    return prev
  }, [] as { category?: string }[])
}

/**
 * Gets the pages tree for docs
 */
export function getDocsPages(selectedParent = 'components' as Parent) {
  const filesFromDirectory = getFilesFromPackages(selectedParent)

  return filesFromDirectory
}
