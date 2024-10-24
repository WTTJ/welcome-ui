import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeSliders = {
  default: CSSObject
  disabled: CSSObject
  focused: CSSObject
  output: CSSObject
  rangeInput: CSSObject
  selector: CSSObject
}

export const getSliders = (theme: WuiTheme): ThemeSliders => {
  const { borderWidths, colors } = theme
  return {
    default: {
      backgroundColor: colors['beige-40'],
      backgroundImage: `linear-gradient(${colors['primary-40']}, ${colors['primary-40']})`,
    },
    selector: {
      backgroundColor: colors['neutral-90'],
      borderRadius: '50%',
      border: `${borderWidths.md} solid`,
      disabled: {
        backgroundColor: colors['beige-60'],
      },
    },
    output: {
      tooltip: {
        backgroundColor: colors['neutral-90'],
        border: `${borderWidths.sm} solid ${colors['neutral-70']}}`,
        color: colors['neutral-10'],
      },
    },
    focused: {
      outline: `${borderWidths.md} solid ${colors['primary-40']}`,
      disabled: {
        outline: 'none',
      },
    },
    disabled: {
      backgroundImage: `linear-gradient(${colors['beige-60']}, ${colors['beige-60']})`,
    },
    rangeInput: {
      disabled: {
        backgroundColor: colors['beige-60'],
      },
    },
  }
}
