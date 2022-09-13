import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeAccordions = {
  padding: string
  wrapper: CSSObject
  icon: CSSObject
  content: CSSObject
  title: CSSObject
}

export const getAccordions = (theme: WuiTheme): ThemeAccordions => {
  const { borderWidths, colors, fontSizes, fontWeights, toRem } = theme

  return {
    padding: toRem(20),
    wrapper: {
      backgroundColor: colors['light-900'],
      border: `${borderWidths.sm} solid ${colors.border}`,
    },
    icon: {
      color: colors['dark-900'],
    },
    content: {
      fontSize: fontSizes.sm,
    },
    title: {
      color: colors['dark-900'],
      fontSize: fontSizes.h5,
      fontWeight: fontWeights.bold,
    },
  }
}
