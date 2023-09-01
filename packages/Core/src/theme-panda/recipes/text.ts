import { defineRecipe } from '@pandacss/dev'

export const text = defineRecipe({
  className: 'wui-text',
  description: 'welcome-ui text',
  jsx: [/Text.*/, /Title.*/],
  base: {
    display: 'block',
  },
  variants: {
    variant: {
      h0: {
        color: 'dark-900',
        textStyle: 'h1',
        '@media (min-width: 936px)': {
          textStyle: 'h0',
        },
      },
      h1: {
        color: 'dark-900',
        textStyle: 'h2',
        '@media (min-width: 936px)': {
          textStyle: 'h1',
        },
      },
      h2: {
        color: 'dark-900',
        textStyle: 'h3',
        '@media (min-width: 936px)': {
          textStyle: 'h2',
        },
      },
      h3: {
        color: 'dark-900',
        textStyle: 'h4',
        '@media (min-width: 936px)': {
          textStyle: 'h3',
        },
      },
      h4: {
        color: 'dark-900',
        textStyle: 'h5',
        '@media (min-width: 936px)': {
          textStyle: 'h4',
        },
      },
      h5: {
        color: 'dark-900',
        textStyle: 'h6',
        '@media (min-width: 936px)': {
          textStyle: 'h5',
        },
      },
      h6: {
        color: 'dark-900',
        textStyle: 'h6',
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
