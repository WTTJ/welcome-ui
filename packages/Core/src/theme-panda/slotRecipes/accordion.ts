import { defineSlotRecipe } from '@pandacss/dev'

export const accordion = defineSlotRecipe({
  className: 'wui-accordion',
  description: 'wui accordion',
  jsx: [/Accordion.*/],
  slots: ['root', 'discolsure', 'content', 'icon'],
  base: {
    root: {
      backgroundColor: 'light-900',
      transition: 'all',
      transitionDuration: 'medium',
      transitionTimingFunction: 'medium',
      border: 'sm',
      borderStyle: 'solid',
      borderColor: 'border',
      '&:hover': {
        borderColor: 'dark-400',
      },
    },
    discolsure: {
      textStyle: 'h5',
      width: '100%',
      padding: 'lg',
      backgroundColor: 'transparent',
      border: '0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'xxl',
      '&:focus, &:hover': {
        cursor: 'pointer',
        // Icon: {
        // backgroundColor: 'dark-100'
        // }
      },
      '&:focus': {
        outline: '0',
        // ${Icon} {
        //   color: inherit;
        // }
      },
    },
    content: {
      fontSize: 'sm',
      paddingInline: 'lg',
      color: 'dark-700',
      '&[data-open="true"]': {
        paddingBottom: 'lg',
      },
    },
    icon: {
      flexShrink: '0',
      color: 'dark-900',
      transform: 'rotate3d(0)',
      width: '24px',
      height: '24px',
      display: 'flex',
      borderRadius: '12px',
      transition: 'all',
      transitionDuration: 'medium',
      transitionTimingFunction: 'medium',
      '&[data-open="true"]': {
        transform: 'rotate3d(0, 0, 1, 90deg)',
      },
      '& *:first-child': {
        margin: 'auto',
      },
      '.Discolsure:focus &': {
        outline: '0',
      },
      '.Discolsure:hover &': {
        backgroundColor: 'dark-100',
      },
    },
  },
})
