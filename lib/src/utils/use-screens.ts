/* eslint-disable perfectionist/sort-modules */
import { tokens } from '@/theme/generate-theme'
import type { Tokens } from '@/theme/generate-theme'

type ScreenSize = Tokens['breakpoint']
type Screens = Record<ScreenSize, Tokens['breakpoint']['$value']>

/**
 * A custom hook to retrieve the screen sizes defined in the theme tokens.
 * @returns An object containing the screen sizes defined in the theme tokens,
 * with keys as screen names and absolute values.
 * Only supports number values (e.g. no 'rem', '%', etc.).
 */
export function useScreens() {
  return Object.entries(tokens.breakpoint).reduce((acc, [key, { ['$value']: value }]) => {
    const parsedValue = typeof value === 'string' ? Number(value.replace('px', '')) : value
    if (!isNaN(parsedValue)) {
      acc[key as keyof Screens] = parsedValue
    }
    return acc
  }, {} as Screens)
}
