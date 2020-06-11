export const getDefaultFields = theme => {
  const { borderWidths, colors, fontSizes, fontWeights, space, toRem } = theme

  return {
    default: {
      color: colors.nude[800],
      fontSize: fontSizes.body3,
      /* Can't use 16 because that's a valid line-height value (16em) */
      lineHeight: '1rem',
      fontWeight: fontWeights.regular,
      backgroundColor: colors.light[900],
      borderColor: colors.nude[200],
      borderWidth: borderWidths.sm,
      borderStyle: 'solid',
      outline: 'none'
    },
    sizes: {
      sm: {
        height: toRem(32),
        padding: `${space.xs} ${space.md}`
      },
      md: {
        height: toRem(36),
        padding: `${space.sm} ${space.md}`
      },
      lg: {
        height: toRem(40),
        padding: `${space.md}`
      }
    },
    checkableField: {
      checked: {
        '&::after': {
          opacity: 1
        }
      },
      disabled: {
        "&[aria-checked='true']::after": {
          opacity: 0.4
        }
      }
    },
    disabled: {
      backgroundColor: colors.nude[500],
      color: colors.nude[700],
      cursor: 'not-allowed'
    },
    placeholder: {
      color: colors.nude[600]
    },
    focused: {
      borderColor: colors.primary[500]
    },
    select: {
      default: {
        maxHeight: toRem(155)
      },
      existing: {
        color: colors.nude[500],
        cursor: 'not-allowed'
      },
      highlighted: {
        backgroundColor: colors.nude[100],
        cursor: 'default'
      },
      selectedAndHighlighted: {
        backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08) 100%)'
      },
      selected: {
        color: colors.dark[200],
        fontWeight: fontWeights.bold
      }
    }
  }
}
