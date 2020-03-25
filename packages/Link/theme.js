export const getLinks = theme => {
  const { colors, transitions, underline } = theme
  return {
    default: {
      color: colors.dark[500],
      transition: transitions.medium
    },
    primary: {
      default: underline,
      hover: {
        opacity: 0.6
      }
    },
    secondary: {
      default: '',
      hover: {
        opacity: 0.6
      }
    }
  }
}
