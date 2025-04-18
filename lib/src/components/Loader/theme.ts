import type { ThemeValues } from '@/theme'
import type { LiteralUnion } from '@/utils'

export type Size = LiteralUnion<LoaderSize, number | string>
export type ThemeLoaders = Record<LoaderSize, string>

// eslint-disable-next-line perfectionist/sort-union-types
type LoaderSize = 'xs' | 'sm' | 'md' | 'lg'

export const getLoaders = ({ toRem }: ThemeValues): ThemeLoaders => ({
  lg: toRem(20),
  md: toRem(15),
  sm: toRem(10),
  xs: toRem(8),
})
