import { func, number, object, oneOfType, shape, string } from 'prop-types'

export const COMPONENT_TYPE = [func, object, string]

export const DIRECTIONS_TYPE = ['row', 'container'] as const

export const INPUTS_TYPE = [
  'checkbox',
  'email',
  'file',
  'password',
  'radio',
  'search',
  'tel',
  'text'
] as const

export const OPTIONS_TYPE = shape({
  label: oneOfType([number, string]).isRequired,
  value: oneOfType([number, string]).isRequired
})

export type OPTION_TYPE = {
  label: string | number
  value: string | number
}

export type VALUE_TYPE = string | number | (string | number)[]

export const SHAPES_TYPE = ['square', 'circle'] as const

export const SIZES_TYPE = ['sm', 'md', 'lg'] as const

export const VARIANTS_TYPE = ['error', 'info', 'valid', 'warning'] as const
