import { createTheme } from '@welcome-ui/core'
import { hexToRGBA } from '@welcome-ui/utils'
const theme = createTheme()

export const colors = {
  ...theme.colors,
  danger: {
    100: '#250304'
  },
  success: {
    100: '#102412'
  },
  warning: {
    100: '#2A1205'
  },
  info: {
    100: '#051123'
  },
  light: {
    100: '#737373',
    200: '#4C4C4C',
    500: '#252525',
    700: '#1B1B1B',
    800: '#111111',
    900: '#000000'
  },
  dark: {
    100: '#7D7D7D',
    200: '#969696',
    500: '#AFAFAF',
    700: '#C8C8C8',
    800: '#E1E1E1',
    900: '#FFFFFF'
  },
  nude: {
    900: '#F1F1F0',
    800: '#E8E8E6',
    700: '#C3C3BE',
    500: '#818177',
    200: '#585851',
    100: '#444441'
  },
  underline: theme.colors.primary[500]
}

export const darkTheme = {
  colors,
  selection: {
    color: colors.dark[900]
  },
  buttons: {
    primary: {
      color: colors.dark[900]
    },
    hover: {
      quaternary: {
        backgroundColor: colors.light[700],
        borderColor: colors.light[700]
      }
    },
    focus: {
      quaternary: theme.focus(colors.light[700])
    },
    active: {
      quaternary: {
        backgroundColor: colors.light[500],
        borderColor: colors.light[500]
      }
    }
  },
  defaultCards: {
    borderColor: colors.light[500]
  },
  hints: {
    color: colors.dark[500]
  },
  modals: {
    default: {
      color: colors.dark[500]
    },
    footer: {
      color: colors.dark[900],
      borderTopColor: colors.light[500]
    },
    title: {
      color: colors.dark[900],
      borderBottomColor: colors.light[500]
    }
  },
  tables: {
    th: {
      borderBottomColor: colors.light[100]
    }
  },
  tabs: {
    tabsBorder: {
      boxShadow: `inset 0 -${theme.borderWidths.sm} 0 ${colors.light[500]}`
    },
    item: {
      disabled: {
        color: colors.light[200]
      }
    }
  },
  accordions: {
    wrapper: {
      borderColor: colors.light[500]
    }
  },
  tags: {
    variants: {
      default: {
        backgroundColor: colors.nude[100],
        color: colors.dark[500],
        borderColor: hexToRGBA(colors.dark[900], 0.3)
      },
      primary: {
        color: colors.dark[900]
      }
    }
  },
  toasts: {
    growls: {
      default: {
        color: colors.dark[500]
      }
    }
  },
  labels: {
    color: colors.dark[500]
  },
  radios: {
    checked: {
      color: colors.dark[900]
    }
  },
  radioTabs: {
    checked: {
      color: colors.dark[900]
    }
  },
  dateTimePickerCommon: {
    item: {
      selected: {
        color: colors.dark[900]
      }
    }
  },
  checkboxes: {
    checked: {
      color: colors.dark[900]
    }
  },
  toggles: {
    item: {
      default: {
        borderColor: colors.light[100]
      }
    },
    after: {
      default: { backgroundColor: colors.dark[900], borderColor: colors.dark[900] },
      checked: { backgroundColor: colors.dark[900], borderColor: colors.dark[900] }
    }
  }
}
