import { ThemeValues } from '@/theme'
import { LiteralUnion } from '@/utils'

type LoaderSize = 'xs' | 'sm' | 'md' | 'lg'
export type Size = LiteralUnion<LoaderSize, string | number>

export type ThemeLoaders = Record<LoaderSize, string>

export const getLoaders = ({ toRem }: ThemeValues): ThemeLoaders => ({
  xs: toRem(8),
  sm: toRem(10),
  md: toRem(15),
  lg: toRem(20),
})
