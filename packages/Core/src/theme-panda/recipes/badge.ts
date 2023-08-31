import { defineRecipe } from '@pandacss/dev'

export const badge = defineRecipe({
  className: 'wui-badge',
  description: 'welcome-ui badge',
  jsx: [/Badge.*/],
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'xs',
    lineHeight: 'xs',
    fontWeight: 'medium',
    fontFamily: 'subtitle-sm',
  },
  variants: {
    variant: {
      default: {
        color: 'nude-700',
        backgroundColor: 'nude-200',
        _disabled: {
          color: 'nude-400',
          backgroundColor: 'nude-100',
        },
      },
      primary: {
        color: 'dark-900',
        backgroundColor: 'primary-500',
        _disabled: {
          color: 'primary-800',
          backgroundColor: 'primary-600',
        },
      },
    },
    size: {
      sm: {
        padding: 'xxs',
        height: 16,
        '&[data-length="1"]': {
          width: 16,
        },
      },
      md: {
        padding: 'xs',
        height: 20,
        '&[data-length="1"]': {
          width: 20,
        },
      },
    },
    shape: {
      square: {
        borderRadius: 0,
      },
      circle: {
        borderRadius: 14,
      },
    },
    disabled: {
      true: {},
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    shape: 'circle',
  },
})
