export const getTags = ({ colors, fontSizes, fontWeights, space, toRem }) => {
  const defaults = {
    'background-color': colors.light[500],
    color: colors.light[100]
  }

  return {
    default: {
      'font-size': fontSizes.meta2,
      'font-weight': fontWeights.medium,
      'line-height': '1em',
      ...defaults
    },
    variants: {
      default: { defaults, color: colors.nude[800] },
      light: { defaults, color: colors.nude[800] },
      dark: {
        'background-color': colors.nude[200],
        color: colors.light[100],
        '&:hover': {
          'background-color': colors.primary[500],
          color: colors.light[100]
        }
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
