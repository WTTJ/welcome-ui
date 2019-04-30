import React from 'react'
import { oneOf } from 'prop-types'

import StyledHint from './styles'

export const Hint = props => <StyledHint {...props}>{props.children}</StyledHint>

Hint.propTypes = {
  /** Variant of component */
  variant: oneOf(['warning', 'error'])
}
