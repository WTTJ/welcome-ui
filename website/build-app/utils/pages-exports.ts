import { existsSync, readdirSync, statSync } from 'fs'

import { join } from 'path'
// import type { PageTree } from '../types'

const replaceMdxRegex = /.mdx|.md|\//g

export function getFilesFromDirectory(dir: string) {
  const directory = `build-app/pages/${dir}`
  const folder = join(process.cwd(), directory)
  const folderExist = existsSync(folder)
  let files = [] as any[]

  if (!folderExist) return files

  const fileList = readdirSync(folder)

  for (const file of fileList) {
    const path = `${directory}/${file}`
    const relativePath = path.replace(directory, '').replace(replaceMdxRegex, '')

    if (statSync(path).isDirectory()) {
      const fileList = readdirSync(path)

      let filesDirection = {
        parent: dir,
        category: relativePath,
        pages: [],
      }

      for (const file of fileList) {
        // @ts-ignore
        filesDirection.pages.push({
          id: file.replace(replaceMdxRegex, ''),
          parent: relativePath,
        })
      }

      files.push(filesDirection)
    } else {
      if (relativePath !== 'README') {
        files.push({
          parent: dir,
          pages: [{ id: relativePath }],
        })
      }
    }
  }

  return files
}

// const generatePagesFromFiles = (items: string[][]) => {
//   const returnItems = items.reduce((result, [firstItem, secondItem]) => {
//     const parent = result.filter(resultItem => resultItem.category === firstItem)

//     if (firstItem.includes('.md')) {
//       result.push({ pages: [firstItem.replace(replaceMdxRegex, '')] })
//     } else if (parent.length) {
//       parent[0].pages.push(secondItem.replace(replaceMdxRegex, ''))
//     } else {
//       result.push({ category: firstItem, pages: [secondItem.replace(replaceMdxRegex, '')] })
//     }
//     return result
//   }, [] as PageTree)

//   return returnItems
// }

// export function getStaticParams(pages: PageTree) {
//   return pages.reduce((prev, { id, pages }) => {
//     pages.map(page => {
//       if (id) {
//         prev.push({ id, page })
//       } else {
//         prev.push({ id: page, page: 'index' })
//       }
//     })
//     return prev
//   }, [] as { category?: string; page: string }[])
// }

/**
 * Gets the pages tree from supernova export
 */
export function getPages(folder: string) {
  const filesFromDirectory = getFilesFromDirectory(folder)

  return filesFromDirectory
}
