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
  const { borderWidths, colors, space, toRem } = theme
  return {
    default: {
      appearance: 'none',
      backgroundColor: colors['nude-400'],
      backgroundImage: `linear-gradient(${colors['primary-500']}, ${colors['primary-500']})`,
      backgroundRepeat: 'no-repeat',
      borderRadius: 0,
      cursor: 'pointer',
      height: space.xs,
      marginTop: space.sm,
      marginBottom: space.sm,
      width: '100%',
    },
    selector: {
      appearance: 'none',
      backgroundColor: colors['dark-900'],
      borderRadius: '50%',
      border: `${borderWidths.md} solid`,
      cursor: 'pointer',
      height: toRem(20),
      width: toRem(20),
      disabled: {
        backgroundColor: colors['nude-600'],
      },
    },
    output: {
      position: 'absolute',
      textAlign: 'center',
      transform: `translate(-50%, calc(-100% + -${space.xs}))`,
      tooltip: {
        backgroundColor: colors['dark-900'],
        border: `${borderWidths.sm} solid ${colors['dark-700']}}`,
        color: colors['light-900'],
        flex: '1 1 auto',
        margin: 'auto',
        minWidth: space.xxs,
        padding: `${space.xs} ${space.sm}`,
      },
    },
    focused: {
      outline: `${borderWidths.md} solid ${colors['primary-500']}`,
      disabled: {
        outline: 'none',
      },
    },
    disabled: {
      backgroundImage: `linear-gradient(${colors['nude-600']}, ${colors['nude-600']})`,
    },
    rangeInput: {
      appearance: 'none',
      pointerEvents: 'none',
      position: 'absolute',
      height: 0,
      width: '100%',
      outline: 'none',
      zIndex: 1,
      top: space.xxs,
      track: {
        position: 'absolute',
        width: '100%',
        height: space.xs,
      },
      disabled: {
        backgroundColor: colors['nude-600'],
      },
    },
  }
}
