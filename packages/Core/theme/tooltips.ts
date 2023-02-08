import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export const getTooltips = (theme: WuiTheme): CSSObject => {
  const { colors, fontSizes, lineHeights, radii, space, toRem } = theme

  return {
    maxWidth: toRem(200),
    backgroundColor: colors.black,
    color: colors.white,
    padding: `${space.xs} ${space.sm}`,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    borderRadius: radii.sm,
    boxSizing: 'content-box',
  }
}
