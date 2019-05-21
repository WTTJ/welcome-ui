export const getTooltips = ({ defaultFontSize, theme, toRem }) => ({
  background: theme.colors.dark[700],
  color: theme.colors.light[200],
  'border-radius': theme.radii.md,
  'max-width': toRem(200, defaultFontSize)
})
