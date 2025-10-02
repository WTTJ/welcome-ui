/* eslint-disable perfectionist/sort-modules */
import tokens from '@/theme/tokens/semantics.json' assert { type: 'json' }

type ScreenSize = keyof Omit<typeof tokens.breakpoints, '$type'>
type Screens = Record<ScreenSize, number>

/**
 * A custom hook to retrieve the screen sizes defined in the theme tokens.
 * @returns An object containing the screen sizes defined in the theme tokens,
 * with keys as screen names and absolute values.
 * Only supports number values (e.g. no 'rem', '%', etc.).
 */
export function useScreens() {
  return Object.entries(tokens.breakpoint).reduce((acc, [key, value]) => {
    if (key !== '$type' && typeof value === 'object' && 'value' in value) {
      const parsedValue =
        typeof value['value'] === 'string'
          ? Number(value['value'].replace('px', ''))
          : value['value']
      if (!isNaN(parsedValue)) {
        acc[key as ScreenSize] = parsedValue
      }
    }
    return acc
  }, {} as Screens)
}
