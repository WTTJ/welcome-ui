import { defineRecipe } from '@pandacss/dev'

export const icon = defineRecipe({
  className: 'wui-icon',
  description: 'welcome-ui icon',
  jsx: [/Icon.*/],
  base: {
    '&[data-stroked="true"]': {
      '& g, & path': {
        stroke: 'inherit',
        fill: 'none',
      },
    },
    '&[data-stroked="false"]': {
      '& g, & path': {
        stroke: 'none',
      },
    },
  },
  variants: {
    size: {
      xs: {
        height: '12px',
        width: '12px',
      },
      sm: {
        height: '16px',
        width: '16px',
      },
      md: {
        height: '24px',
        width: '24px',
      },
      lg: {
        height: '32px',
        width: '32px',
      },
      xl: {
        height: '48px',
        width: '48px',
      },
      xxl: {
        height: '64px',
        width: '64px',
      },
    },
  },
})
