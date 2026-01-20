import { themeVariables } from '@/theme/generated/variables'
import type { ScreenSizes } from '@/theme/types'

const breakpoints = Object.entries(themeVariables).reduce<Record<string, string>>(
  (acc, [key, value]) => {
    if (key.startsWith('--breakpoint-')) {
      const size = key.replace('--breakpoint-', '')
      acc[size] = value
    }
    return acc
  },
  {}
)

type Screens = Record<ScreenSizes, number>

/**
 * A custom hook to retrieve the screen sizes defined in the theme tokens.
 * @returns An object containing the screen sizes defined in the theme tokens,
 * with keys as screen names and absolute values.
 * Only supports number values (e.g. no 'rem', '%', etc.).
 */
export function useScreens() {
  return Object.entries(breakpoints).reduce<Screens>((acc, [size, breakpointValue]) => {
    acc[size as ScreenSizes] = Number(breakpointValue.replace('px', ''))
    return acc
  }, {} as Screens)
}
