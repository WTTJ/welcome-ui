import { defineRecipe } from '@pandacss/dev'

export const button = defineRecipe({
  className: 'wui-button',
  description: 'welcome-ui button',
  jsx: [/Button.*/],
  base: {
    fontSize: 'sm',
    color: 'light-900',
    fontWeight: 'bold',
    letterSpacing: 0,
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    textDecoration: 'none',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    outline: 'none !important' /* important for firefox */,
    border: 'sm',
    appearance: 'none',
    overflow: 'hidden',
    transition: 'all',
    transitionDuration: 'medium',
    transitionTimingFunction: 'medium',
    _active: {
      boxShadow: 'none',
    },
    '& > *:not(:only-child):not(:last-child)': {
      marginRight: 'sm',
    },
  },
  variants: {
    variant: {
      primary: {
        color: 'dark-900',
        backgroundColor: 'primary-500',
        borderColor: 'primary-500',
        _hover: {
          backgroundColor: 'primary-200',
          borderColor: 'primary-200',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.primary-200)',
        },
        _active: {
          backgroundColor: 'primary-100',
          borderColor: 'primary-100',
        },
      },
      secondary: {
        backgroundColor: 'dark-900',
        borderColor: 'dark-900',
        _hover: {
          backgroundColor: 'dark-700',
          borderColor: 'transparent',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.dark-500)',
        },
        _active: {
          backgroundColor: 'dark-200',
          borderColor: 'dark-200',
        },
      },
      tertiary: {
        color: 'dark-900',
        backgroundColor: 'transparent',
        borderColor: 'dark-900',
        _hover: {
          backgroundColor: 'dark-100',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.dark-500)',
        },
        _active: {
          backgroundColor: 'dark-400',
        },
      },
      'primary-success': {
        backgroundColor: 'success-500',
        borderColor: 'success-500',
        _hover: {
          backgroundColor: 'success-400',
          borderColor: 'success-400',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.success-400)',
        },
        _active: {
          backgroundColor: 'success-300',
          borderColor: 'success-300',
        },
      },
      'secondary-success': {
        color: 'success-500',
        borderColor: 'success-500',
        backgroundColor: 'light-900',
        _hover: {
          backgroundColor: 'success-100',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.success-200)',
        },
        _active: {
          backgroundColor: 'success-100',
        },
      },
      'primary-warning': {
        backgroundColor: 'warning-500',
        borderColor: 'warning-500',
        _hover: {
          backgroundColor: 'warning-400',
          borderColor: 'warning-400',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.warning-400)',
        },
        _active: {
          backgroundColor: 'warning-300',
          borderColor: 'warning-300',
        },
      },
      'secondary-warning': {
        color: 'warning-500',
        backgroundColor: 'light-900',
        borderColor: 'warning-500',
        _hover: {
          backgroundColor: 'warning-100',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.warning-200)',
        },
        _active: {
          backgroundColor: 'warning-100',
        },
      },
      'primary-danger': {
        backgroundColor: 'danger-500',
        borderColor: 'danger-500',
        _hover: {
          backgroundColor: 'danger-400',
          borderColor: 'danger-400',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.danger-400)',
        },
        _active: {
          backgroundColor: 'danger-300',
          borderColor: 'danger-300',
        },
      },
      'secondary-danger': {
        color: 'danger-500',
        backgroundColor: 'light-900',
        borderColor: 'danger-500',
        _hover: {
          backgroundColor: 'danger-100',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.danger-200)',
        },
        _active: {
          backgroundColor: 'danger-100',
        },
      },
      'primary-info': {
        backgroundColor: 'info-500',
        borderColor: 'info-500',
        _hover: {
          backgroundColor: 'info-400',
          borderColor: 'info-400',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.info-400)',
        },
        _active: {
          backgroundColor: 'info-300',
          borderColor: 'info-300',
        },
      },
      'secondary-info': {
        color: 'info-500',
        backgroundColor: 'light-900',
        borderColor: 'info-500',
        _hover: {
          backgroundColor: 'info-100',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.info-200)',
        },
        _active: {
          backgroundColor: 'info-100',
        },
      },
      ghost: {
        color: 'dark-900',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        _hover: {
          backgroundColor: 'border',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.dark-100)',
        },
        _active: {
          backgroundColor: 'dark-400',
        },
      },
    },
    size: {
      xxs: {
        height: '16px',
        paddingY: 'xxs',
        paddingX: 'xs',
        '& > svg.wui-icon, & > i.wui-icon-font': {
          fontWeight: 'initial',
          '&:only-child': {
            width: '16px',
            height: '16px',
            fontSize: '16px',
          },
          '&:not(:only-child)': {
            width: '12px',
            height: '12px',
            fontSize: '12px',
          },
        },
      },
      xs: {
        height: '24px',
        paddingY: 'xs',
        paddingX: 'sm',
        '& > svg.wui-icon, & > i.wui-icon-font': {
          fontWeight: 'initial',
          '&:only-child': {
            width: '16px',
            height: '16px',
            fontSize: '16px',
          },
          '&:not(:only-child)': {
            width: '12px',
            height: '12px',
            fontSize: '12px',
          },
        },
      },
      sm: {
        height: '32px',
        paddingY: 'sm',
        paddingX: 'md',
        '& > svg.wui-icon, & > i.wui-icon-font': {
          fontWeight: 'initial',
          '&:only-child': {
            width: '16px',
            height: '16px',
            fontSize: '16px',
          },
          '&:not(:only-child)': {
            width: '16px',
            height: '16px',
            fontSize: '16px',
          },
        },
      },
      md: {
        fontSize: 'sm',
        fontWeight: 'bold',
        height: '40px',
        paddingY: 'sm',
        paddingX: 'lg',
        '& > svg.wui-icon, & > i.wui-icon-font': {
          fontWeight: 'initial',
          '&:only-child': {
            width: '16px',
            height: '16px',
            fontSize: '16px',
          },
          '&:not(:only-child)': {
            width: '16px',
            height: '16px',
            fontSize: '16px',
          },
        },
      },
      lg: {
        fontSize: 'sm',
        fontWeight: 'bold',
        height: '48px',
        paddingY: 'md',
        paddingX: 'xl',
        '& > svg.wui-icon, & > i.wui-icon-font': {
          fontWeight: 'initial',
          '&:only-child': {
            width: '24px',
            height: '24px',
            fontSize: '24px',
          },
          '&:not(:only-child)': {
            width: '16px',
            height: '16px',
            fontSize: '16px',
          },
        },
      },
    },
    shape: {
      square: {
        borderRadius: 0,
      },
      circle: {
        borderRadius: '50%',
        padding: 0,
      },
    },
    disabled: {
      true: {
        pointerEvents: 'none',
        cursor: 'not-allowed',
        color: 'nude-700',
        backgroundColor: 'nude-400',
        borderColor: 'nude-400',
        _focus: {
          boxShadow: '0 0 0 2px token(colors.nude-200)',
        },
      },
    },
  },
  compoundVariants: [
    {
      size: 'xxs',
      shape: 'circle',
      css: {
        width: '16px',
        height: '16px',
      },
    },
    {
      size: 'xs',
      shape: 'circle',
      css: {
        width: '24px',
        height: '24px',
      },
    },
    {
      size: 'sm',
      shape: 'circle',
      css: {
        width: '32px',
        height: '32px',
      },
    },
    {
      size: 'md',
      shape: 'circle',
      css: {
        width: '40px',
        height: '40px',
      },
    },
    {
      size: 'lg',
      shape: 'circle',
      css: {
        width: '48px',
        height: '48px',
      },
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
