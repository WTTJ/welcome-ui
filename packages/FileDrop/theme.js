export const getFiledrops = theme => {
  const { toRem } = theme

  return {
    default: {
      borderStyle: 'dashed',
      minHeight: toRem(200)
    },
    dragAccept: {},
    dragReject: {},
    disabled: {}
  }
}
