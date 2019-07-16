import { any, bool, func, object, oneOf, oneOfType, string } from 'prop-types'

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
  visited: bool
})

export const COMPONENT_TYPE = oneOfType([func, object, string])
export const VARIANTS_TYPE = oneOf(['error', 'info', 'valid', 'warning'])
export const DIRECTIONS_TYPE = oneOf(['row', 'container'])
export const SHAPES_TYPE = oneOf(['square', 'circle'])
export const SIZES_TYPE = oneOf(['sm', 'md', 'lg'])
