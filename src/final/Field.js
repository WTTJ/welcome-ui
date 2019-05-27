import React from 'react'
import { bool, func, object, shape, string } from 'prop-types'
import { Field as FinalField } from 'react-final-form'

import { WrappedField } from './WrappedField'

const getBaseType = type => {
  if (type === 'radioTab') {
    return 'radio'
  }
  if (type === 'toggle') {
    return 'checkbox'
  }
  return type
}

export const Field = props => {
  let { type } = props
  let baseType = getBaseType(type)
  return <FinalField {...props} component={WrappedField} fieldType={type} type={baseType} />
}

Field.propTypes = {
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
