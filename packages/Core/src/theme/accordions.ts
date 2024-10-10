import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeAccordions = {
  content: CSSObject
  icon: CSSObject
  padding: string
  title: CSSObject
  wrapper: CSSObject
}

export const getAccordions = (theme: WuiTheme): ThemeAccordions => {
  const { borderWidths, colors, fontSizes, radii, space, texts, transitions } = theme

  return {
    padding: space.lg,
    wrapper: {
      backgroundColor: colors['light-900'],
      transition: transitions.medium,
      border: `${borderWidths.sm} solid ${colors.border}`,
      borderRadius: radii.md,
    },
    icon: {
      color: colors['dark-900'],
    },
    content: {
      fontSize: fontSizes.sm,
    },
    title: texts.h5,
  }
}
