import { defineTokens } from '@pandacss/dev'

export const fonts = defineTokens.fonts({
  texts: { value: 'var(--font-work-sans), sans-serif' },
  headings: { value: 'var(--font-welcome-font), sans-serif' },
  icons: { value: 'var(--font-welcome-icon-font)' },
})
