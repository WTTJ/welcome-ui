import { WuiTheme } from '@welcome-ui/core'

type SubColor = WuiTheme['colors']['sub']

export function getSeededColor(colors: SubColor, seed: string): string {
  const colorKeys = Object.keys(colors)
  const index = seed.length % colorKeys.length

  return colors[colorKeys[index]]
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
