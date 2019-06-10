import React from 'react'
import { bool, func, object, shape, string } from 'prop-types'
import { Field as FinalField } from 'react-final-form'

import { Field } from '../Field'

const types = {
  InputCheckbox: 'checkbox',
  InputRadio: 'radio',
  RadioTab: 'radio',
  Toggle: 'checkbox'
}

export const ConnectedField = ({ component, type, ...rest }) => (
  <FinalField
    type={types[component.name] || type}
    {...rest}
    render={({ input, meta }) => (
      <Field {...rest} {...input} {...meta} component={component} connected />
    )}
  />
)

ConnectedField.propTypes = {
  component: func,
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
  }),
  type: string
}
