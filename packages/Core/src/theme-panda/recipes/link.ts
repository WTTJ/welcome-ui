import { defineRecipe } from '@pandacss/dev'

export const link = defineRecipe({
  className: 'wui-link',
  description: 'welcome-ui link',
  jsx: [/Link.*/],
  base: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 1,
    lineHeight: 1.5,
    textDecoration: 'none',
    cursor: 'pointer',
    '& > .wui-text': {
      marginRight: '-2px',
      marginLeft: '-2px',
      paddingLeft: '2px',
      paddingRight: '2px',
      backgroundImage:
        'linear-gradient(0deg, token(colors.underline), token(colors.underline) 100%)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 50%',
      backgroundPositionY: 'calc(200% - 2px)',
      color: 'dark-900',
      fontWeight: 'medium',
      transition: 'background-position-y 250ms, background-size 250ms, color 250ms',
      '&[data-external="true"]': {
        backgroundSize: 'calc(100% - token(space.md) - token(space.sm)) 50%',
      },
      _hover: {
        outline: 'none !important',
        opacity: 1,
        backgroundPositionY: '100%',
        backgroundSize: '100% 100%',
      },
      _focus: {
        outline: 'none !important',
        opacity: 1,
        backgroundPositionY: '100%',
        backgroundSize: '100% 100%',
      },
    },
    '& > *:not(:only-child):not(:last-child)': {
      marginRight: 'xs',
    },
  },
  variants: {
    variant: {
      primary: {},
      secondary: {
        '& > .wui-text': {
          backgroundImage:
            'linear-gradient(0deg, token(colors.dark-900), token(colors.dark-900) 100%)',
          _hover: {
            color: 'light-900',
          },
        },
      },
    },
    disabled: {
      true: {
        pointerEvents: 'none',
        '& > .wui-text': {
          color: 'dark-400',
          backgroundImage:
            'linear-gradient(0deg, token(colors.dark-100), token(colors.dark-100), 100%)',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
