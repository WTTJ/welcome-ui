import { array, bool, func, number, object, oneOf, oneOfType, shape, string } from 'prop-types'

export const reduxFormFieldPropTypes = {
  input: shape({
    name: string.isRequired
  }).isRequired,
  meta: shape({
    error: oneOfType([string, array]),
    submitFailed: bool.isRequired,
    touched: bool.isRequired,
    warnings: oneOfType([string, array])
  })
}

export const formFieldPropTypes = {
  onBlur: func,
  onChange: func,
  onFocus: func,
  value: oneOfType([string, number]),
  required: bool,
  autoFocus: bool
}

export const formFieldDefaultProps = {
  classList: [],
  inlineHint: null,
  label: null,
  placeholder: null,
  required: false,
  autoFocus: false
}

export const COMPONENT_TYPE = oneOfType([func, object, string])
export const FINAL_FORM_META_TYPES = {
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
}

export const VARIANTS_TYPE = oneOf(['error', 'info', 'valid', 'warning'])
export const DIRECTIONS_TYPE = oneOf(['row', 'container'])
export const SHAPES_TYPE = oneOf(['square', 'circle'])
export const SIZES_TYPE = oneOf(['sm', 'md', 'lg'])
