import { Theme } from '@xstyled/styled-components'

export function getSeededColor(colors: Theme['colors'], seed = ''): string {
  const colorKeys = Object.keys(colors).filter(color => color.startsWith('sub-'))
  const subColorNumber = (seed.length % colorKeys.length) + 1
  const colorsIndex = `sub-${subColorNumber}` as keyof Theme['colors']

  return colors[colorsIndex]
}

export function getInitials(name = ''): string {
  const [firstWord, lastWord] = name.split(' ')

  if (firstWord && lastWord) {
    return `${firstWord.charAt(0).toUpperCase()}${lastWord.charAt(0).toUpperCase()}`
  } else {
    return firstWord.substring(0, 2).toUpperCase()
  }
}
