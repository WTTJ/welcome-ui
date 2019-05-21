export const getFields = theme => {
  const { boxShadows, colors, fontSizes, fontWeights, radii, texts, toRem } = theme
  const defaults = {
    color: colors.nude[800],
    'background-color': colors.light[200],
    'border-color': colors.nude[200],
    'border-width': '1px',
    'border-style': 'solid',
    'border-radius': radii.sm,
    ...texts.input
  }

  return {
    default: defaults,
    disabled: {
      ...defaults,
      'background-color': colors.light[500],
      'pointer-events': 'none'
    },
    focus: {
      ...defaults,
      'background-color': colors.light[100],
      'border-color': colors.primary[500]
    },
    placeholder: {
      color: colors.nude[600]
    },
    hint: {
      'font-size': fontSizes.body3,
      'font-weight': fontWeights.regular
    },
    checkboxes: {
      default: {
        width: toRem(15),
        height: toRem(15)
      },
      checked: {
        'background-color': colors.primary[500],
        'border-color': colors.primary[500]
      }
    },
    filedrop: {
      ...defaults,
      height: toRem(300)
    },
    radiotabs: {
      default: {
        ...defaults
      },
      checked: {
        color: 'transparent',
        'background-color': colors.light[200],
        'border-color': colors.primary[500],
        '-webkit-text-stroke-color': colors.dark[200],
        '-webkit-text-fill-color': colors.dark[200],
        '&:hover': {
          'box-shadow': 'none'
        }
      },
      hover: {
        'background-color': colors.light[200],
        'box-shadow': boxShadows.sm
      }
    },
    textarea: {
      'min-height': '8rem'
    },
    toggles: {
      default: {
        width: toRem(22),
        'background-color': colors.nude[200],
        '&::after': {
          ...defaults,
          'background-color': colors.light[200],
          'border-color': colors.nude[400]
        }
      },
      checked: {
        'background-color': colors.primary[500],
        '&::after': {
          'border-color': colors.primary[500]
        }
      },
      disabled: {
        'background-color': colors.light[700],
        '&::after': {
          'border-color': colors.nude[200]
        }
      }
    }
  }
}
