import { defineRecipe } from '@pandacss/dev'

export const text = defineRecipe({
  className: 'wui-text',
  description: 'Welcome UI Text',
  jsx: [/Text.*/],
  base: {
    display: 'block',
  },
  variants: {
    variant: {
      h0: {
        textStyle: 'h1',
        color: 'dark-900',
        '@media (min-width: token(breakpoints.lg))': {
          textStyle: 'h0',
        },
      },
      h1: {
        textStyle: 'h2',
        color: 'dark-900',
        '@media (min-width: token(breakpoints.lg))': {
          textStyle: 'h1',
        },
      },
      h2: {
        textStyle: 'h3',
        color: 'dark-900',
        '@media (min-width: token(breakpoints.lg))': {
          textStyle: 'h2',
        },
      },
      h3: {
        textStyle: 'h4',
        color: 'dark-900',
        '@media (min-width: token(breakpoints.lg))': {
          textStyle: 'h3',
        },
      },
      h4: {
        textStyle: 'h5',
        color: 'dark-900',
        '@media (min-width: token(breakpoints.lg))': {
          textStyle: 'h4',
        },
      },
      h5: {
        textStyle: 'h6',
        color: 'dark-900',
        '@media (min-width: token(breakpoints.lg))': {
          textStyle: 'h5',
        },
      },
      h6: {
        textStyle: 'h6',
        color: 'dark-900',
      },
      lg: {
        textStyle: 'lg',
      },
      md: {
        textStyle: 'md',
      },
      sm: {
        textStyle: 'sm',
      },
      xs: {
        textStyle: 'xs',
      },
      'subtitle-md': {
        textStyle: 'subtitle-md',
      },
      'subtitle-sm': {
        textStyle: 'subtitle-sm',
      },
    },
  },
  defaultVariants: {
    variant: 'md',
  },
})
