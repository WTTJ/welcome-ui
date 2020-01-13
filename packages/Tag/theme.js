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
        padding: `${toRem(3.5)} ${space.xxs}`
      },
      md: {
        padding: `${toRem(4.5)} ${space.xxs}`
      },
      lg: {
        padding: `${toRem(6.5)} ${space.xs}`,
        'font-size': fontSizes.meta1
      }
    },
    shape: {
      square: {
        sm: {
          width: '1.6363em',
          height: '1.6363em'
        },
        md: {
          width: '1.82em',
          height: '1.82em'
        },
        lg: {
          width: '2em',
          height: '2em'
        }
      },
      circle: {
        sm: {
          width: '1.6363em',
          height: '1.6363em'
        },
        md: {
          width: '1.82em',
          height: '1.82em'
        },
        lg: {
          width: '2em',
          height: '2em'
        }
      }
    }
  }
}
