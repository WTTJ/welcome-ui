import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@/theme'

// To allow for line-height of text in label
const XS_LINE_HEIGHT_ADJUSTMENTS = '0.32rem !important'
const SM_LINE_HEIGHT_ADJUSTMENTS = '0.12rem ! important'

// eslint-disable-next-line perfectionist/sort-union-types
export type Size = 'xs' | 'sm' | 'md'
export type ThemeToggles = {
  after: Record<'sizes' | State, CSSObject>
  icon: Record<'position' | 'sizes', CSSObject>
  item: Record<'sizes' | State, CSSObject>
}

type State = 'checked' | 'default' | 'disabled'

export const getToggles = (theme: ThemeValues): ThemeToggles => {
  const { borderWidths, colors, focus, toRem } = theme

  return {
    after: {
      checked: {
        backgroundColor: colors['neutral-10'],
        borderColor: colors['neutral-10'],
      },
      default: {
        backgroundColor: colors['neutral-10'],
        borderColor: colors['neutral-50'],
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: borderWidths.sm,
      },
      disabled: {
        backgroundColor: colors['beige-60'],
        borderColor: 'transparent',
      },
      sizes: {
        md: {
          height: toRem(20),
          width: toRem(20),
        },
        sm: {
          height: toRem(16),
          width: toRem(16),
        },
        xs: {
          height: toRem(12),
          width: toRem(12),
        },
      },
    },
    icon: {
      position: {
        md: {
          left: '4px',
          right: '4px',
        },
        sm: {
          left: '4px',
          right: '4px',
        },
        xs: {
          left: '2px',
          right: '2px',
        },
      },
      sizes: {
        md: {
          fontSize: toRem(16),
          height: toRem(16),
          width: toRem(16),
        },
        sm: {
          fontSize: toRem(12),
          height: toRem(12),
          width: toRem(12),
        },
        xs: {
          fontSize: toRem(10),
          height: toRem(10),
          width: toRem(10),
        },
      },
    },
    item: {
      checked: {
        backgroundColor: colors['primary-40'],
        borderColor: colors['primary-40'],
      },
      default: {
        '&:focus': {
          borderColor: colors['primary-30'],
          ...focus(colors['primary-30']),
        },
        backgroundColor: colors['neutral-10'],
        borderColor: colors['neutral-30'],
        borderRadius: toRem(16),
        borderStyle: 'solid',

        borderWidth: borderWidths.sm,
      },
      disabled: {
        backgroundColor: colors['beige-40'],
        borderColor: colors['beige-60'],
      },
      sizes: {
        md: {
          height: toRem(24),
          marginTop: '0 !important',
          width: toRem(44),
        },
        sm: {
          height: toRem(20),
          marginTop: SM_LINE_HEIGHT_ADJUSTMENTS,
          width: toRem(36),
        },
        xs: {
          height: toRem(16),
          marginTop: XS_LINE_HEIGHT_ADJUSTMENTS,
          width: toRem(28),
        },
      },
    },
  }
}
