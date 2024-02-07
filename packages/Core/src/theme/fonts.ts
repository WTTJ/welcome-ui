import { WuiTheme } from './types'

type FontFace = {
  display?: FontDisplay
  extensions?: string[]
  isVariable?: boolean
  overrides?: Record<string, string>
  stretch?: string
  style?: string
  uniCodeRange?: string
  url: string
  weight?: string
}

export type ThemeFontFaces = {
  'welcome-font-fallback': FontFace[]
  'welcome-font': FontFace[]
  'welcome-icon-font': FontFace[]
  'work-sans': FontFace[]
}

export const fontFaces = (theme: WuiTheme): ThemeFontFaces => ({
  'welcome-font-fallback': [
    {
      display: 'auto',
      extensions: [],
      overrides: { 'size-adjust': '94%' },
      url: 'local("Arial Black")',
    },
  ],
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
