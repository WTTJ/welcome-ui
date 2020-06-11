export const getTooltips = theme => {
  const { colors, radii, toRem } = theme

  return {
    maxWidth: toRem(200),
    color: colors.light[700],
    background: colors.dark[700],
    borderRadius: radii.md
  }
}
