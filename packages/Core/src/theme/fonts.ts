import { WuiTheme } from './types'

type FontFaceExtension = 'woff' | 'woff2'

type FontFace = {
  url: string
  weight?: string
  style?: 'italic'
  display: 'swap' | 'block'
  extensions: FontFaceExtension[]
}

export type ThemeFontFaces = {
  'welcome-font': FontFace[]
  'welcome-icon-font': FontFace[]
  'Work Sans': FontFace[]
}

export const fontFaces = (theme: WuiTheme): ThemeFontFaces => ({
  'welcome-font': [
    {
      url: `${theme.fontsUrl}/fonts/welcome-font-regular`,
      weight: '400',
      display: 'swap',
      extensions: ['woff2', 'woff'],
    },
    {
      url: `${theme.fontsUrl}/fonts/welcome-font-medium`,
      weight: '500',
      display: 'swap',
      extensions: ['woff2', 'woff'],
    },
    {
      url: `${theme.fontsUrl}/fonts/welcome-font-bold`,
      weight: '600',
      display: 'swap',
      extensions: ['woff2', 'woff'],
    },
    {
      url: `${theme.fontsUrl}/fonts/welcome-font-regular-italic`,
      weight: '400',
      style: 'italic',
      display: 'swap',
      extensions: ['woff2', 'woff'],
    },
    {
      url: `${theme.fontsUrl}/fonts/welcome-font-medium-italic`,
      weight: '500',
      style: 'italic',
      display: 'swap',
      extensions: ['woff2', 'woff'],
    },
    {
      url: `${theme.fontsUrl}/fonts/welcome-font-bold-italic`,
      weight: '600',
      style: 'italic',
      display: 'swap',
      extensions: ['woff2', 'woff'],
    },
  ],
  'welcome-icon-font': [
    {
      url: `${theme.fontsUrl}/fonts/icon-font/__ICON_FONT_HASH__/welcome-icon-font`,
      display: 'block',
      extensions: ['woff2', 'woff'],
    },
  ],
  'Work Sans': [
    {
      url: `${theme.fontsUrl}/fonts/work-sans-variable`,
      display: 'block',
      extensions: ['woff2', 'woff'],
    },
  ],
})
