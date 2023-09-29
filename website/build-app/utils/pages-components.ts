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
        data: { category, type, name },
      } = matter(content)

      if (selectedParent !== type) continue

      const isHook = selectedParent === 'hooks'
      const categoryParent = files.filter(resultItem => resultItem.category === category)[0]
      const newChild = isHook
        ? { id: fileKebabCase, name }
        : { id: fileKebabCase, name, subPages: ['overview', 'props'] }

      if (categoryParent) {
        categoryParent.pages.push(newChild)
      } else {
        files.push({
          category,
          parent: selectedParent,
          pages: [newChild],
        })
      }
    }
  }

  return files
}

export function getStaticParams(pages: PageTree) {
  return pages.reduce((prev, { pages }) => {
    pages.map(page => {
      prev.push({ id: page.id })
    })
    return prev
  }, [] as { id?: string }[])
}

/**
 * Gets the pages tree for docs
 */
export function getPages(selectedParent = 'components' as Parent) {
  const filesFromDirectory = getFilesFromPackages(selectedParent)

  return filesFromDirectory
}
