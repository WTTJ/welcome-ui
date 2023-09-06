import { defineSlotRecipe } from '@pandacss/dev'

export const tabs = defineSlotRecipe({
  className: 'wui-tabs',
  description: 'wui tabs',
  jsx: [/Tab.*/],
  slots: ['tab', 'list', 'panel', 'activeBar'],
  base: {
    tab: {
      border: '0',
      background: 'none',
      color: 'dark-700',
      fontWeight: 'medium',
      fontSize: 'md',
      textDecoration: 'none',
      lineHeight: 'md',
      display: 'flex',
      alignItems: 'center',
      flex: 'none',
      paddingY: 'md',
      paddingX: '0',
      transition: 'medium',
      textTransform: 'none',
      cursor: 'pointer',
      gap: 'sm',
      _focus: {
        // outline: 'none!', todo create visual glitch onclick
        '&:not([aria-selected="true"])': {
          color: 'dark-900',
        },
      },
      '&[aria-selected="true"]': {
        color: 'dark-900',
      },
      '&[aria-disabled="true"]': {
        color: 'dark-400',
        cursor: 'auto',
      },
      '&:hover:not([aria-selected="true"]):not([aria-disabled="true"])': {
        color: 'dark-900',
      },
      '& > svg, img': {
        maxWidth: 'token(spacing.lg)',
        maxHeight: 'token(spacing.lg)',
      },
      '& > span': {
        maxHeight: 'token(spacing.lg)',
      },
    },
    list: {
      position: 'relative',
      width: '100%',
      overflowX: 'auto',
      display: 'flex',
      border: '0',
    },
    panel: {},
    activeBar: {
      position: 'absolute',
      willChange: 'width, transform',
      transitionDuration: 'medium',
      transitionDelay: 'medium',
      transitionProperty: 'transform, width',
    },
  },
  variants: {
    size: {
      sm: {
        list: {
          '& > :not(:last-child)': {
            marginRight: 'md',
            fontSize: 'sm',
          },
        },
      },
      md: {
        list: {
          '& > :not(:last-child)': {
            marginRight: 'xl',
          },
        },
      },
    },
    orientation: {
      vertical: {
        list: {
          flexDirection: 'column',
          boxShadow: 'inset -1px 0 0 token(colors.dark-100)',
        },
        panel: {
          '&:focus': {
            outline: 'none',
          },
        },
        activeBar: {
          right: '0',
          top: '0',
          background: 'primary-500',
          width: '2px',
        },
      },
      horizontal: {
        list: {
          boxShadow: 'inset 0 -1px 0 token(colors.dark-100)',
        },
        panel: {
          marginTop: 'xl',
          '&:focus': {
            outline: 'none',
          },
        },
        activeBar: {
          left: '0',
          bottom: '0',
          background: 'primary-500',
          height: '2px',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    orientation: 'horizontal',
  },
})
