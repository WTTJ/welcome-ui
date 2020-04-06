import { func, number, object, oneOfType, shape, string } from 'prop-types'

export const COMPONENT_TYPE = [func, object, string]

export const DIRECTIONS_TYPE = ['row', 'container', 'column']

export const INPUTS_TYPE = [
  'checkbox',
  'email',
  'file',
  'password',
  'radio',
  'search',
  'tel',
  'text'
]

export const OPTIONS_TYPE = shape({
  label: oneOfType([number, string]),
  value: oneOfType([number, string])
})

export const SHAPES_TYPE = ['square', 'circle']

export const SIZES_TYPE = ['sm', 'md', 'lg']

export const VARIANTS_TYPE = ['error', 'info', 'success', 'valid', 'warning']
