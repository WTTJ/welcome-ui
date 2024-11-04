import { CSSObject } from '@xstyled/styled-components'
import { Size } from '@welcome-ui/utils'

import { WuiTheme } from './types'

type VariantsTheme = {
  danger: CSSObject
  success: CSSObject
  warning: CSSObject
}

export type ThemeDefaultFields = {
  checkableField: {
    checked: CSSObject
    disabled: CSSObject
  }
  checkablelabel: {
    checked: CSSObject
    default: CSSObject
  }
  default: CSSObject
  disabled: CSSObject
  fieldset: CSSObject
  focused: VariantsTheme & {
    default: CSSObject
  }
  iconPlacement: Record<Size, CSSObject>
  placeholder: CSSObject
  select: {
    default: CSSObject
    disabled: CSSObject
    existing: CSSObject
    highlighted: CSSObject
    selected: CSSObject
    selectedAndHighlighted: CSSObject
  }
  sizes: Record<Size, CSSObject>
  variants: VariantsTheme
}

export const getDefaultFields = (theme: WuiTheme): ThemeDefaultFields => {
  const { borderWidths, colors, focus, fontSizes, fontWeights, radii, space, toRem } = theme

  return {
    default: {
      color: colors['neutral-90'],
      fontSize: fontSizes.sm,
      /* Can't use 16 because that's a valid line-height value (16em) */
      lineHeight: '1rem',
      fontWeight: fontWeights.regular,
      backgroundColor: colors['neutral-10'],
      borderColor: colors['neutral-30'],
      borderWidth: borderWidths.sm,
      borderStyle: 'solid',
      outline: 'none',
      borderRadius: radii.md,
    },
    variants: {
      danger: {
        borderColor: colors['red-80'],
      },
      success: {
        borderColor: colors['green-70'],
      },
      warning: {
        borderColor: colors['orange-70'],
      },
    },
    focused: {
      default: {
        ...focus(colors['primary-30']),
        borderColor: 'transparent',
      },
      danger: { ...focus(colors['red-70']) },
      warning: { ...focus(colors['orange-60']) },
      success: { ...focus(colors['green-60']) },
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
        color: 'neutral-90', // not hex color, only color from browser because is on a content svg
      },
      disabled: {
        opacity: 0.4,
      },
    },
    disabled: {
      backgroundColor: colors['beige-40'],
      color: colors['beige-70'],
      cursor: 'not-allowed',
    },
    placeholder: {
      color: colors['neutral-50'],
    },
    checkablelabel: {
      default: {},
      checked: {
        color: colors['neutral-90'],
        '-webkit-text-stroke': '0.04em',
      },
    },
    select: {
      default: {
        maxHeight: toRem(155),
        borderRadius: radii.md,
      },
      existing: {
        color: colors['beige-40'],
        cursor: 'not-allowed',
      },
      highlighted: {
        backgroundColor: colors['beige-20'],
        cursor: 'default',
      },
      selectedAndHighlighted: {
        backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08) 100%)',
      },
      selected: {
        color: colors['neutral-90'],
        fontWeight: fontWeights.bold,
      },
      disabled: {
        color: colors['beige-60'],
        cursor: 'not-allowed',
      },
    },
    fieldset: {
      'border-width': '0',
    },
  }
}
