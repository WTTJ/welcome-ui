import React from 'react'
import { bool, func, object, shape, string } from 'prop-types'

import { Field } from '../components/Field'

export const WrappedField = ({ input, meta, ...rest }) => <Field {...input} {...meta} {...rest} />

WrappedField.propTypes = {
  input: shape({
    name: string.isRequired,
    onBlur: func,
    onChange: func,
    onFocus: func,
    value: string
  }),
  meta: shape({
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
}
