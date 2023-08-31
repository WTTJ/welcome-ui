import { defineTokens } from '@pandacss/dev'

export const fonts = defineTokens.fonts({
  texts: { value: 'Work Sans, sans-serif' },
  headings: { value: 'welcome-font, sans-serif' },
  icons: { value: 'welcome-icon-font-2' },
})

// h0: fonts.headings,
// h1: fonts.headings,
// h2: fonts.headings,
// h3: fonts.headings,
// h4: fonts.headings,
// h5: fonts.headings,
// h6: fonts.headings,
// 'subtitle-md': fonts.headings,
// 'subtitle-sm': fonts.headings,
// icon: fonts.icons,
