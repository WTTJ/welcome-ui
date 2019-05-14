const defaultFontSize = 16

export const toEm = px => `${px / defaultFontSize}em`
export const toRem = px => `${px / defaultFontSize}rem`

const getFontSizes = unit => {
  const convert = unit === 'em' ? toEm : toRem
  return {
    html: `${defaultFontSize}px`,
    body: convert(16),
    xs: convert(11),
    sm: convert(13),
    default: convert(14),
    md: convert(16),
    mdlg: convert(18),
    lg: convert(19),
    xl: convert(22),
    xxl: convert(32),
    xxxl: convert(50)
  }
}

export const fontSizes = getFontSizes('rem')
export const fontSizesEm = getFontSizes('em')
