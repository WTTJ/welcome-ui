export const getFontSizes = (unit, theme) => {
  const { defaultFontSize, toEm, toRem } = theme
  const convert = unit === 'em' ? toEm : toRem
  return {
    html: `${defaultFontSize}px`,
    h1: convert(36),
    h2: convert(28),
    h3: convert(22),
    h4: convert(18),
    body1: convert(17),
    body2: convert(15),
    body3: convert(13),
    body4: convert(11),
    button: convert(11),
    subtitle1: convert(13),
    subtitle2: convert(11),
    meta1: convert(13),
    meta2: convert(11)
  }
}
