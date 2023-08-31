import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  html: {
    color: 'dark-500',
  },
  '::selection': {
    backgroundColor: 'primary-500',
    color: 'dark-900',
  },
})
