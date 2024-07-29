import { CSSObject } from '@xstyled/styled-components'
import { Size } from '@welcome-ui/utils'

import { ThemeFocus } from './focus'
import { WuiTheme } from './types'

export type ThemeDefaultFields = {
  default: CSSObject
  sizes: Record<Size, CSSObject>
  iconPlacement: Record<Size, CSSObject>
  checkableField: {
    checked: CSSObject
    disabled: CSSObject
  }
  disabled: CSSObject
  placeholder: CSSObject
  focused: {
    default: CSSObject & ReturnType<ThemeFocus>
    error: CSSObject & ReturnType<ThemeFocus>
    warning: CSSObject & ReturnType<ThemeFocus>
    success: CSSObject & ReturnType<ThemeFocus>
    info: CSSObject & ReturnType<ThemeFocus>
  }
  checkablelabel: {
    default: CSSObject
    checked: CSSObject
  }
  select: {
    default: CSSObject
    existing: CSSObject
    highlighted: CSSObject
    selectedAndHighlighted: CSSObject
    selected: CSSObject
    disabled: CSSObject
  }
  fieldset: CSSObject
}

export const getDefaultFields = (theme: WuiTheme): ThemeDefaultFields => {
  const { borderWidths, colors, focus, fontSizes, fontWeights, space, toRem } = theme

  return {
    default: {
      color: colors['neutral-black'],
      fontSize: fontSizes.sm,
      /* Can't use 16 because that's a valid line-height value (16em) */
      lineHeight: '1rem',
      fontWeight: fontWeights.regular,
      backgroundColor: colors['neutral-white'],
      borderColor: colors.border,
      borderWidth: borderWidths.sm,
      borderStyle: 'solid',
      outline: 'none',
    },
    sizes: {
      xs: {
        height: toRem(24),
        paddingTop: space.xs,
        paddingRight: space.sm,
        paddingBottom: space.xs,
        paddingLeft: space.sm,
      },
      sm: {
        height: toRem(32),
        paddingTop: space.sm,
        paddingRight: space.md,
        paddingBottom: space.sm,
        paddingLeft: space.md,
      },
      md: {
        height: toRem(40),
        paddingTop: space.md,
        paddingRight: space.md,
        paddingBottom: space.md,
        paddingLeft: space.md,
      },
      lg: {
        height: toRem(48),
        paddingTop: space.lg,
        paddingRight: space.md,
        paddingBottom: space.lg,
        paddingLeft: space.md,
      },
    },
    iconPlacement: {
      xs: {
        left: toRem(8),
        right: toRem(8),
      },
      sm: {
        left: toRem(12),
        right: toRem(12),
      },
      md: {
        left: toRem(12),
        right: toRem(12),
      },
      lg: {
        left: toRem(12),
        right: toRem(12),
      },
    },
    checkableField: {
      checked: {
        color: 'black', // not hex color, only color from browser because is on a content svg
      },
      disabled: {
        opacity: 0.4,
      },
    },
    disabled: {
      backgroundColor: colors['nude-40'],
      color: colors['nude-70'],
      cursor: 'not-allowed',
    },
    placeholder: {
      color: colors['neutral-40'],
    },
    focused: {
      default: {
        ...focus(colors['primary-20']),
        borderColor: 'transparent',
      },
      error: { ...focus(colors['danger-30']) },
      warning: { ...focus(colors['warning-40']) },
      success: { ...focus(colors['success-30']) },
      info: { ...focus(colors['info-40']) },
    },
    checkablelabel: {
      default: {},
      checked: {
        color: colors['neutral-black'],
        '-webkit-text-stroke': '0.04em',
      },
    },
    select: {
      default: {
        maxHeight: toRem(155),
      },
      existing: {
        color: colors['nude-40'],
        cursor: 'not-allowed',
      },
      highlighted: {
        backgroundColor: colors['nude-20'],
        cursor: 'default',
      },
      selectedAndHighlighted: {
        backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08) 100%)',
      },
      selected: {
        color: colors['neutral-black'],
        fontWeight: fontWeights.bold,
      },
      disabled: {
        color: colors['nude-60'],
        cursor: 'not-allowed',
      },
    },
    fieldset: {
      'border-width': '0',
    },
  }
}
