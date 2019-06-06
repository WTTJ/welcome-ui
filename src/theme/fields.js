export const getFields = theme => {
  const { boxShadows, colors, fontSizes, fontWeights, radii, toRem } = theme

  const defaults = {
    color: colors.nude[800],
    'font-size': fontSizes.body3,
    'font-weight': fontWeights.regular,
    'background-color': colors.light[200],
    'border-color': colors.nude[200],
    'border-width': '1px',
    'border-style': 'solid',
    'border-radius': radii.sm
  }

  return {
    default: defaults,
    disabled: {
      ...defaults,
      'background-color': colors.light[500],
      'pointer-events': 'none'
    },
    focused: {
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
    label: {
      color: colors.nude[800],
      'font-size': fontSizes.body3,
      'font-weight': fontWeights.medium,
      'min-height': '1.4em'
    },
    checkablelabel: {
      default: {
        'font-weight': fontWeights.regular
      },
      checked: {
        color: colors.dark[200],
        'font-weight': fontWeights.bold
      }
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
    fileupload: {
      ...defaults,
      'border-style': 'dashed',
      height: toRem(300)
    },
    radiotabs: {
      default: {
        ...defaults
      },
      checked: {
        color: colors.dark[200],
        'font-weight': fontWeights.bold,
        'background-color': colors.light[200],
        'border-color': colors.primary[500],
        '&:hover': {
          'box-shadow': 'none'
        }
      },
      hover: {
        'background-color': colors.light[200],
        'box-shadow': boxShadows.sm
      }
    },
    select: {
      focused: {
        'background-color': colors.light[500]
      },
      selected: {
        color: colors.dark[200],
        'font-weight': fontWeights.bold,
        'background-color': colors.nude[200]
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
      },
      checkedDisabled: {
        'background-color': colors.secondary[200],
        '&::after': {
          'border-color': colors.secondary[200]
        }
      }
    },
    mde: {
      icons: {
        'font-size': fontSizes.body3,
        color: colors.secondary[500],
        '&.active': {
          color: colors.primary[200],
          'border-color': colors.nude[300]
        },
        '&:hover': {
          color: colors.primary[200],
          'border-color': colors.nude[300]
        }
      }
    }
  }
}
