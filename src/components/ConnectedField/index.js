/* eslint-disable react/prop-types */
/* eslint-disable react/no-multi-comp */

import React from 'react'
import { bool, func, object, shape, string } from 'prop-types'
import { Field as FinalField } from 'react-final-form'

import { Field } from '../Field'

const getBaseType = type => {
  if (type === 'radioTab') {
    return 'radio'
  }
  if (type === 'toggle') {
    return 'checkbox'
  }
  return type
}

const WrappedField = ({ input, meta, ...rest }) => <Field {...input} {...meta} {...rest} />

export const ConnectedField = props => {
  let { type } = props
  let baseType = getBaseType(type)
  return <FinalField {...props} component={WrappedField} fieldType={type} type={baseType} />
}

ConnectedField.propTypes = {
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
