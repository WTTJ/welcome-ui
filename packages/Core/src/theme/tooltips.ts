import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export const getTooltips = (theme: WuiTheme): CSSObject => {
  const { borderWidths, colors, fontSizes, lineHeights, space, toRem } = theme

  return {
    maxWidth: toRem(200),
    backgroundColor: colors.black,
    color: colors.white,
    padding: `${space.xs} ${space.sm}`,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    border: `${borderWidths.sm} solid ${colors['neutral-60']}`,
    boxSizing: 'border-box',
  }
}
