import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeColorTokens, ThemeValues } from '@old/theme'
import type { LiteralUnion } from '@old/utils'

export type AvatarColors = LiteralUnion<ThemeColorTokens>
// we want to keep Size in a natural order for documentation
// we want to keep Size in a natural order for documentation
// eslint-disable-next-line perfectionist/sort-union-types
export type Size = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type ThemeAvatars = {
  sizes: Record<Size, string>
  text: CSSObject
}

export const getAvatars = (theme: ThemeValues): ThemeAvatars => {
  const { colors, fontWeights, toRem } = theme

  return {
    sizes: {
      lg: toRem(40),
      md: toRem(30),
      sm: toRem(20),
      xl: toRem(50),
      xxl: toRem(60),
    },
    text: {
      color: colors['neutral-90'],
      fontWeight: fontWeights.bold,
    },
  }
}
