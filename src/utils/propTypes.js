import { any, bool, func, number, object, oneOfType, shape, string } from 'prop-types'

export const FINAL_FORM_INPUT_TYPES = Object.freeze({
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  value: any,
  type: string,
  checked: bool,
  multiple: bool
})

export const FINAL_FORM_META_TYPES = Object.freeze({
  active: bool,
  data: object,
  dirty: bool,
  dirtySinceLastSubmit: bool,
  error: object,
  initial: string,
  invalid: bool,
  modified: bool,
  pristine: bool,
  submitError: object,
  submitFailed: bool,
  submitSucceeded: bool,
  submitting: bool,
  touched: bool,
  valid: bool,
  validating: bool,
  visited: bool
})

export const COMPONENT_TYPE = [func, object, string]
export const DIRECTIONS_TYPE = ['row', 'container']
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
export const VARIANTS_TYPE = ['error', 'info', 'valid', 'warning']
