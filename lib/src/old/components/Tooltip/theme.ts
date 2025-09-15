import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@old/theme'

export type ThemeTooltips = CSSObject

export const getTooltips = (theme: ThemeValues): ThemeTooltips => {
  const { borderWidths, colors, fontSizes, fontWeights, radii, space, toRem } = theme

  return {
    backgroundColor: colors['neutral-90'],
    border: `${borderWidths.sm} solid ${colors['neutral-60']}`,
    borderRadius: radii.md,
    boxSizing: 'border-box',
    color: colors['neutral-10'],
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    maxWidth: toRem(200),
    padding: `${space.xs} ${space.sm}`,
  }
}
