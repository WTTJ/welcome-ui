import React, { forwardRef } from 'react'
import { bool, func, object, shape, string } from 'prop-types'
import { Field as FinalField } from 'react-final-form'

import { Field } from '../Field'
import { COMPONENT_TYPE, getBaseType } from '../../utils'

export const ConnectedField = forwardRef(({ component, type, ...rest }, ref) => (
  <FinalField
    type={getBaseType(component.type || type)}
    {...rest}
    render={({ input, meta }) => (
      <Field _ref={ref} {...input} {...meta} {...rest} component={component} connected />
    )}
  />
))

ConnectedField.displayName = 'WelcomeField'

ConnectedField.propTypes = {
  component: COMPONENT_TYPE,
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
