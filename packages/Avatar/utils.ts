import { WuiTheme } from '@welcome-ui/core'

type SubPalette = WuiTheme['colors']['sub']

export function getSeededColor(colors: SubPalette, seed: string): string {
  const colorKeys = Object.keys(colors)
  const index = seed.length % colorKeys.length
  const colorsIndex = Number(colorKeys[index]) as keyof SubPalette

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
