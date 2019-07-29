export const getButtons = theme => {
  const { colors, fontSizes, fontWeights, letterSpacings, radii, shadows, space } = theme
  const defaults = {
    color: colors.light[200],
    'font-size': fontSizes.button,
    'font-weight': fontWeights.bold,
    'text-transform': 'uppercase',
    'letter-spacing': letterSpacings.md,
    'background-color': colors.primary[500],
    'border-color': colors.primary[500],
    'border-radius': radii.sm,
    'line-height': '100%',
    '&:hover': {
      'box-shadow': shadows.sm
    },
    '&:focus': {
      'box-shadow': shadows.sm
    }
  }

  return {
    primary: defaults,
    'primary-reverse': {
      ...defaults,
      color: colors.primary[500],
      'background-color': colors.light[200],
      'border-color': colors.primary[500]
    },
    secondary: {
      ...defaults,
      color: colors.light[200],
      'background-color': colors.secondary[700],
      'border-color': colors.secondary[700]
    },
    'secondary-reverse': {
      ...defaults,
      color: colors.secondary[500],
      'background-color': colors.light[200],
      'border-color': colors.secondary[500]
    },
    tertiary: {
      ...defaults,
      color: colors.light[200],
      'background-color': colors.secondary[700],
      'border-color': colors.secondary[700]
    },
    'tertiary-reverse': {
      ...defaults,
      'background-color': colors.light[200],
      color: colors.secondary[700],
      'border-color': colors.secondary[700]
    },
    warning: {
      ...defaults,
      color: colors.light[200],
      'background-color': colors.warning[500],
      'border-color': colors.warning[500]
    },
    'warning-reverse': {
      ...defaults,
      color: colors.warning[500],
      'background-color': colors.light[200],
      'border-color': colors.warning[500]
    },
    danger: {
      ...defaults,
      color: colors.light[200],
      'background-color': colors.danger[500],
      'border-color': colors.danger[500]
    },
    'danger-reverse': {
      ...defaults,
      color: colors.danger[500],
      'background-color': colors.light[200],
      'border-color': colors.danger[500]
    },
    focused: {
      primary: {
        'background-color': colors.primary[200],
        'border-color': colors.primary[200]
      },
      'primary-reverse': {
        color: colors.primary[200],
        'border-color': colors.primary[200]
      },
      secondary: {
        'background-color': colors.secondary[500],
        'border-color': colors.secondary[500]
      },
      'secondary-reverse': {
        color: colors.secondary[500],
        'border-color': colors.secondary[500]
      },
      tertiary: {
        'background-color': colors.secondary[500],
        'border-color': colors.secondary[500]
      },
      'tertiary-reverse': {
        color: colors.secondary[500],
        'border-color': colors.secondary[500]
      },
      warning: {
        'background-color': colors.warning[200],
        'border-color': colors.warning[200]
      },
      'warning-reverse': {
        color: colors.warning[200],
        'border-color': colors.warning[200]
      },
      danger: {
        'background-color': colors.danger[200],
        'border-color': colors.danger[200]
      },
      'danger-reverse': {
        color: colors.danger[200],
        'border-color': colors.danger[200]
      }
    },
    disabled: {
      ...defaults,
      color: colors.nude[700],
      'background-color': colors.light[700],
      'border-color': colors.light[700]
    },
    sizes: {
      xs: {
        height: '1.25rem',
        padding: `0 ${space.sm}`
      },
      sm: {
        height: '2rem',
        padding: `0 ${space.sm}`
      },
      md: {
        height: '2.25rem',
        padding: `0 ${space.md}`
      },
      lg: {
        height: '2.5rem',
        padding: `0 ${space.lg}`
      },
      xl: {
        height: '4.375rem',
        padding: `0 ${space.lg}`
      }
    }
  }
}
