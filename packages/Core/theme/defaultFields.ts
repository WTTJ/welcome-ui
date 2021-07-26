import { ThemeFocus } from './focus'
import { WuiTheme } from './types'

type CommonAttributesField = {
  color?: string
  fontSize?: string
  lineHeight?: string
  fontWeight?: string
  backgroundColor?: string
  borderColor?: string
  borderWidth?: string
  borderStyle?: string
  outline?: string
}

type SizeAttributesField = {
  height?: string
  padding?: string
}

type Size = 'sm' | 'md' | 'lg'

export type ThemeDefaultFields = {
  default: CommonAttributesField
  sizes: Record<Size, SizeAttributesField>
  checkableField: {
    checked: {
      color: string
    }
    disabled: {
      opacity: number
    }
  }
  disabled: {
    backgroundColor: string
    color: string
    cursor: string
  }
  placeholder: {
    color: string
  }
  focused: {
    default: { borderColor: string } & ReturnType<ThemeFocus>
    error: ReturnType<ThemeFocus>
    warning: ReturnType<ThemeFocus>
  }
  checkablelabel: {
    default: {
      fontWeight: string
    }
    checked: {
      color: string
      '-webkit-text-stroke': string
    }
  }
  select: {
    default: {
      maxHeight: string
    }
    existing: {
      color: string
      cursor: string
    }
    highlighted: {
      backgroundColor: string
      cursor: string
    }
    selectedAndHighlighted: {
      backgroundImage: string
    }
    selected: {
      color: string
      fontWeight: string
    }
  }
  fieldset: {
    'border-width': string
  }
}

export const getDefaultFields = (theme: WuiTheme): ThemeDefaultFields => {
  const { borderWidths, colors, focus, fontSizes, fontWeights, space, toRem } = theme

  return {
    default: {
      color: colors.dark[900],
      fontSize: fontSizes.body3,
      /* Can't use 16 because that's a valid line-height value (16em) */
      lineHeight: '1rem',
      fontWeight: fontWeights.regular,
      backgroundColor: colors.light[900],
      borderColor: colors.nude[200],
      borderWidth: borderWidths.sm,
      borderStyle: 'solid',
      outline: 'none'
    },
    sizes: {
      sm: {
        height: toRem(32),
        padding: `${space.xs} ${space.md}`
      },
      md: {
        height: toRem(36),
        padding: `${space.sm} ${space.md}`
      },
      lg: {
        height: toRem(40),
        padding: `${space.md}`
      }
    },
    checkableField: {
      checked: {
        color: 'white' // not hex color, only color from browser because is on a content svg
      },
      disabled: {
        opacity: 0.4
      }
    },
    disabled: {
      backgroundColor: colors.nude[500],
      color: colors.nude[700],
      cursor: 'not-allowed'
    },
    placeholder: {
      color: colors.nude[500]
    },
    focused: {
      default: {
        ...focus(),
        borderColor: colors.primary[500]
      },
      error: focus(colors.danger[700]),
      warning: focus(colors.warning[700])
    },
    checkablelabel: {
      default: {
        fontWeight: fontWeights.regular
      },
      checked: {
        color: colors.dark[200],
        '-webkit-text-stroke': '0.04em'
      }
    },
    select: {
      default: {
        maxHeight: toRem(155)
      },
      existing: {
        color: colors.nude[500],
        cursor: 'not-allowed'
      },
      highlighted: {
        backgroundColor: colors.nude[100],
        cursor: 'default'
      },
      selectedAndHighlighted: {
        backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08) 100%)'
      },
      selected: {
        color: colors.dark[200],
        fontWeight: fontWeights.bold
      }
    },
    fieldset: {
      'border-width': '0'
    }
  }
}
