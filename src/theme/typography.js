export const toEm = (px, defaultFontSize) => `${px / defaultFontSize}em`
export const toRem = (px, defaultFontSize) => `${px / defaultFontSize}rem`

export const fontWeights = {
  light: '400',
  regular: '400',
  medium: '500',
  bold: '600',
  black: '700'
}

export const getFontSizes = (unit, defaultFontSize) => {
  const convert = unit === 'em' ? toEm : toRem
  return {
    html: `${defaultFontSize}px`,
    body: convert(16, defaultFontSize),
    xs: convert(11, defaultFontSize),
    sm: convert(13, defaultFontSize),
    default: convert(14, defaultFontSize),
    md: convert(16, defaultFontSize),
    mdlg: convert(18, defaultFontSize),
    lg: convert(19, defaultFontSize),
    xl: convert(22, defaultFontSize),
    xxl: convert(32, defaultFontSize),
    xxxl: convert(50, defaultFontSize)
  }
}

export const letterSpacings = {
  sm: '0.5px',
  md: '1px',
  lg: '2px'
}

const defaults = {
  'font-family': 'inherit',
  'font-size': 'inherit',
  'font-weight': 'inherit',
  'text-transform': 'none',
  'letter-spacing': 'normal'
}

export const getTypography = theme => {
  return {
    hint: {
      ...defaults,
      'font-size': theme.fontSize.sm,
      'font-weight': theme.fontWeight.regular
    },
    label: {
      ...defaults,
      'font-size': theme.fontSize.sm,
      'font-weight': theme.fontWeight.medium
    },
    input: {
      ...defaults,
      'font-size': theme.fontSize.sm,
      'font-weight': theme.fontWeight.regular
    },
    badge: {
      ...defaults,
      'font-size': theme.fontSize.sm,
      'font-weight': theme.fontWeight.bold
    },
    button: {
      ...defaults,
      'font-size': theme.fontSize.xs,
      'font-weight': theme.fontWeight.bold,
      'text-transform': 'uppercase',
      'letter-spacing': letterSpacings.md
    }
  }
}
