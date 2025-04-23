import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeColorTokens, ThemeValues } from '@/theme'
import type { LiteralUnion } from '@/utils'

export type Size = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type AvatarColors = LiteralUnion<ThemeColorTokens>

export type ThemeAvatars = {
  sizes: Record<Size, string>
  text: CSSObject
}

export const getAvatars = (theme: ThemeValues): ThemeAvatars => {
  const { colors, fontWeights, toRem } = theme

  return {
    sizes: {
      sm: toRem(20),
      md: toRem(30),
      lg: toRem(40),
      xl: toRem(50),
      xxl: toRem(60),
    },
    text: {
      color: colors['neutral-90'],
      fontWeight: fontWeights.bold,
    },
  }
}
