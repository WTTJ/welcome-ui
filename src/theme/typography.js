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
    h1: convert(36, defaultFontSize),
    h2: convert(28, defaultFontSize),
    h3: convert(22, defaultFontSize),
    h4: convert(18, defaultFontSize),
    body1: convert(17, defaultFontSize),
    body2: convert(15, defaultFontSize),
    body3: convert(13, defaultFontSize),
    body4: convert(11, defaultFontSize),
    button: convert(11, defaultFontSize),
    subtitle1: convert(13, defaultFontSize),
    subtitle2: convert(11, defaultFontSize),
    meta1: convert(13, defaultFontSize),
    meta2: convert(11, defaultFontSize)
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
      'font-size': theme.fontSize.body3,
      'font-weight': theme.fontWeight.regular
    },
    label: {
      ...defaults,
      'font-size': theme.fontSize.body3,
      'font-weight': theme.fontWeight.medium
    },
    input: {
      ...defaults,
      'font-size': theme.fontSize.body3,
      'font-weight': theme.fontWeight.regular
    },
    badge: {
      ...defaults,
      'font-size': theme.fontSize.body3,
      'font-weight': theme.fontWeight.bold
    },
    button: {
      ...defaults,
      'font-size': theme.fontSize.button,
      'font-weight': theme.fontWeight.bold,
      'text-transform': 'uppercase',
      'letter-spacing': letterSpacings.md
    }
  }
}
