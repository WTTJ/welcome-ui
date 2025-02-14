import { ThemeValues } from '@/theme'
import { LiteralUnion } from '@/utils'

type LoarderSize = 'xs' | 'sm' | 'md' | 'lg'
export type Size = LiteralUnion<LoarderSize, string | number>

export type ThemeLoaders = Record<LoarderSize, string>

export const getLoaders = ({ toRem }: ThemeValues): ThemeLoaders => ({
  xs: toRem(8),
  sm: toRem(10),
  md: toRem(15),
  lg: toRem(20),
})
