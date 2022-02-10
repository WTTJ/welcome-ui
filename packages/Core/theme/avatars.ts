import { CSSObject } from '@xstyled/system'

import { WuiTheme } from './types'

type Size = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type ThemeAvatars = {
  sizes: Record<Size, string>
  text: CSSObject
}

export const getAvatars = (theme: WuiTheme): ThemeAvatars => {
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
      color: colors.light[900],
      fontWeight: fontWeights.bold,
    },
  }
}
