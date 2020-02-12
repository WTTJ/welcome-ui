import { th } from '@xstyled/system'
import { VARIANTS } from '@welcome-ui/utils'

const TAG_VARIANTS = {
  blue: 'colors.sub.blue',
  dark: 'colors.dark.500',
  default: 'colors.nude.100',
  green: 'colors.sub.green',
  orange: 'colors.sub.orange',
  pink: 'colors.sub.pink',
  primary: 'colors.primary.500',
  purple: 'colors.sub.purple',
  red: 'colors.sub.red',
  secondary: 'colors.secondary.500',
  turquoize: 'colors.sub.turquoize',
  yellow: 'colors.sub.yellow',
  ...VARIANTS
}

export const getVariantsTheme = theme => {
  return Object.entries(TAG_VARIANTS).reduce((acc, [variant, color]) => {
    acc[variant] = { 'background-color': th(color)({ theme }) }
    return acc
  }, {})
}

export const getTags = theme => {
  const { colors, fontSizes, fontWeights, space, toRem } = theme

  const sizes = {
    sm: toRem(19),
    md: toRem(21),
    lg: toRem(27)
  }

  return {
    default: {
      'font-size': fontSizes.meta2,
      'font-weight': fontWeights.medium,
      color: colors.light[900]
    },
    variants: {
      ...getVariantsTheme(theme),
      default: {
        'background-color': colors.light[500],
        color: colors.nude[800]
      }
    },
    sizes: {
      sm: {
        padding: `0 ${space.xxs}`,
        height: sizes.sm
      },
      md: {
        padding: `0 ${space.xxs}`,
        height: sizes.md
      },
      lg: {
        padding: `0 ${space.xs}`,
        height: sizes.lg,
        'font-size': fontSizes.meta1
      }
    },
    shape: {
      sm: {
        width: sizes.sm,
        height: sizes.sm
      },
      md: {
        width: sizes.md,
        height: sizes.md
      },
      lg: {
        width: sizes.lg,
        height: sizes.lg
      }
    }
  }
}
