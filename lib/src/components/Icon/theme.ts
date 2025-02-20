import { ThemeValues } from '@/theme'
import { LiteralUnion } from '@/utils'

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type Size = LiteralUnion<IconSize, number | string>

export type ThemeIcons = Record<IconSize, string>

export const getIcons = ({ toRem }: ThemeValues): ThemeIcons => ({
  xs: toRem(12),
  sm: toRem(16),
  md: toRem(24),
  lg: toRem(32),
  xl: toRem(48),
  xxl: toRem(64),
})
