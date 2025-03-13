import { existsSync, readdirSync, readFileSync } from 'fs'
import { join } from 'path'

import matter from 'gray-matter'
import kebabCase from 'lodash/kebabCase'

import { PageTree } from '../types'

type Parent = 'components'

export function getFilesFromPackages(selectedParent: Parent) {
  const folder = join(process.cwd(), '../lib/src/components')
  const files = [] as any[]

  const folders = readdirSync(folder)

  for (const file of folders) {
    const path = join(folder, `${file}/docs/index.mdx`)
    const fileExist = existsSync(path)
    const fileKebabCase = kebabCase(file)

    if (fileExist) {
      const content = readFileSync(path, 'utf8')
      const {
        data: { category, title, type = 'components' },
      } = matter(content)

      if (selectedParent !== type) continue

      const categoryParent = files.filter(resultItem => resultItem.category === category)[0]

      const newChild = { id: fileKebabCase, title, subPages: ['props'] }

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

  return files.sort((a, b) => a.category.localeCompare(b.category))
}

export function getStaticParams(pages: PageTree) {
  return pages.reduce(
    (prev, { pages }) => {
      pages.map(page => {
        prev.push({ id: page.id })

        page.subPages?.map(subPage =>
          prev.push({
            id: page.id,
            subPage,
          })
        )
      })
      return prev
    },
    [] as { id: string; subPage?: string }[]
  )
}

/**
 * Gets the pages tree for docs
 */
export function getPages(selectedParent = 'components' as Parent): PageTree {
  const filesFromDirectory = getFilesFromPackages(selectedParent)

  return filesFromDirectory
}
