import { array, shape, string, oneOfType, bool, node } from 'prop-types'

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
  classList: array,
  formName: string,
  inlineHint: bool,
  label: oneOfType([string, bool, node]),
  placeholder: oneOfType([string, bool, node]),
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
