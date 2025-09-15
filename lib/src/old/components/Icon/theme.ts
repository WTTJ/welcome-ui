import type { LiteralUnion } from '@utils'

import type { ThemeValues } from '@old/theme'

export type Size = LiteralUnion<IconSize, number | string>

export type ThemeIcons = Record<IconSize, string>

// we want to keep IconSize in a natural order for documentation
// eslint-disable-next-line perfectionist/sort-union-types
type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export const getIcons = ({ toRem }: ThemeValues): ThemeIcons => ({
  lg: toRem(32),
  md: toRem(24),
  sm: toRem(16),
  xl: toRem(48),
  xs: toRem(12),
  xxl: toRem(64),
})
