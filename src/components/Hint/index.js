import React from 'react'
import { node, oneOf } from 'prop-types'

import * as S from './styles'

export const Hint = ({ children, variant }) => <S.Hint variant={variant}>{children}</S.Hint>

Hint.propTypes = {
  /** Node component from parent */
  children: node,
  /** Variant of component */
  variant: oneOf(['warning', 'error'])
}
