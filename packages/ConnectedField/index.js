import React, { forwardRef } from 'react'
import { node, oneOfType } from 'prop-types'
import { Field as FinalField } from 'react-final-form'
import { Field } from '@welcome-ui/field'

import { COMPONENT_TYPE } from '../../src/utils/propTypes'

export const ConnectedField = forwardRef(({ children, component, ...rest }, ref) => {
  if (!children && !component) {
    return null
  }

  return (
    <FinalField {...rest}>
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
  component: oneOfType(COMPONENT_TYPE)
}
