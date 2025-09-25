import { primitives } from '@/theme/tokens'

type Screens = Record<'2xl' | '3xl' | '4xl' | 'lg' | 'md' | 'sm' | 'xl' | 'xs', number>

export function useScreens() {
  return Object.keys(primitives.screens).reduce((acc, key) => {
    const value = primitives.screens[key as keyof typeof primitives.screens]
    acc[key.replace('--breakpoint-', '') as keyof Screens] = Number(value.replace('px', ''))
    return acc
  }, {} as Screens)
}
