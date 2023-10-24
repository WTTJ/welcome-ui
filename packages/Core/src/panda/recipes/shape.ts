import { defineRecipe } from '@pandacss/dev'

export const shape = defineRecipe({
  className: 'wui-shape',
  description: 'Welcome UI Shape',
  jsx: [/Shape.*/],
  base: {
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      objectFit: 'cover',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
    },
  },
  variants: {
    shape: {
      circle: {
        borderRadius: '50%',
      },
      square: {
        borderRadius: 0,
      },
    },
  },
})
