import { Element } from 'react'
import { array, bool, func, instanceOf, number, oneOfType, shape, string } from 'prop-types'

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

export const refsPropTypes = oneOfType([func, shape({ current: instanceOf(Element) })])
