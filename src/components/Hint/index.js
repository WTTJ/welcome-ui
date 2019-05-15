import React from 'react'
import { node, oneOf } from 'prop-types'

import StyledHint from './styles'

export const Hint = ({ children, variant }) => <StyledHint variant={variant}>{children}</StyledHint>

Hint.propTypes = {
  /** Node component from parent */
  children: node,
  /** Variant of component */
  variant: oneOf(['warning', 'error'])
}
