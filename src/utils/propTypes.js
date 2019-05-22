import { array, bool, func, node, number, oneOfType, shape, string } from 'prop-types'

export const reduxFormFieldPropTypes = {
  input: shape({
    name: string.isRequired
  }).isRequired,
  meta: shape({
    error: oneOfType([string, array]),
    warnings: oneOfType([string, array]),
    submitFailed: bool.isRequired,
    touched: bool.isRequired
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
