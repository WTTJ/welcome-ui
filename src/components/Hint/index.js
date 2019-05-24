import React from 'react'
import { node, oneOf } from 'prop-types'

import * as S from './styles'

export const Hint = ({ children, variant }) => <S.Wrapper variant={variant}>{children}</S.Wrapper>

Hint.propTypes = {
  /** Node component from parent */
  children: node,
  /** Variant of component */
  variant: oneOf(['warning', 'error'])
}
