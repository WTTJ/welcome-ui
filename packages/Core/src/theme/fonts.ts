import { WuiTheme } from './types'

type FontFace = {
  display?: FontDisplay
  isVariable?: boolean
  stretch?: string
  style?: string
  url: string
  weight?: string
  extensions?: string[]
}

export type ThemeFontFaces = {
  'welcome-font': FontFace[]
  'welcome-icon-font': FontFace[]
  'Work Sans': FontFace[]
}

export const fontFaces = (theme: WuiTheme): ThemeFontFaces => ({
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
  'Work Sans': [
    {
      url: `${theme.fontsUrl}/work-sans-variable`,
      isVariable: true,
      stretch: '75% 125%',
      style: 'oblique 0deg 20deg',
      weight: '400 500 600',
    },
  ],
})
