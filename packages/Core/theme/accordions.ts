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
  const { borderWidths, colors, fontSizes, texts, toRem, transitions } = theme

  return {
    padding: toRem(16),
    wrapper: {
      backgroundColor: colors['light-900'],
      transition: transitions.medium,
      border: `${borderWidths.sm} solid ${colors.border}`,
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
