import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

// To allow for line-height of text in label
const XS_LINE_HEIGHT_ADJUSTMENTS = '0.32rem !important'
const SM_LINE_HEIGHT_ADJUSTMENTS = '0.12rem ! important'

type State = 'default' | 'checked' | 'disabled' | 'sizes'

export type ThemeToggles = {
  item: Record<State, CSSObject>
  after: Record<State, CSSObject>
  icon: Record<'sizes' | 'position', CSSObject>
}

export const getToggles = (theme: WuiTheme): ThemeToggles => {
  const { borderWidths, colors, focus, toRem } = theme

  return {
    item: {
      default: {
        backgroundColor: colors['neutral-white'],
        borderColor: colors.border,
        borderWidth: borderWidths.sm,
        borderStyle: 'solid',
        borderRadius: toRem(16),

        '&:focus': {
          borderColor: colors['primary-30'],
          ...focus(colors['primary-30']),
        },
      },
      sizes: {
        xs: {
          width: toRem(28),
          height: toRem(16),
          marginTop: XS_LINE_HEIGHT_ADJUSTMENTS,
        },
        sm: {
          width: toRem(36),
          height: toRem(20),
          marginTop: SM_LINE_HEIGHT_ADJUSTMENTS,
        },
        md: {
          width: toRem(44),
          height: toRem(24),
          marginTop: '0 !important',
        },
      },
      checked: {
        backgroundColor: colors['primary-40'],
        borderColor: colors['primary-40'],
      },
      disabled: {
        borderColor: colors['nude-60'],
        backgroundColor: colors['nude-40'],
      },
    },
    after: {
      default: {
        backgroundColor: colors['neutral-white'],
        borderColor: colors['neutral-40'],
        borderWidth: borderWidths.sm,
        borderStyle: 'solid',
        borderRadius: '50%',
      },
      checked: {
        backgroundColor: colors['neutral-white'],
        borderColor: colors['neutral-white'],
      },
      disabled: {
        borderColor: 'transparent',
        backgroundColor: colors['nude-60'],
      },
      sizes: {
        xs: {
          width: toRem(12),
          height: toRem(12),
        },
        sm: {
          width: toRem(16),
          height: toRem(16),
        },
        md: {
          width: toRem(20),
          height: toRem(20),
        },
      },
    },
    icon: {
      position: {
        xs: {
          left: '2px',
          right: '2px',
        },
        sm: {
          left: '4px',
          right: '4px',
        },
        md: {
          left: '4px',
          right: '4px',
        },
      },
      sizes: {
        xs: {
          width: toRem(10),
          height: toRem(10),
          fontSize: toRem(10),
        },
        sm: {
          width: toRem(12),
          height: toRem(12),
          fontSize: toRem(12),
        },
        md: {
          width: toRem(16),
          height: toRem(16),
          fontSize: toRem(16),
        },
      },
    },
  }
}
