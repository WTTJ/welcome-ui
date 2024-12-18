import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export const getTooltips = (theme: WuiTheme): CSSObject => {
  const { borderWidths, colors, fontSizes, fontWeights, radii, space, toRem } = theme

  return {
    maxWidth: toRem(200),
    backgroundColor: colors['neutral-90'],
    color: colors['neutral-10'],
    padding: `${space.xs} ${space.sm}`,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    border: `${borderWidths.sm} solid ${colors['neutral-60']}`,
    borderRadius: radii.md,
    boxSizing: 'border-box',
  }
}
