import { existsSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

/**
 * Gets the content of md file
 */
export function getPageContent(filename: string) {
  const file = join(process.cwd(), 'build-app', filename)

  const fileExist = existsSync(file)

  if (!fileExist) {
    return { content: 'Not Found' }
  } else {
    const content = readFileSync(file, 'utf8')
    const { content: contentWithoutMatter, data } = matter(content)

    return { content, contentWithoutMatter, data }
  }
}
