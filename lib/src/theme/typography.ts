import { CSSObject } from '@xstyled/styled-components'

import { Options, ThemeValues } from '.'

export type ThemeFontSizes = {
  [key: number]: string
  h0: string
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
  lg: string
  md: string
  sm: string
  'subtitle-md': string
  'subtitle-sm': string
  xs: string
}

export const getFontSizes = (unit: string, theme: ThemeValues): ThemeFontSizes => {
  const { toEm, toRem } = theme
  const convert = unit === 'em' ? toEm : toRem

  return {
    h0: convert(65),
    h1: convert(45),
    h2: convert(36),
    h3: convert(26),
    h4: convert(20),
    h5: convert(16),
    h6: convert(14),
    lg: convert(18),
    md: convert(16),
    sm: convert(14),
    'subtitle-md': convert(13),
    'subtitle-sm': convert(11),
    xs: convert(12),
  }
}

export type ThemeLineHeights = {
  [key: number]: number | string
  h0: number | string
  h1: number | string
  h2: number | string
  h3: number | string
  h4: number | string
  h5: number | string
  h6: number | string
  html: number | string
  lg: number | string
  md: number | string
  sm: number | string
  'subtitle-md': number | string
  'subtitle-sm': number | string
  xs: number | string
}

export const getLineHeights = ({
  defaultLineHeight,
  toRem,
}: {
  defaultLineHeight: number
  toRem: (value: number) => string
}): ThemeLineHeights => {
  return {
    html: defaultLineHeight,
    h0: toRem(72),
    h1: toRem(48),
    h2: toRem(40),
    h3: toRem(32),
    h4: toRem(24),
    h5: toRem(18),
    h6: toRem(16),
    lg: toRem(24),
    md: toRem(18),
    sm: toRem(18),
    xs: toRem(14),
    'subtitle-md': defaultLineHeight,
    'subtitle-sm': defaultLineHeight,
  }
}

export type ThemeFontWeights = {
  [key: string]: number
  bold: number
  medium: number
  regular: number
}

export const fontWeights: ThemeFontWeights = {
  regular: 400,
  medium: 500,
  bold: 600,
}

export type ThemeLetterSpacings = {
  [key: string]: string
  h0: string
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
  html: string
  lg: string
  md: string
  sm: string
  'subtitle-md': string
  'subtitle-sm': string
  xs: string
}

export const getLetterSpacings = ({
  defaultLetterSpacing,
  toRem,
}: {
  defaultLetterSpacing: string
  toRem: (value: number) => string
}): ThemeLetterSpacings => {
  return {
    html: defaultLetterSpacing,
    h0: toRem(-1.7),
    h1: toRem(-1.2),
    h2: toRem(-1),
    h3: toRem(-0.9),
    h4: toRem(-0.6),
    h5: toRem(-0.5),
    h6: toRem(-0.5),
    lg: defaultLetterSpacing,
    md: defaultLetterSpacing,
    sm: defaultLetterSpacing,
    xs: toRem(-0.2),
    'subtitle-md': toRem(-0.2),
    'subtitle-sm': toRem(-0.2),
  }
}

export type ThemeTextsFontWeights = {
  [key: string]: number
  h0: number
  h1: number
  h2: number
  h3: number
  h4: number
  h5: number
  h6: number
  lg: number
  md: number
  sm: number
  'subtitle-md': number
  'subtitle-sm': number
  xs: number
}

export const getTextsFontWeights = (theme: ThemeValues): ThemeTextsFontWeights => {
  const { fontWeights } = theme

  return {
    h0: fontWeights.bold,
    h1: fontWeights.bold,
    h2: fontWeights.bold,
    h3: fontWeights.bold,
    h4: fontWeights.bold,
    h5: fontWeights.bold,
    h6: fontWeights.bold,
    lg: fontWeights.regular,
    md: fontWeights.regular,
    sm: fontWeights.regular,
    'subtitle-md': fontWeights.bold,
    'subtitle-sm': fontWeights.medium,
    xs: fontWeights.regular,
  }
}

export type ThemeTextsFontFamily = {
  [key: string]: string
  h0: string
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
  'subtitle-md': string
  'subtitle-sm': string
}

export const getTextsFontFamily = (theme: ThemeValues): ThemeTextsFontFamily => {
  const { fonts } = theme

  return {
    h0: fonts.headings,
    h1: fonts.headings,
    h2: fonts.headings,
    h3: fonts.headings,
    h4: fonts.headings,
    h5: fonts.headings,
    h6: fonts.headings,
    'subtitle-md': fonts.headings,
    'subtitle-sm': fonts.headings,
  }
}

export type ThemeTextsTextTransform = {
  [key: string]: string
  'subtitle-md': string
  'subtitle-sm': string
}

export const getTextsTextTransform = (): ThemeTextsTextTransform => {
  return {
    'subtitle-md': 'uppercase',
    'subtitle-sm': 'uppercase',
  }
}

export type ThemeTextsFontColors = {
  [key: number]: string
  h0: string
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
}

export const getTextFontColors = (theme: ThemeValues): ThemeTextsFontColors => {
  const { colors } = theme

  return {
    h0: colors['neutral-90'],
    h1: colors['neutral-90'],
    h2: colors['neutral-90'],
    h3: colors['neutral-90'],
    h4: colors['neutral-90'],
    h5: colors['neutral-90'],
    h6: colors['neutral-90'],
  }
}

export type ThemeTexts = {
  [key: string]: Partial<{
    color: CSSObject['color']
    fontFamily: CSSObject['fontFamily']
    fontSize: CSSObject['fontSize']
    fontWeight: CSSObject['fontWeight']
    letterSpacing: CSSObject['letterSpacing']
    lineHeight: CSSObject['lineHeight']
    textTransform: CSSObject['textTransform']
  }>
}

export const getTexts = (theme: ThemeValues): ThemeTexts => {
  const {
    fontSizes,
    letterSpacings,
    lineHeights,
    textsFontColors,
    textsFontFamily,
    textsFontWeights,
    textsTextTransform,
  } = theme

  return Object.keys(fontSizes).reduce((acc, key) => {
    return {
      ...acc,
      [key]: {
        color: textsFontColors[key as keyof ThemeTextsFontColors],
        fontFamily: textsFontFamily[key as keyof ThemeTextsFontFamily] || undefined,
        fontWeight: textsFontWeights[key as keyof ThemeTextsFontFamily],
        fontSize: fontSizes[key as keyof ThemeFontSizes],
        lineHeight: lineHeights[key as keyof ThemeLineHeights] || lineHeights.lg,
        letterSpacing: letterSpacings[key as keyof ThemeLetterSpacings] || undefined,
        textTransform: textsTextTransform[key as keyof ThemeTextsTextTransform] || undefined,
      },
    }
  }, {})
}

export type ThemeFonts = {
  headings: string
  icons: string
  texts: string
}

export const getFonts = (
  defaultFontFamily: Options['defaultFontFamily'],
  headingFontFamily: Options['headingFontFamily'],
  iconFontFamily: Options['iconFontFamily']
): ThemeFonts => {
  return {
    texts: [defaultFontFamily, 'sans-serif'].join(', '),
    headings: [headingFontFamily, 'sans-serif'].join(', '),
    icons: iconFontFamily,
  }
}
