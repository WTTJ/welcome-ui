import { any, bool, func, object, oneOf, oneOfType, shape, string } from 'prop-types'

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

export const COMPONENT_TYPE = oneOfType([func, object, string])
export const DIRECTIONS_TYPE = oneOf(['row', 'container'])
export const INPUTS_TYPE = oneOf([
  'checkbox',
  'email',
  'file',
  'password',
  'radio',
  'search',
  'tel',
  'text'
])
export const OPTIONS_TYPE = shape({ label: string, value: string })
export const SHAPES_TYPE = oneOf(['square', 'circle'])
export const SIZES_TYPE = oneOf(['sm', 'md', 'lg'])
export const VARIANTS_TYPE = oneOf(['error', 'info', 'valid', 'warning'])
