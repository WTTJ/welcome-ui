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
  const { borderWidths, colors, fontSizes, space, texts, transitions } = theme

  return {
    padding: space.lg,
    wrapper: {
      backgroundColor: colors['neutral-white'],
      transition: transitions.medium,
      border: `${borderWidths.sm} solid ${colors.border}`,
    },
    icon: {
      color: colors['neutral-black'],
    },
    content: {
      fontSize: fontSizes.sm,
    },
    title: texts.h5,
  }
}
