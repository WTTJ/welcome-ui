export const getDrawers = theme => {
  const { colors, space, texts, toRem } = theme
  return {
    backdrop: {
      backgroundColor: colors.overlay,
      zIndex: 999
    },
    default: {
      zIndex: 999
    },
    closeButton: {
      top: `${space.xl}`,
      right: `${space.xl}`
    },
    title: {
      margin: 0,
      padding: `${space['3xl']}`,
      /** space of close button */
      paddingRight: toRem(50),
      ...texts.h3
    },
    content: {
      padding: `${space['3xl']}`
    },
    footer: {
      padding: `${space['3xl']}`
    },
    sizes: {
      horizontal: {
        sm: { width: toRem(400) },
        md: { width: toRem(550) },
        lg: { width: toRem(680) }
      },
      vertical: {
        sm: { height: toRem(400) },
        md: { height: toRem(550) },
        lg: { height: toRem(680) }
      }
    }
  }
}
