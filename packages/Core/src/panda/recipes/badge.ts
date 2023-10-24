import { defineRecipe } from '@pandacss/dev'

export const badge = defineRecipe({
  className: 'wui-badge',
  description: 'Welcome UI Badge',
  jsx: [/Badge.*/],
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'xs',
    lineHeight: 'xs',
    letterSpacing: 'xs',
    fontWeight: 'medium',
    fontFamily: 'headings',
  },
  variants: {
    variant: {
      default: {
        color: 'nude-700',
        backgroundColor: 'nude-200',
        '&[aria-disabled="true"]': {
          color: 'nude-400',
          backgroundColor: 'nude-100',
        },
      },
      primary: {
        color: 'dark-900',
        backgroundColor: 'primary-500',
        '&[aria-disabled="true"]': {
          color: 'primary-800',
          backgroundColor: 'primary-600',
        },
      },
    },
    size: {
      sm: {
        padding: 'xxs',
        height: '16px',
        '&[data-length="1"]': {
          width: '16px',
        },
      },
      md: {
        padding: 'xs',
        height: '20px',
        '&[data-length="1"]': {
          width: '20px',
        },
      },
    },
    shape: {
      square: {
        borderRadius: '0px',
      },
      circle: {
        borderRadius: '14px',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    shape: 'circle',
  },
})
