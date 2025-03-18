const palette = {
  'beige-10': '#FBF9F7',
  'beige-20': '#F6F3EF',
  'beige-30': '#EAE4DE',
  'beige-40': '#D2CBC3',
  'beige-50': '#A7A096',
  'beige-60': '#605B55',
  'beige-70': '#4D4944',
  'beige-80': '#33302D',
  'beige-90': '#1E1C1A',
  'blue-10': '#E0F5FF',
  'blue-20': '#BBEAFF',
  'blue-30': '#9BDEF7',
  'blue-40': '#55C3E9', // brand
  'blue-50': '#27A5D0',
  'blue-60': '#057AA3',
  'blue-70': '#025A79',
  'blue-80': '#013C50',
  'blue-90': '#00202B',
  'green-10': '#EAFFD4',
  'green-20': '#D6F6B4',
  'green-30': '#BADE94', // brand
  'green-40': '#9FC873',
  'green-50': '#83AD57',
  'green-60': '#5A8034',
  'green-70': '#40611F',
  'green-80': '#2A4210',
  'green-90': '#142603',
  'neutral-10': '#FFFFFF',
  'neutral-20': '#F3F3F3',
  'neutral-30': '#DEDEDE',
  'neutral-40': '#BDBDBD',
  'neutral-50': '#989898',
  'neutral-60': '#585858',
  'neutral-70': '#444444',
  'neutral-80': '#212121',
  'neutral-90': '#000000',
  'orange-10': '#FFEBCE',
  'orange-20': '#FFD495',
  'orange-30': '#FFBB59',
  'orange-40': '#FF9F14',
  'orange-50': '#DB860A',
  'orange-60': '#A6670A',
  'orange-70': '#824F06',
  'orange-80': '#573607',
  'orange-90': '#382303',
  'pink-10': '#FFEAF5',
  'pink-20': '#FFD5EB',
  'pink-30': '#FEB7DC',
  'pink-40': '#F696C8', // brand
  'pink-50': '#E468A8',
  'pink-60': '#C24887',
  'pink-70': '#972962',
  'pink-80': '#6D1142',
  'pink-90': '#3C0725',
  'red-10': '#FBDEDC',
  'red-20': '#FCC7C3',
  'red-30': '#FDB3AE',
  'red-40': '#FF9490',
  'red-50': '#FF6165',
  'red-60': '#E1003A',
  'red-70': '#A80029',
  'red-80': '#75001A',
  'red-90': '#450101',
  'red-orange-10': '#FFDED0',
  'red-orange-20': '#FFC9B2',
  'red-orange-30': '#FFB595',
  'red-orange-40': '#FF9868', // brand
  'red-orange-50': '#E67B49',
  'red-orange-60': '#C45927',
  'red-orange-70': '#9F4217',
  'red-orange-80': '#6D2605',
  'red-orange-90': '#451701',
  'teal-10': '#D5FFFA',
  'teal-20': '#AAF4EB',
  'teal-30': '#6DE1D2',
  'teal-40': '#00C7AE', // brand
  'teal-50': '#01AA95',
  'teal-60': '#008070',
  'teal-70': '#00544A',
  'teal-80': '#003D35',
  'teal-90': '#00211D',
  'violet-10': '#F2F2FF',
  'violet-20': '#E0E0FF',
  'violet-30': '#C9C9FF',
  'violet-40': '#ACACFF', // brand
  'violet-50': '#9080F0',
  'violet-60': '#7958D6',
  'violet-70': '#593CAC',
  'violet-80': '#422A86',
  'violet-90': '#1F0E51',
  'yellow-10': '#FFF8D9',
  'yellow-20': '#FFF1B2',
  'yellow-30': '#FFE166',
  'yellow-40': '#FFCD00',
  'yellow-50': '#E5B800',
  'yellow-60': '#B69200',
  'yellow-70': '#846A01',
  'yellow-80': '#604D00',
  'yellow-90': '#423500',
}

export const getColors = (systemColors: typeof palette) => ({
  ...systemColors,
  overlay: 'rgba(0, 0, 0, 0.55)',
  'primary-10': systemColors['yellow-10'],
  'primary-20': systemColors['yellow-20'],
  'primary-30': systemColors['yellow-30'],
  'primary-40': systemColors['yellow-40'],
  'primary-50': systemColors['yellow-50'],
  'primary-60': systemColors['yellow-60'],
  'primary-70': systemColors['yellow-70'],
  'primary-80': systemColors['yellow-80'],
  'primary-90': systemColors['yellow-90'],
  'secondary-blue': systemColors['blue-40'],
  'secondary-green': systemColors['green-30'],
  'secondary-orange': systemColors['red-orange-40'],
  'secondary-pink': systemColors['pink-40'],
  'secondary-teal': systemColors['teal-40'],
  'secondary-violet': systemColors['violet-40'],
})

export const colors = getColors(palette)
export type ThemeColors = typeof colors
export type ThemeSecondaryColors = 'blue' | 'green' | 'orange' | 'pink' | 'teal' | 'violet'
