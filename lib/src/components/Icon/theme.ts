import type { ThemeValues } from '@/theme'
import type { LiteralUnion } from '@/utils'

export type Size = LiteralUnion<IconSize, number | string>

export type ThemeIcons = Record<IconSize, string>

type IconSize = 'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'xxl'

export const getIcons = ({ toRem }: ThemeValues): ThemeIcons => ({
  lg: toRem(32),
  md: toRem(24),
  sm: toRem(16),
  xl: toRem(48),
  xs: toRem(12),
  xxl: toRem(64),
})
