import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export const getTooltips = (theme: WuiTheme): CSSObject => {
  const { colors, fontSizes, radii, space, toRem } = theme

  return {
    maxWidth: toRem(200),
    backgroundColor: colors.black,
    color: colors.white,
    padding: `${space.xxs} ${space.sm}`,
    fontSize: fontSizes.body4,
    borderRadius: radii.md,
  }
}
