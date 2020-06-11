import { hexToRGB } from '@welcome-ui/utils'

const focusShadow = color => ({
  boxShadow: `0 0 0 3px rgba(${hexToRGB(color)}, 0.5)`
})

export const getButtons = theme => {
  const { colors, fontSizes, fontWeights, radii, space, toRem } = theme
  const defaults = {
    color: colors.light[900],
    fontSize: fontSizes.button,
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
    borderRadius: radii.md
  }

  return {
    primary: {
      ...defaults,
      backgroundColor: colors.primary[500],
      borderColor: colors.primary[500]
    },
    secondary: {
      ...defaults,
      backgroundColor: colors.dark[900],
      borderColor: colors.dark[900]
    },
    tertiary: {
      ...defaults,
      color: colors.dark[900],
      backgroundColor: 'transparent',
      borderColor: colors.dark[900]
    },
    'tertiary-negative': {
      ...defaults,
      backgroundColor: 'transparent',
      borderColor: colors.light[900]
    },
    'primary-warning': {
      ...defaults,
      backgroundColor: colors.warning[500],
      borderColor: colors.warning[500]
    },
    'secondary-warning': {
      ...defaults,
      color: colors.warning[500],
      backgroundColor: colors.light[900],
      borderColor: colors.warning[500]
    },
    'primary-danger': {
      ...defaults,
      backgroundColor: colors.danger[500],
      borderColor: colors.danger[500]
    },
    'secondary-danger': {
      ...defaults,
      color: colors.danger[500],
      backgroundColor: colors.light[900],
      borderColor: colors.danger[500]
    },
    quaternary: {
      ...defaults,
      color: colors.dark[900],
      backgroundColor: colors.light[900],
      borderColor: colors.light[900]
    },
    hover: {
      primary: {
        backgroundColor: colors.primary[200],
        borderColor: colors.primary[200]
      },
      secondary: {
        backgroundColor: colors.dark[500],
        borderColor: colors.dark[500]
      },
      tertiary: {
        backgroundColor: `rgba(${hexToRGB(colors.dark[900])}, 0.1)`
      },
      'tertiary-negative': {
        backgroundColor: `rgba(${hexToRGB(colors.light[900])}, 0.1)`
      },
      'primary-warning': {
        backgroundColor: colors.warning[200],
        borderColor: colors.warning[200]
      },
      'secondary-warning': {
        backgroundColor: colors.warning[100],
        borderColor: colors.warning[200]
      },
      'primary-danger': {
        backgroundColor: colors.danger[200],
        borderColor: colors.danger[200]
      },
      'secondary-danger': {
        backgroundColor: colors.danger[100],
        borderColor: colors.danger[200]
      },
      quaternary: {
        backgroundColor: colors.light[800],
        borderColor: colors.light[800]
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
        backgroundColor: colors.primary[700],
        borderColor: colors.primary[700]
      },
      secondary: {
        backgroundColor: colors.dark[200],
        borderColor: colors.dark[200]
      },
      tertiary: {
        backgroundColor: `rgba(${hexToRGB(colors.dark[900])}, 0.4)`
      },
      'tertiary-negative': {
        backgroundColor: `rgba(${hexToRGB(colors.light[900])}, 0.4)`
      },
      'primary-warning': {
        backgroundColor: colors.warning[700],
        borderColor: colors.warning[700]
      },
      'secondary-warning': {
        color: colors.warning[700],
        borderColor: colors.warning[700]
      },
      'primary-danger': {
        backgroundColor: colors.danger[700],
        borderColor: colors.danger[700]
      },
      'secondary-danger': {
        color: colors.danger[700],
        borderColor: colors.danger[700]
      },
      quaternary: {
        backgroundColor: colors.light[700],
        borderColor: colors.light[700]
      }
    },
    disabled: {
      ...defaults,
      color: colors.nude[700],
      backgroundColor: colors.nude[500],
      borderColor: colors.nude[500],
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
        fontSize: toRem()
      },
      md: {
        height: toRem(42),
        padding: `0 ${space.lg}`,
        fontSize: fontSizes.body3
      },
      lg: {
        height: toRem(49),
        padding: `0 ${space.xl}`,
        fontSize: fontSizes.body2
      },
      xl: {
        height: toRem(70),
        padding: `0 ${space.xxl}`,
        fontSize: fontSizes.body1
      }
    }
  }
}
