import { toPascalCase } from '../utils/strings'

export const generateTitle = pathname => {
  if (!pathname) return null
  let title = 'Welcome UI'

  const routerWithoutSlash = pathname?.replace(/\//g, ' ')
  const words = routerWithoutSlash.split(' ')?.filter(String)

  // for the homepage for example
  if (words.length === 0) return title

  words.forEach(word => {
    title += ` | ${toPascalCase(word.replace(/-/g, ' '))}`
  })

  return title
}

export const slugify = name => {
  const nameFormatted = name
    .replace(/([A-Z])/g, '-$1')
    .trim()
    .toLowerCase()

  return nameFormatted.startsWith('-') ? nameFormatted.substr(1) : nameFormatted
}
