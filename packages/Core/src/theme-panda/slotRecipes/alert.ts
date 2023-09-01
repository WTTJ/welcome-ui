import { defineSlotRecipe } from '@pandacss/dev'

export const alert = defineSlotRecipe({
  className: 'wui-alert',
  description: 'wui alert',
  jsx: [/Alert.*/],
  slots: ['root', 'title'],
  base: {
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      fontSize: 'sm',
      border: 'sm',
      borderRadius: 'md',
      color: 'dark-700',
      backgroundColor: 'light-900',
      borderColor: 'dark-100',
    },
    title: {
      margin: 0,
      marginBottom: 'sm',
      color: 'dark-900',
      '&:only-child': {
        marginBottom: '0',
      },
    },
  },
  variants: {
    variant: {
      default: {},
      error: {
        root: {
          backgroundColor: 'danger-100',
          borderColor: 'danger-500',
        },
      },
      warning: {
        root: {
          backgroundColor: 'warning-100',
          borderColor: 'warning-500',
        },
      },
      info: {
        root: {
          backgroundColor: 'info-100',
          borderColor: 'info-500',
        },
      },
      success: {
        root: {
          backgroundColor: 'success-100',
          borderColor: 'success-500',
        },
      },
    },
    size: {
      sm: {
        root: {
          padding: 'lg',
        },
      },
      md: {
        root: {
          padding: 'xl',
        },
      },
    },
    isFullWidth: {
      true: {
        root: {
          maxWidth: '100%',
        },
      },
      false: {
        root: {
          maxWidth: 'max-content',
        },
      },
    },
  },
  defaultVariants: {
    size: 'sm',
    variant: 'default',
    isFullWidth: false,
  },
})
