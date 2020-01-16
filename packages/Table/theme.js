export const getTables = theme => {
  const { borderWidths, colors, fontSizes, fontWeights } = theme

  return {
    th: {
      'font-size': fontSizes.body3,
      color: colors.nude[800],
      'font-weight': fontWeights.bold,
      'text-align': 'left'
    },
    td: {
      'border-top-color': colors.nude[200],
      'border-top-width': borderWidths.sm,
      'border-top-style': 'solid',
      'text-align': 'left'
    },
    tr: {
      default: {
        'font-size': fontSizes.body3,
        color: colors.nude[800]
      },
      error: {
        'background-color': colors.danger[100]
      },
      warning: {
        'background-color': colors.warning[100]
      },
      info: {
        'background-color': colors.info[100]
      },
      success: {
        'background-color': colors.success[100]
      },
      clickable: {
        cursor: 'pointer'
      }
    }
  }
}
