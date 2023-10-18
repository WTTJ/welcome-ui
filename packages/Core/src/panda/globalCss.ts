import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  html: {
    color: 'dark-500',
  },
  body: {
    fontFamily: 'texts',
    fontSmoothing: 'antialiased',
    lineHeight: 'html',
    letterSpacing: 'html',
  },
  '::selection': {
    backgroundColor: 'primary-500',
    color: 'dark-900',
  },
  '&[type="search"]': {
    appearance: 'none' /* for firefox */,
  },
})
