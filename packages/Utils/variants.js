import { th } from '@xstyled/system'

const VARIANTS = {
  focused: 'colors.primary.500',
  error: 'colors.danger.500',
  warning: 'colors.warning.500',
  info: 'colors.info.500'
}

export const TAG_VARIANTS = {
  blue: 'colors.sub.blue',
  dark: 'colors.dark.500',
  default: 'colors.nude.100',
  green: 'colors.sub.green',
  orange: 'colors.sub.orange',
  pink: 'colors.sub.pink',
  primary: 'colors.primary.500',
  purple: 'colors.sub.purple',
  red: 'colors.sub.red',
  secondary: 'colors.secondary.500',
  turquoize: 'colors.sub.turquoize',
  yellow: 'colors.sub.yellow',
  ...VARIANTS
}

export const getVariantColor = variant => {
  const key = VARIANTS[variant]
  return key ? th(key) : null
}
