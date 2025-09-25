/* eslint-disable perfectionist/sort-modules */
import { primitives } from '@/theme/tokens'

type ScreenSize = keyof typeof primitives.screens extends `--breakpoint-${infer K}` ? K : never
type Screens = Record<ScreenSize, number>

/**
 * A custom hook to retrieve the screen sizes defined in the theme tokens.
 * @returns An object containing the screen sizes defined in the theme tokens,
 * with keys as screen names and absolute values.
 * Only supports number values (e.g. no 'rem', '%', etc.).
 */
export function useScreens() {
  return Object.entries(primitives.screens).reduce((acc, [key, value]) => {
    const parsedValue = typeof value === 'string' ? Number(value.replace('px', '')) : value
    if (!isNaN(parsedValue)) {
      acc[key.replace('--breakpoint-', '') as keyof Screens] = parsedValue
    }
    return acc
  }, {} as Screens)
}
