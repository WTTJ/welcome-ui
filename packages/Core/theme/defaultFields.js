export const getDefaultFields = theme => {
  const { colors, fontSizes, fontWeights, space, toRem } = theme

  return {
    default: {
      color: colors.nude[800],
      'font-size': fontSizes.body3,
      'line-height': toRem(16),
      'font-weight': fontWeights.regular,
      'background-color': colors.light[900],
      'border-color': colors.nude[200],
      'border-width': '1px',
      'border-style': 'solid',
      outline: 'none'
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
    disabled: {
      'background-color': colors.nude[500],
      color: colors.nude[700],
      cursor: 'not-allowed'
    },
    placeholder: {
      color: colors.nude[600]
    },
    focused: {
      'border-color': colors.primary[500]
    }
  }
}
