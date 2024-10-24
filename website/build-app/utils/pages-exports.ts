import { existsSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

import { PageTree } from '../types'
import { replaceMdxRegex } from '../constants/regex'

export function getFilesFromDirectory(dir: string) {
  const directory = `build-app/pages/${dir}`
  const folder = join(process.cwd(), directory)
  const folderExist = existsSync(folder)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const files = [] as any[]

  if (!folderExist) return files

  const fileList = readdirSync(folder)

  for (const file of fileList) {
    const path = `${directory}/${file}`
    const relativePath = path.replace(directory, '').replace(replaceMdxRegex, '')

    if (statSync(path).isDirectory()) {
      const fileList = readdirSync(path)

      const filesDirection = {
        parent: dir,
        category: relativePath,
        pages: [] as { id: string; parent: string }[],
      }

      for (const file of fileList) {
        filesDirection.pages.push({
          id: file.replace(replaceMdxRegex, ''),
          parent: relativePath,
        })
      }

      files.push(filesDirection)
    } else {
      if (relativePath !== 'README') {
        const dirParentIndex = files.findIndex(file => file.parent === dir)

        if (dirParentIndex >= 0) {
          files[dirParentIndex].pages.push({ id: relativePath })
        } else {
          files.push({
            parent: dir,
            pages: [{ id: relativePath }],
          })
        }
      }
    }
  }

  return files
}

export function getStaticParams(pages: PageTree) {
  return pages.reduce(
    (prev, { pages }) => {
      pages.map(page => {
        if (!page.parent) {
          prev.push({ id: page.id })
        }
      })
      return prev
    },
    [] as { id?: string }[]
  )
}

export function getStaticParamsSubPage(pages: PageTree) {
  return pages.reduce(
    (prev, { pages }) => {
      pages.map(page => {
        prev.push({ id: page.parent, subPage: page.id })
      })
      return prev
    },
    [] as { id?: string; subPage?: string }[]
  )
}

/**
 * Gets the pages tree from supernova export
 */
export function getPages(folder: string) {
  const filesFromDirectory = getFilesFromDirectory(folder)

  return filesFromDirectory
}
