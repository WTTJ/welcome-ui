// To allow for line-height of text in label
const LINE_HEIGHT_ADJUSTMENTS = '0.15rem'

export const getFields = theme => {
  const { colors, fontSizes, fontWeights, radii, shadows, space, toRem } = theme

  const defaults = {
    color: colors.nude[800],
    'font-size': fontSizes.body3,
    'line-height': toRem(16),
    'font-weight': fontWeights.regular,
    'background-color': colors.light[900],
    'border-color': colors.nude[200],
    'border-width': '1px',
    'border-style': 'solid',
    'border-radius': radii.md,
    outline: 'none'
  }

  const checked = {
    'background-color': colors.primary[500],
    'border-color': colors.primary[500],
    color: colors.light[900],
    '&::after': {
      opacity: 1
    }
  }

  return {
    default: defaults,
    disabled: {
      'background-color': colors.light[500],
      color: colors.nude[600],
      cursor: 'not-allowed'
    },
    focused: {
      'border-color': colors.primary[500]
    },
    sizes: {
      sm: {
        height: '2rem',
        padding: `${space.xs} ${space.md}`
      },
      md: {
        height: '2.25rem',
        padding: `${space.sm} ${space.md}`
      },
      lg: {
        height: '2.5rem',
        padding: space.md
      }
    },
    placeholder: {
      color: colors.light[500]
    },
    hint: {
      color: colors.light[500],
      'font-size': fontSizes.body4,
      'font-weight': fontWeights.regular
    },
    checkablelabel: {
      default: {
        'font-weight': fontWeights.regular
      },
      checked: {
        color: colors.dark[200],
        '-webkit-text-stroke': '0.04em'
      }
    },
    radio: {
      default: {
        width: toRem(18),
        height: toRem(18),
        'border-radius': '50%'
      },
      checked: {
        ...checked,
        'border-radius': '50%'
      }
    },
    fileupload: {
      'border-style': 'dashed',
      'min-height': toRem(200)
    },
    mde: {
      icons: {
        'font-size': fontSizes.body3,
        // color: colors.secondary[500],
        '&.active': {
          color: colors.primary[200],
          'border-color': colors.nude[300]
        },
        '&:hover': {
          color: colors.primary[200],
          'border-color': colors.nude[300]
        }
      }
    },
    radiotabs: {
      default: {
        ...defaults
      },
      checked: {
        color: colors.dark[200],
        'background-color': colors.light[700],
        'border-color': colors.primary[500],
        '&:hover': {
          'box-shadow': 'none'
        }
      },
      hover: {
        'background-color': colors.light[700],
        'box-shadow': shadows.sm
      }
    },
    select: {
      default: {
        'max-height': toRem(155)
      },
      existing: {
        color: colors.nude[500],
        cursor: 'not-allowed'
      },
      highlighted: {
        'background-color': colors.light[500],
        cursor: 'default'
      },
      selectedAndHighlighted: {
        'background-image': 'linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08) 100%)'
      },
      selected: {
        color: colors.dark[200],
        'font-weight': fontWeights.bold,
        'background-color': colors.primary[100]
      }
    },
    textarea: {
      'min-height': '8rem'
    },
    toggles: {
      default: {
        width: toRem(22),
        'background-color': colors.nude[200],
        'border-color': colors.nude[200],
        'margin-top': `-${LINE_HEIGHT_ADJUSTMENTS}`,
        '&::after': {
          ...defaults,
          'background-color': colors.light[700],
          'border-color': colors.nude[400]
        }
      },
      checked: {
        'background-color': colors.primary[500],
        'border-color': colors.primary[500],
        '&::after': {
          'border-color': colors.primary[500]
        }
      },
      disabled: {
        'border-color': colors.light[200],
        'background-color': colors.light[200],
        '&::after': {
          'border-color': colors.nude[200]
        }
      },
      checkedDisabled: {
        // 'border-color': colors.secondary[200],
        // 'background-color': colors.secondary[200],
        // '&::after': {
        //   'border-color': colors.secondary[200]
        // }
      }
    },
    fieldset: {
      'border-width': '0'
    }
  }
}
