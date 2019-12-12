import { hexToRGB } from '../utils/hexToRGB'

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
    'border-radius': radii.md,
    'line-height': '100%',
    '&:focus': {
      'box-shadow': `0 0 0 3px rgba(${hexToRGB(colors.info[500])}, 0.5)`
    },
    '&:hover': {
      'box-shadow': shadows.sm
    }
  }

  return {
    primary: defaults,
    secondary: {
      ...defaults,
      color: colors.secondary[700],
      'background-color': colors.light[100],
      'border-color': colors.nude[200]
    },
    tertiary: {
      ...defaults,
      color: colors.light[200],
      'background-color': colors.secondary[500],
      'border-color': colors.secondary[500]
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
      'background-color': colors.light[100],
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
      'background-color': colors.light[100],
      'border-color': colors.danger[500]
    },
    quaternary: {
      ...defaults,
      color: colors.nude[700],
      'background-color': colors.nude[200],
      'border-color': colors.nude[200]
    },
    hover: {
      primary: {
        'background-color': colors.primary[200],
        'border-color': colors.primary[200]
      },
      secondary: {
        'background-color': colors.light[200],
        'border-color': colors.nude[300]
      },
      tertiary: {
        'background-color': colors.secondary[200],
        'border-color': colors.secondary[200]
      },
      'primary-warning': {
        'background-color': colors.warning[200],
        'border-color': colors.warning[200]
      },
      'secondary-warning': {
        'background-color': colors.warning[100],
        'border-color': colors.warning[200]
      },
      'primary-danger': {
        'background-color': colors.danger[200],
        'border-color': colors.danger[200]
      },
      'secondary-danger': {
        'background-color': colors.danger[100],
        'border-color': colors.danger[200]
      },
      quaternary: {
        color: colors.nude[800],
        'background-color': colors.nude[400],
        'border-color': colors.nude[400]
      }
    },
    focus: {
      primary: {
        'background-color': colors.primary[700],
        'border-color': colors.primary[700]
      },
      secondary: {
        'background-color': colors.light[200],
        'border-color': colors.nude[500]
      },
      tertiary: {
        'background-color': colors.secondary[700],
        'border-color': colors.secondary[700]
      },
      'primary-warning': {
        'background-color': colors.warning[700],
        'border-color': colors.warning[700]
      },
      'secondary-warning': {
        'background-color': colors.light[100],
        'border-color': colors.warning[700]
      },
      'primary-danger': {
        'background-color': colors.danger[700],
        'border-color': colors.danger[700]
      },
      'secondary-danger': {
        'background-color': colors.light[100],
        'border-color': colors.danger[700]
      },
      quaternary: {
        color: colors.nude[800],
        'background-color': colors.nude[400],
        'border-color': colors.nude[400]
      }
    },
    disabled: {
      ...defaults,
      color: colors.nude[600],
      'background-color': colors.nude[100],
      'border-color': colors.nude[100]
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
