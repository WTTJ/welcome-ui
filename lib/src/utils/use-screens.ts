/* eslint-disable perfectionist/sort-modules */
import { primitives } from '@/theme/tokens'

type ScreenSize = keyof typeof primitives.screens extends `--breakpoint-${infer K}` ? K : never
type Screens = Record<ScreenSize, number>

export function useScreens() {
  return Object.entries(primitives.screens).reduce((acc, [key, value]) => {
    acc[key.replace('--breakpoint-', '') as keyof Screens] = Number(value.replace('px', ''))
    return acc
  }, {} as Screens)
}
