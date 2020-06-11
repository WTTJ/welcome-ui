export const getTables = theme => {
  const { borderWidths, colors, fontWeights, space } = theme

  return {
    th: {
      color: colors.light[100],
      fontWeight: fontWeights.medium,
      textAlign: 'left',
      borderBottomColor: colors.dark[900],
      borderBottomWidth: borderWidths.sm,
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      padding: space.xl
    },
    tr: {
      default: {
        borderBottomColor: colors.light[800],
        borderBottomWidth: borderWidths.sm,
        borderBottomStyle: 'solid'
      },
      error: {
        backgroundColor: colors.danger[100],
        color: colors.danger[700]
      },
      warning: {
        backgroundColor: colors.warning[100],
        color: colors.warning[700]
      },
      info: {
        backgroundColor: colors.info[100],
        color: colors.info[500]
      },
      success: {
        backgroundColor: colors.success[100],
        color: colors.success[500]
      },
      clickable: {
        cursor: 'pointer'
      }
    }
  }
}
