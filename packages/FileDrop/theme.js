import { getVariantColor } from '@welcome-ui/utils'

export const getFiledrops = theme => {
  const { toRem } = theme

  return {
    default: {
      borderStyle: 'dashed',
      minHeight: toRem(200)
    },
    dragAccept: {},
    dragReject: {
      // FIXME get the color with the theme variable
      borderColor: getVariantColor('error')
    },
    disabled: {}
  }
}
