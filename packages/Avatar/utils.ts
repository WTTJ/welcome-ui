import { WuiTheme } from '@welcome-ui/core'

export function getSeededColor(colors: WuiTheme['colors'], seed = ''): string {
  const colorKeys = Object.keys(colors).filter(color => color.startsWith('sub.'))
  const subColorIndex = seed.length % colorKeys.length
  const colorsIndex = `sub-${subColorIndex}` as keyof WuiTheme['colors']

  return colors[colorsIndex]
}

export function getInitials(name: string): string {
  const formattedName = name && name.replace(/\W+/gm, ' ')
  const [firstWord, lastWord] = formattedName.split(' ')

  if (firstWord && lastWord) {
    return `${firstWord.charAt(0).toUpperCase()}${lastWord.charAt(0).toUpperCase()}`
  } else {
    return firstWord.substring(0, 2).toUpperCase()
  }
}
