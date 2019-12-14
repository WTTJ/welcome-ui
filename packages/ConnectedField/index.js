import React, { forwardRef } from 'react'
import { oneOfType, string } from 'prop-types'
import { Field as FinalField } from 'react-final-form'
import Field from '@welcome-ui/field'

import { COMPONENT_TYPE, FINAL_FORM_INPUT_TYPES } from '../Core/utils/propTypes'
import { getBaseType } from '../Core/utils/fields'

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
  component: oneOfType(COMPONENT_TYPE),
  type: string
}

export default ConnectedField
