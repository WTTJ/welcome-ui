import { defineSlotRecipe } from '@pandacss/dev'

export const avatar = defineSlotRecipe({
  className: 'wui-avatar',
  description: 'welcome-ui avatar',
  jsx: [/Avatar.*/],
  slots: ['root', 'text'],
  base: {
    root: {
      flexShrink: '0',
    },
    text: {
      color: 'light-900',
      fontWeight: 'bold',
      margin: '0',
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          height: '20px',
          width: '20px',
        },
        text: {
          fontSize: '0.5rem',
        },
      },
      md: {
        root: {
          height: '30px',
          width: '30px',
        },
        text: {
          fontSize: '0.75rem',
        },
      },
      lg: {
        root: {
          height: '40px',
          width: '40px',
        },
        text: {
          fontSize: '1rem',
        },
      },
      xl: {
        root: {
          height: '50px',
          width: '50px',
        },
        text: {
          fontSize: '1.25rem',
        },
      },
      xxl: {
        root: {
          height: '60px',
          width: '60px',
        },
        text: {
          fontSize: '1.5rem',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
