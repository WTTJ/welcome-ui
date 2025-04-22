import { colors, getColors } from './colors'

import { ThemeValues } from '.'

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] | RecursivePartial<T[P]>
}

/**
 * We reverse the palette colors (basic token color) and inject this new values on dark theme
 */
const generateDarkColors = Object.keys(colors).reduce((acc, key) => {
  if (key.startsWith('secondary-') || key === 'overlay') return acc

  const number = 100 - Number(key.slice(-2))
  const variant = key.slice(0, key.length - 2)

  return {
    ...acc,
    [key]: colors[`${variant}${number}` as keyof ThemeValues['colors']],
  }
}, {})

export const colorsDark: ThemeValues['colors'] = {
  ...colors,
  ...getColors(generateDarkColors as ThemeValues['colors']),
}

export const darkTheme: RecursivePartial<ThemeValues> = {
  colors: colorsDark,
}
