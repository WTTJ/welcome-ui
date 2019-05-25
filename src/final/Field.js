import React from 'react'
import { bool, func, object, shape, string } from 'prop-types'
import { Field as FinalField } from 'react-final-form'

import { Field as WelcomeField } from '../components/Field'

const Component = ({ input, meta, ...rest }) => {
  return <WelcomeField {...input} {...meta} {...rest} />
}

export const Field = props => {
  let type = props.type
  if (type === 'radioTab') {
    type = 'radio'
  }
  if (type === 'toggle') {
    type = 'checkbox'
  }
  return <FinalField component={Component} {...props} type={type} fieldType={props.type} />
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
  })
}
