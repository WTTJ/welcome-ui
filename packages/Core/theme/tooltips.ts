import { CSSObject } from 'styled-components'

import { WuiTheme } from './types'

export const getTooltips = (theme: WuiTheme): CSSObject => {
  const { colors, fontSizes, radii, spaces, toRem } = theme

  return {
    maxWidth: toRem(200),
    backgroundColor: colors.black,
    color: colors.white,
    padding: `${spaces.xxs} ${spaces.sm}`,
    fontSize: fontSizes.xs,
    borderRadius: radii.md,
  }
}
