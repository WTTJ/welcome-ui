import React, { forwardRef } from 'react'
import { node, oneOfType, string } from 'prop-types'
import { Field as FinalField } from 'react-final-form'
import { Field, getBaseType } from '@welcome-ui/field'

import { COMPONENT_TYPE } from '../../src/utils/propTypes'

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

ConnectedField.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  component: oneOfType(COMPONENT_TYPE),
  type: string
}
