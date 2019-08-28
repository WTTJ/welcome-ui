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
    secondary: {
      ...defaults,
      color: colors.secondary[700],
      'background-color': colors.light[200],
      'border-color': colors.nude[200]
    },
    tertiary: {
      ...defaults,
      color: colors.light[200],
      'background-color': colors.secondary[700],
      'border-color': colors.secondary[700]
    },
    'primary-warning': {
      ...defaults,
      color: colors.light[200],
      'background-color': colors.warning[500],
      'border-color': colors.warning[500]
    },
    'secondary-warning': {
      ...defaults,
      color: colors.warning[500],
      'background-color': colors.light[200],
      'border-color': colors.warning[500]
    },
    'primary-danger': {
      ...defaults,
      color: colors.light[200],
      'background-color': colors.danger[500],
      'border-color': colors.danger[500]
    },
    'secondary-danger': {
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
      secondary: {
        color: colors.secondary[500],
        'border-color': colors.nude[400]
      },
      tertiary: {
        'background-color': colors.secondary[500],
        'border-color': colors.secondary[500]
      },
      'primary-warning': {
        'background-color': colors.warning[200],
        'border-color': colors.warning[200]
      },
      'secondary-warning': {
        color: colors.warning[200],
        'border-color': colors.warning[200]
      },
      'primary-danger': {
        'background-color': colors.danger[200],
        'border-color': colors.danger[200]
      },
      'secondary-danger': {
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
