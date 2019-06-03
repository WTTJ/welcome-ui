import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

export const Hint = ({ children, variant }) => <S.Hint variant={variant}>{children}</S.Hint>

Hint.propTypes = {
  /** Node component from parent */
  children: PropTypes.node,
  /** Variant of component */
  variant: PropTypes.oneOf(['warning', 'error'])
}
