export const getFields = theme => {
  const { colors, fontSizes, fontWeights, radii, space, toRem } = theme

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
    fieldset: {
      'border-width': '0'
    }
  }
}
