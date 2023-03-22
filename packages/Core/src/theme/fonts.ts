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
  'welcome-icon-font-2': FontFace[]
}

export const fontFaces: ThemeFontFaces = {
  'welcome-font': [
    {
      url: 'https://cdn.welcometothejungle.com/common/assets/fonts/welcome-font-regular',
      weight: '400',
      display: 'swap',
      extensions: ['woff2', 'woff'],
    },
    {
      url: 'https://cdn.welcometothejungle.com/common/assets/fonts/welcome-font-medium',
      weight: '500',
      display: 'swap',
      extensions: ['woff2', 'woff'],
    },
    {
      url: 'https://cdn.welcometothejungle.com/common/assets/fonts/welcome-font-bold',
      weight: '600',
      display: 'swap',
      extensions: ['woff2', 'woff'],
    },
    {
      url: 'https://cdn.welcometothejungle.com/common/assets/fonts/welcome-font-regular-italic',
      weight: '400',
      style: 'italic',
      display: 'swap',
      extensions: ['woff2', 'woff'],
    },
    {
      url: 'https://cdn.welcometothejungle.com/common/assets/fonts/welcome-font-medium-italic',
      weight: '500',
      style: 'italic',
      display: 'swap',
      extensions: ['woff2', 'woff'],
    },
    {
      url: 'https://cdn.welcometothejungle.com/common/assets/fonts/welcome-font-bold-italic',
      weight: '600',
      style: 'italic',
      display: 'swap',
      extensions: ['woff2', 'woff'],
    },
  ],
  'welcome-icon-font-2': [
    {
      url: 'https://cdn.welcome-ui.com/fonts/__ICON_FONT_HASH__/welcome-icon-font-2',
      display: 'block',
      extensions: ['woff2', 'woff'],
    },
  ],
}
