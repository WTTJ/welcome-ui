import { ThemeValues } from '.'

type FontFace = {
  display?: FontDisplay
  extensions?: string[]
  isVariable?: boolean
  stretch?: string
  style?: string
  uniCodeRange?: string
  url: string
  weight?: string
}

export type ThemeFontFaces = {
  'welcome-font': FontFace[]
  'welcome-icon-font': FontFace[]
  'work-sans': FontFace[]
}

export const fontFaces = (theme: ThemeValues): ThemeFontFaces => ({
  'welcome-font': [
    {
      url: `${theme.fontsUrl}/welcome-font-regular`,
      weight: '400',
    },
    {
      url: `${theme.fontsUrl}/welcome-font-medium`,
      weight: '500',
    },
    {
      url: `${theme.fontsUrl}/welcome-font-bold`,
      weight: '600',
    },
    {
      url: `${theme.fontsUrl}/welcome-font-regular-italic`,
      style: 'italic',
      weight: '400',
    },
    {
      url: `${theme.fontsUrl}/welcome-font-medium-italic`,
      style: 'italic',
      weight: '500',
    },
    {
      url: `${theme.fontsUrl}/welcome-font-bold-italic`,
      style: 'italic',
      weight: '600',
    },
  ],
  'welcome-icon-font': [
    {
      url: `${theme.fontsUrl}/icon-font/__ICON_FONT_HASH__/welcome-icon-font`,
      display: 'block',
    },
  ],
  'work-sans': [
    {
      url: `${theme.fontsUrl}/work-sans-variable`,
      isVariable: true,
      stretch: '75% 125%',
      weight: '100 1000',
    },
  ],
})
