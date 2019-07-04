import React, { forwardRef } from 'react'
import { bool, func, object, shape, string } from 'prop-types'
import { Field as FinalField } from 'react-final-form'

import { Field } from '../Field'
import { getBaseType } from '../../utils/'

export const ConnectedField = forwardRef(({ component, type, ...rest }, ref) => (
  <FinalField
    type={getBaseType(component.type || type)}
    {...rest}
    render={({ input, meta }) => (
      <Field {...input} {...meta} {...rest} component={component} connected inputRef={ref} />
    )}
  />
))

ConnectedField.displayName = 'WelcomeField'

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
