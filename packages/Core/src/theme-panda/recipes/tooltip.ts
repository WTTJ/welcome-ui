import { defineRecipe } from '@pandacss/dev'
import { token } from '@welcome-ui/panda/tokens'

const medium = `${token('durations.medium')} ${token('easings.medium')}`

export const tooltip = defineRecipe({
  className: 'wui-tooltip',
  description: 'welcome-ui tooltip',
  jsx: [/Tooltip.*/],
  base: {
    maxWidth: '200px',
    backgroundColor: 'black',
    color: 'white',
    paddingY: 'xs',
    paddingX: 'sm',
    fontSize: 'xs',
    lineHeight: 'xs',
    borderRadius: 'sm',
    boxSizing: 'content-box',
    transition: `opacity ${medium}, transform ${medium}, visibility ${medium}`,
    visibility: 'hidden',
    opacity: '0',
    transformOrigin: 'top center',
    '&[data-enter]': {
      visibility: 'visible',
      opacity: '1',
      transform: 'translate3d(0, 0, 0)',
    },
  },
})
