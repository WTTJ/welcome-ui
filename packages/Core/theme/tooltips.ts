import { CSSObject } from '@xstyled/system'

import { WuiTheme } from './types'

export const getTooltips = (theme: WuiTheme): CSSObject => {
  const { borderWidths, colors, fontSizes, radii, space, toRem } = theme

  return {
    maxWidth: toRem(200),
    backgroundColor: colors.dark[700],
    color: colors.light[700],
    border: `${borderWidths.sm} solid ${colors.dark[500]}`,
    padding: `${space.xxs} ${space.sm}`,
    fontSize: fontSizes.body4,
    borderRadius: radii.md,
  }
}
