export const getModals = theme => {
  const { borderWidths, colors, space, toRem } = theme
  return {
    backdrop: {
      backgroundColor: colors.overlay,
      zIndex: 999
    },
    default: {
      zIndex: 999
    },
    footer: {
      borderTopColor: colors.light[800],
      borderTopStyle: 'solid',
      borderTopWidth: borderWidths.sm,
      padding: `${space.lg} ${space.xxl}`
    },
    title: {
      borderBottomColor: colors.light[800],
      borderBottomStyle: 'solid',
      borderBottomWidth: borderWidths.sm,
      padding: `${space.lg} ${space.xxl}`,
      /** space of close button */
      paddingRight: toRem(50)
    },
    gutter: toRem(32),
    sizes: {
      sm: {
        width: toRem(400)
      },
      md: {
        width: toRem(550)
      },
      lg: {
        width: toRem(680)
      },
      auto: {}
    },
    cover: {}
  }
}
