import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '../../theme'

export type ThemeTooltips = CSSObject

export const getTooltips = (theme: ThemeValues): ThemeTooltips => {
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
