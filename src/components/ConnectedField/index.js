import React, { forwardRef } from 'react'
import { string } from 'prop-types'
import { Field as FinalField } from 'react-final-form'

import { Field } from '../Field'
import { COMPONENT_TYPE, FINAL_FORM_INPUT_TYPES, getBaseType } from '../../utils'

export const ConnectedField = forwardRef(({ component, type, ...rest }, ref) => (
  <FinalField
    type={getBaseType(component.type || type)}
    {...rest}
    render={({ input, meta }) => (
      <Field ref={ref} {...input} {...meta} {...rest} component={component} connected />
    )}
  />
))

ConnectedField.displayName = 'WelcomeField'

ConnectedField.propTypes = {
  ...FINAL_FORM_INPUT_TYPES,
  component: COMPONENT_TYPE,
  type: string
}
