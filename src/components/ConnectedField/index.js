import React, { forwardRef } from 'react'
import { string } from 'prop-types'
import { Field as FinalField } from 'react-final-form'

import { Field } from '../Field'
import { COMPONENT_TYPE, FINAL_FORM_INPUT_TYPES } from '../../utils/propTypes'
import { getBaseType } from '../../utils/fields'

export const ConnectedField = forwardRef(({ children, component, type, ...rest }, ref) => {
  if (!children && !component) {
    return null
  }

  return (
    <FinalField type={getBaseType(component.type || type)} {...rest}>
      {({ input, meta }) => (
        <Field
          ref={ref}
          {...input}
          {...meta}
          error={meta.error || meta.submitError}
          {...rest}
          component={component}
          connected
        >
          {children}
        </Field>
      )}
    </FinalField>
  )
})

ConnectedField.displayName = 'WelcomeField'

ConnectedField.propTypes = {
  ...FINAL_FORM_INPUT_TYPES,
  component: COMPONENT_TYPE,
  type: string
}
