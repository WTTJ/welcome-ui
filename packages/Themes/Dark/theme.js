import { colors as colorParentTheme } from './colors'

export const colors = {
  ...colorParentTheme,
  light: {
    200: '#333333',
    500: '#2d2d2d',
    700: '#191919',
    900: '#000000'
  },
  dark: {
    200: '#CCCCCC',
    500: '#EDEDED',
    700: '#FAFAFA',
    900: '#FFFFFF'
  },
  nude: {
    100: '#727272',
    200: '#828282',
    300: '#8e8e8e',
    400: '#a3a3a3',
    500: '#b7b7b7',
    600: '#c4c4c4',
    700: '#d6d6d6',
    800: '#E5E5E5'
  }
}

const defaultButtons = {
  color: colors.dark[900]
}

const borderDark = colors.nude[100]

const defaultFields = {
  borderColor: borderDark
}

export const darkTheme = {
  colors,
  buttons: {
    primary: defaultButtons,
    secondary: {
      ...defaultButtons,
      borderColor: colors.light[500]
    },
    tertiary: {
      ...defaultButtons
    },
    'primary-warning': {
      ...defaultButtons
    },
    'primary-danger': {
      ...defaultButtons
    },
    quaternary: {
      color: colors.nude[800]
    },
    hover: {
      secondary: {
        borderColor: colors.light[200]
      }
    },
    disabled: {
      color: colors.nude[800],
      backgroundColor: colors.light[700],
      borderColor: colors.light[700]
    }
  },
  tags: {
    default: {
      color: colors.dark[900]
    },
    variants: {
      default: {
        backgroundColor: colors.light[200]
      },
      dark: {
        backgroundColor: colors.light[700]
      }
    }
  },
  dropdownMenu: {
    inner: {
      borderColor: borderDark
    },
    item: {
      color: colors.nude[800],
      '&:hover': {
        color: colors.light[900]
      },
      '&:focus': {
        color: colors.light[900]
      },
      '&[disabled]': {
        color: colors.nude[100]
      }
    },
    separator: {
      backgroundColor: borderDark
    }
  },
  growls: {
    default: {
      borderColor: borderDark
    }
  },
  paginations: {
    active: {
      color: colors.dark[900],
      '&:hover, &:focus': {
        color: colors.dark[900]
      }
    }
  },
  tabs: {
    tabsBorder: {
      backgroundColor: borderDark
    },
    item: {
      disabled: {
        color: colors.nude[100]
      }
    }
  },
  fields: {
    default: defaultFields,
    disabled: {
      backgroundColor: colors.light[700],
      color: colors.nude[100]
    },
    placeholder: {
      color: colors.nude[300]
    },
    radiotabs: {
      default: {
        ...defaultFields
      }
    },
    select: {
      selected: {
        color: colors.light[900]
      }
    }
  },
  cards: {
    default: {
      borderColor: colors.light[500]
    }
  },
  modals: {
    backdrop: {
      backgroundColor: colors.light[900]
    }
  }
}
