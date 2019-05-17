import React from 'react'
import { node, oneOf, string } from 'prop-types'

import { StyledDummyComponent } from './styles'

export const DummyComponent = ({ children, size, type, ...props }) => (
  <StyledDummyComponent size={size} type={type} {...props}>
    {children}
  </StyledDummyComponent>
)

DummyComponent.propTypes = {
  /** Node component from parent */
  children: node,
  /** Size of component */
  size: oneOf(['auto', 'sm', 'md', 'lg']),
  /** Type of component */
  type: string
}

// Specifies the default values for props:
DummyComponent.defaultProps = {
  size: 'auto',
  type: 'full'
}
