import { hexToRGB } from '@welcome-ui/utils'

const focusShadow = color => ({
  'box-shadow': `0 0 0 3px rgba(${hexToRGB(color)}, 0.5)`
})

export const getButtons = theme => {
  const { colors, fontSizes, fontWeights, radii, space, toRem } = theme
  const defaults = {
    color: colors.light[900],
    'font-size': fontSizes.button,
    'font-weight': fontWeights.bold,
    'letter-spacing': 0,
    'border-radius': radii.md
  }

  return {
    primary: {
      ...defaults,
      'background-color': colors.primary[500],
      'border-color': colors.primary[500]
    },
    secondary: {
      ...defaults,
      'background-color': colors.dark[900],
      'border-color': colors.dark[900]
    },
    tertiary: {
      ...defaults,
      color: colors.dark[900],
      'background-color': 'transparent',
      'border-color': colors.dark[900]
    },
    'tertiary-negative': {
      ...defaults,
      'background-color': 'transparent',
      'border-color': colors.light[900]
    },
    'primary-warning': {
      ...defaults,
      'background-color': colors.warning[500],
      'border-color': colors.warning[500]
    },
    'secondary-warning': {
      ...defaults,
      color: colors.warning[500],
      'background-color': colors.light[900],
      'border-color': colors.warning[500]
    },
    'primary-danger': {
      ...defaults,
      'background-color': colors.danger[500],
      'border-color': colors.danger[500]
    },
    'secondary-danger': {
      ...defaults,
      color: colors.danger[500],
      'background-color': colors.light[900],
      'border-color': colors.danger[500]
    },
    quaternary: {
      ...defaults,
      color: colors.dark[900],
      'background-color': colors.light[900],
      'border-color': colors.light[900]
    },
    hover: {
      primary: {
        'background-color': colors.primary[200],
        'border-color': colors.primary[200]
      },
      secondary: {
        'background-color': colors.dark[500],
        'border-color': colors.dark[500]
      },
      tertiary: {
        'background-color': `rgba(${hexToRGB(colors.dark[900])}, 0.1)`
      },
      'tertiary-negative': {
        'background-color': `rgba(${hexToRGB(colors.light[900])}, 0.1)`
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
        'background-color': colors.light[800],
        'border-color': colors.light[800]
      }
    },
    focus: {
      primary: {
        ...focusShadow(colors.primary[500])
      },
      secondary: {
        ...focusShadow(colors.dark[900])
      },
      tertiary: {
        ...focusShadow(colors.dark[900])
      },
      'tertiary-negative': {
        ...focusShadow(colors.light[900])
      },
      quaternary: {
        ...focusShadow(colors.light[800])
      },
      'primary-warning': {
        ...focusShadow(colors.warning[500])
      },
      'secondary-warning': {
        ...focusShadow(colors.warning[500])
      },
      'primary-danger': {
        ...focusShadow(colors.danger[500])
      },
      'secondary-danger': {
        ...focusShadow(colors.danger[500])
      }
    },
    active: {
      primary: {
        'background-color': colors.primary[700],
        'border-color': colors.primary[700]
      },
      secondary: {
        'background-color': colors.dark[200],
        'border-color': colors.dark[200]
      },
      tertiary: {
        'background-color': `rgba(${hexToRGB(colors.dark[900])}, 0.4)`
      },
      'tertiary-negative': {
        'background-color': `rgba(${hexToRGB(colors.light[900])}, 0.4)`
      },
      'primary-warning': {
        'background-color': colors.warning[700],
        'border-color': colors.warning[700]
      },
      'secondary-warning': {
        color: colors.warning[700],
        'border-color': colors.warning[700]
      },
      'primary-danger': {
        'background-color': colors.danger[700],
        'border-color': colors.danger[700]
      },
      'secondary-danger': {
        color: colors.danger[700],
        'border-color': colors.danger[700]
      },
      quaternary: {
        'background-color': colors.light[700],
        'border-color': colors.light[700]
      }
    },
    disabled: {
      ...defaults,
      color: colors.nude[700],
      'background-color': colors.nude[500],
      'border-color': colors.nude[500],
      '&:focus': {
        ...focusShadow(colors.nude[500])
      }
    },
    sizes: {
      xs: {
        height: toRem(20),
        padding: `0 ${space.xxs}`
      },
      sm: {
        height: toRem(34),
        padding: `0 ${space.md}`,
        'font-size': toRem()
      },
      md: {
        height: toRem(42),
        padding: `0 ${space.lg}`,
        'font-size': fontSizes.body3
      },
      lg: {
        height: toRem(49),
        padding: `0 ${space.xl}`,
        'font-size': fontSizes.body2
      },
      xl: {
        height: toRem(70),
        padding: `0 ${space.xxl}`,
        'font-size': fontSizes.body1
      }
    }
  }
}
