import { th } from '@xstyled/system'

import { variantColors } from '../utils/variants'

export const getVariantsTheme = theme => {
  return Object.entries(variantColors).reduce((acc, [variant, color]) => {
    if (variant !== '__filemeta') {
      acc[variant] = {
        'background-color': th(color)({ theme })
      }
    }
    return acc
  }, {})
}

export const getTags = theme => {
  const { colors, fontSizes, fontWeights, space, toRem } = theme

  return {
    default: {
      'font-size': fontSizes.meta2,
      'font-weight': fontWeights.medium,
      'line-height': '1em',
      color: colors.light[100]
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
