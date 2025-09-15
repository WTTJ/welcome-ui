import { FONT_HASH } from '@old/IconsFont/_hash'

import type { ThemeValues } from '.'

export type ThemeFontFaces = {
  'welcome-font': FontFace[]
  'welcome-icon-font': FontFace[]
  'work-sans': FontFace[]
}

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
      style: 'italic',
      url: `${theme.fontsUrl}/welcome-font-regular-italic`,
      weight: '400',
    },
    {
      style: 'italic',
      url: `${theme.fontsUrl}/welcome-font-medium-italic`,
      weight: '500',
    },
    {
      style: 'italic',
      url: `${theme.fontsUrl}/welcome-font-bold-italic`,
      weight: '600',
    },
  ],
  'welcome-icon-font': [
    {
      display: 'block',
      url: `${theme.fontsUrl}/icon-font/${FONT_HASH}/welcome-icon-font`,
    },
  ],
  'work-sans': [
    {
      isVariable: true,
      stretch: '75% 125%',
      url: `${theme.fontsUrl}/work-sans-variable`,
      weight: '100 1000',
    },
  ],
})
