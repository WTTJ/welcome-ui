export const getModals = ({ colors, radii, toRem }) => ({
  backdrop: {
    'background-color': colors.dark[900],
    opacity: 0.6,
    'z-index': '999'
  },
  default: {
    'z-index': '999'
  },
  gutter: toRem(32),
  sizes: {
    sm: {
      width: 400
    },
    md: {
      width: 550
    },
    lg: {
      width: 680
    },
    auto: {}
  },
  cover: {
    'border-top-left-radius': radii.sm,
    'border-top-right-radius': radii.sm
  }
})
