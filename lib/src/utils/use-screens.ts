/* eslint-disable perfectionist/sort-modules */
import tokens from '@/theme/tokens/Semantic - Dimensions.json' assert { type: 'json' }

type ScreenSize = keyof Omit<typeof tokens.breakpoint, '$type'>
type Screens = Record<ScreenSize, number>

/**
 * A custom hook to retrieve the screen sizes defined in the theme tokens.
 * @returns An object containing the screen sizes defined in the theme tokens,
 * with keys as screen names and absolute values.
 * Only supports number values (e.g. no 'rem', '%', etc.).
 */
export function useScreens() {
  return Object.entries(tokens.breakpoint).reduce((acc, [size, breakpointToken]) => {
    if (size !== '$type' && typeof breakpointToken === 'object' && '$value' in breakpointToken) {
      const breakpointValue = breakpointToken.$value
      if (!isNaN(breakpointValue)) {
        acc[size as ScreenSize] = breakpointValue
      }
    }
    return acc
  }, {} as Screens)
}
