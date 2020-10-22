export const getPopovers = theme => {
  const { borderWidths, colors, space, texts, toRem } = theme

  return {
    default: {
      backgroundColor: colors.dark[800],
      color: colors.light[900],
      borderWidth: 0,
      borderTopColor: colors.dark[800],
      borderTopWidth: borderWidths.sm,
      borderTopStyle: 'solid',
      maxWidth: toRem(700),
      zIndex: 1
    },
    content: {
      display: 'block',
      padding: space.md
    },
    title: {
      ...texts.h6,
      padding: `${space.md} ${space.md} ${space.xs}`,
      borderBottomColor: colors.dark[200],
      borderBottomWidth: borderWidths.sm,
      borderBottomStyle: 'solid'
    }
  }
}
