import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeSliders = {
  default: CSSObject
  selector: CSSObject
  focused: CSSObject
  rangeInput: CSSObject
  disabled: CSSObject
  output: CSSObject
}

export const getSliders = (theme: WuiTheme): ThemeSliders => {
  const { borderWidths, colors } = theme
  return {
    default: {
      backgroundColor: colors['nude-40'],
      backgroundImage: `linear-gradient(${colors['primary-40']}, ${colors['primary-40']})`,
    },
    selector: {
      backgroundColor: colors['neutral-black'],
      borderRadius: '50%',
      border: `${borderWidths.md} solid`,
      disabled: {
        backgroundColor: colors['nude-60'],
      },
    },
    output: {
      tooltip: {
        backgroundColor: colors['neutral-black'],
        border: `${borderWidths.sm} solid ${colors['dark-700']}}`,
        color: colors['neutral-white'],
      },
    },
    focused: {
      outline: `${borderWidths.md} solid ${colors['primary-40']}`,
      disabled: {
        outline: 'none',
      },
    },
    disabled: {
      backgroundImage: `linear-gradient(${colors['nude-60']}, ${colors['nude-60']})`,
    },
    rangeInput: {
      disabled: {
        backgroundColor: colors['nude-60'],
      },
    },
  }
}
