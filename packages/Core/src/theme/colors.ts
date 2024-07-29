const palette = {
  'beige-10': '#FBF9F7',
  'beige-20': '#F6F3EF',
  'beige-30': '#F0EBE5',
  'beige-40': '#D8D2CB',
  'beige-50': '#B8B1A8',
  'beige-60': '#928C85',
  'beige-70': '#605B55',
  'beige-80': '#3E3A35',
  'beige-90': '#33302D',
  'beige-100': '#272522',
  'blue-10': '#E0F5FF',
  'blue-20': '#BBEAFF',
  'blue-30': '#9BDEF7',
  'blue-40': '#55C3E9', // brand
  'blue-50': '#27A5D0',
  'blue-60': '#057AA3',
  'blue-70': '#025A79',
  'blue-80': '#013C50',
  'blue-90': '#00202B',
  'teal-10': '#D5FFFA',
  'teal-20': '#AAF4EB',
  'teal-30': '#6DE1D2',
  'teal-40': '#00C7AE', // brand
  'teal-50': '#01AA95',
  'teal-60': '#008070',
  'teal-70': '#00544A',
  'teal-80': '#003D35',
  'teal-90': '#00211D',
  'gray-10': '#F3F3F3',
  'gray-20': '#DEDEDE',
  'gray-30': '#BDBDBD',
  'gray-40': '#989898',
  'gray-50': '#7B7B7B',
  'gray-60': '#585858',
  'gray-70': '#444444',
  'gray-80': '#262626',
  'green-10': '#EAFFD4',
  'green-20': '#D6F6B4',
  'green-30': '#BADE94', // brand
  'green-40': '#9FC873',
  'green-50': '#83AD57',
  'green-60': '#5A8034',
  'green-70': '#40611F',
  'green-80': '#2A4210',
  'green-90': '#142603',
  'orange-10': '#FFDED0',
  'orange-20': '#FFC9B2',
  'orange-30': '#FFB595',
  'orange-40': '#FF9868', // brand
  'orange-50': '#E67B49',
  'orange-60': '#C45927',
  'orange-70': '#9F4217',
  'orange-80': '#6D2605',
  'orange-90': '#451701',
  'pink-10': '#FFEAF5',
  'pink-20': '#FFD5EB',
  'pink-30': '#FEB7DC',
  'pink-40': '#F696C8', // brand
  'pink-50': '#E468A8',
  'pink-60': '#C24887',
  'pink-70': '#972962',
  'pink-80': '#6D1142',
  'pink-90': '#3C0725',
  'purple-10': '#F2F2FF',
  'purple-20': '#E0E0FF',
  'purple-30': '#C9C9FF',
  'purple-40': '#ACACFF', // brand
  'purple-50': '#9080F0',
  'purple-60': '#7958D6',
  'purple-70': '#593CAC',
  'purple-80': '#422A86',
  'purple-90': '#1F0E51',
  'red-10': '#FFEAEA',
  'red-20': '#FFDCD2',
  'red-30': '#FFC2B1',
  'red-40': '#F79D85',
  'red-50': '#F79D85',
  'red-60': '#C86347',
  'red-70': '#A5462D',
  'red-80': '#842B18',
  'red-90': '#691D0C',
  'yellow-10': '#FFF9E1',
  'yellow-20': '#FFF1B2',
  'yellow-30': '#FFE166',
  'yellow-40': '#FFCD00',
  'yellow-50': '#E9BC06',
  'yellow-60': '#C8A102',
  'yellow-70': '#A88700',
  'yellow-80': '#846A01',
  'yellow-90': '#604D00',
  'yellow-100': '#423500',
  black: '#000000',
  white: '#FFFFFF',
}

export const colors = {
  ...palette,
  'brand-green': palette['green-30'],
  'brand-teal': palette['teal-40'],
  'brand-blue': palette['blue-40'],
  'brand-purple': palette['purple-40'],
  'brand-pink': palette['pink-40'],
  'brand-orange': palette['orange-40'],
  'primary-10': palette['yellow-10'],
  'primary-20': palette['yellow-20'],
  'primary-30': palette['yellow-30'],
  'primary-40': palette['yellow-40'],
  'primary-50': palette['yellow-50'],
  'primary-60': palette['yellow-60'],
  'primary-70': palette['yellow-70'],
  'primary-80': palette['yellow-80'],
  'primary-90': palette['yellow-90'],
  'primary-100': palette['yellow-100'],
  'nude-10': palette['beige-10'],
  'nude-20': palette['beige-20'],
  'nude-30': palette['beige-30'],
  'nude-40': palette['beige-40'],
  'nude-50': palette['beige-50'],
  'nude-60': palette['beige-60'],
  'nude-70': palette['beige-70'],
  'nude-80': palette['beige-80'],
  'nude-90': palette['beige-90'],
  'nude-100': palette['beige-100'],
  'neutral-white': palette.white,
  'neutral-10': palette['gray-10'],
  'neutral-20': palette['gray-20'],
  'neutral-30': palette['gray-30'],
  'neutral-40': palette['gray-40'],
  'neutral-50': palette['gray-50'],
  'neutral-60': palette['gray-60'],
  'neutral-70': palette['gray-70'],
  'neutral-80': palette['gray-80'],
  'neutral-black': palette.black,
  'success-10': palette['green-10'],
  'success-20': palette['green-20'],
  'success-30': palette['green-30'],
  'success-40': palette['green-60'],
  'success-50': palette['green-70'],
  'danger-10': palette['red-10'],
  'danger-20': palette['red-20'],
  'danger-30': palette['red-30'],
  'danger-40': palette['red-60'],
  'danger-50': palette['red-70'],
  'warning-10': palette['orange-10'],
  'warning-20': palette['orange-20'],
  'warning-30': palette['orange-30'],
  'warning-40': palette['orange-60'],
  'warning-50': palette['orange-70'],
  'info-10': palette['blue-10'],
  'info-20': palette['blue-20'],
  'info-30': palette['blue-30'],
  'info-40': palette['blue-60'],
  'info-50': palette['blue-70'],
  overlay: 'rgba(0, 0, 0, 0.55)',
  border: palette['gray-20'],
  underline: palette['yellow-40'],
}

export type ThemeColors = typeof colors
