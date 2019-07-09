import { th } from '@xstyled/system'

const isPristine = (connected, touched) => connected && !touched

export const getVariant = ({ connected, error, touched, warning }) => {
  if (isPristine(connected, touched)) {
    return undefined
  } else if (error) {
    return 'error'
  } else if (warning) {
    return 'warning'
  }
  return undefined
}

export const getHintText = ({ connected, error, hint, touched, warning }) => {
  if (isPristine(connected, touched)) {
    return hint
  } else {
    return error || warning || hint
  }
}

const variantStateColors = {
  focused: 'colors.primary.500',
  error: 'colors.danger.500',
  warning: 'colors.warning.500',
  info: 'colors.info.500'
}

export const getVariantStateColor = variant => {
  const variantColor = variantStateColors[variant]
  return variantColor ? th(variantColor) : null
}

const variantColors = {
  blue: 'colors.sub.blue',
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
  ...variantStateColors
}

export const getVariantColor = variant => {
  const variantColor = variantColors[variant]
  return variantColor ? th(variantColor) : null
}
