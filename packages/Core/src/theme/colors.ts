export function formatColors(items: { [key: string]: string | { [key: string]: string } }) {
  Object.entries(items).reduce((colors, [colorName, colorsData]) => {
    if (typeof colorsData === 'object') {
      Object.keys(colorsData).map(data => {
        const colorNameFormatted = `${colorName}-${data}`
        return (colors[colorNameFormatted] = colorsData[data])
      })
    } else {
      colors[colorName] = colorsData
    }

    return colors
  }, {} as { [key: string]: string })
}

const palette = {
  yellow: {
    10: '#FFF9E1',
    20: '#FFF1B2',
    30: '#FFE166',
    40: '#FFCD00',
    50: '#E9BC06',
    60: '#C8A102',
    70: '#A88700',
    80: '#846A01',
    90: '#604D00',
    100: '#423500',
  },
  beige: {
    10: '#FBF9F7',
    20: '#F6F3EF',
    30: '#F0EBE5',
    40: '#D8D2CB',
    50: '#B8B1A8',
    60: '#928C85',
    70: '#605B55',
    80: '#3E3A35',
    90: '#33302D',
    100: '#272522',
  },
  green: {
    10: '#ECF9ED',
    20: '#D4EED6',
    30: '#C1E1C4',
    40: '#A5D0A8',
    50: '#7BAC82',
    60: '#64946B',
    70: '#44714A',
    80: '#2A5933',
    90: '#2A5933',
    100: '#102D16',
  },
  cyan: {
    10: '#F0FFFD',
    20: '#D8F4F1',
    30: '#C4EAE5',
    40: '#A2D9D2',
    50: '#74B6AD',
    60: '#5C9F97',
    70: '#3C7E76',
    80: '#1B5F56',
    90: '#0A4E45',
    100: '#003A34',
  },
  blue: {
    10: '#E5F2FF',
    20: '#CDDFF2',
    30: '#AAC9E9',
    40: '#8CB3DB',
    50: '#7299C1',
    60: '#5981A9',
    70: '#43688E',
    80: '#2D537A',
    90: '#1E3E60',
    100: '#09294A',
  },
  pink: {
    10: '#FFECFA',
    20: '#FFD4F3',
    30: '#F5AEE2',
    40: '#E287C9',
    50: '#BB5DA1',
    60: '#9E4686',
    70: '#7E2F68',
    80: '#651A50',
    90: '#4A0938',
    100: '#28001D',
  },
  purple: {
    10: '#EFE9FF',
    20: '#D8CDF1',
    30: '#C0B3DE',
    40: '#9B8CC0',
    50: '#8171AE',
    60: '#6A5A97',
    70: '#51427C',
    80: '#3F2F6C',
    90: '#291C58',
    100: '#170A46',
  },
  orange: {
    10: '#FFEFDC',
    20: '#FFE5C6',
    30: '#FFD2A9',
    40: '#F8BF7C',
    50: '#E0A055',
    60: '#C28339',
    70: '#9F6521',
    80: '#754610',
    90: '#643906',
    100: '#482701',
  },
  red: {
    10: '#FFEAEA',
    20: '#FFDCD2',
    30: '#FFC2B1',
    40: '#F79D85',
    50: '#F79D85',
    60: '#C86347',
    70: '#A5462D',
    80: '#842B18',
    90: '#691D0C',
    100: '#440F00',
  },
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    10: 'rgba(0, 0, 0, 0.048)',
    20: 'rgba(0, 0, 0, 0.13)',
    30: 'rgba(0, 0, 0, 0.26)',
    40: 'rgba(0, 0, 0, 0.405)',
    50: 'rgba(0, 0, 0, 0.517)',
    60: 'rgba(0, 0, 0, 0.655)',
    70: 'rgba(0, 0, 0, 0.735)',
    80: 'rgba(0, 0, 0, 0.85)',
  },
}

const tokens = {
  ...palette,
  primary: palette.yellow,
  nude: palette.beige,
  neutral: {
    white: palette.white,
    ...palette.gray,
    black: palette.black,
  },
  success: {
    10: palette.green[10],
    20: palette.green[20],
    30: palette.green[30],
    40: palette.green[60],
    50: palette.green[70],
  },
  danger: {
    10: palette.red[10],
    20: palette.red[20],
    30: palette.red[30],
    40: palette.red[60],
    50: palette.red[70],
  },
  info: {
    10: palette.blue[10],
    20: palette.blue[20],
    30: palette.blue[30],
    40: palette.blue[60],
    50: palette.blue[70],
  },
  warning: {
    10: palette.orange[10],
    20: palette.orange[20],
    30: palette.orange[30],
    40: palette.orange[60],
    50: palette.orange[70],
  },
  secondary: {
    blue: palette.blue[40],
    red: palette.red[40],
    green: palette.green[40],
    purple: palette.purple[40],
  },
  overlay: palette.gray[20],
  border: palette.gray[20],
  underline: palette.yellow[40],
}

export const colors = formatColors(tokens)

export type ThemeColors = keyof typeof colors
