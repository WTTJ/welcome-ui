import { node, number, oneOf, oneOfType, string } from 'prop-types'
import React, { forwardRef } from 'react'

import * as S from './styles'

export const Shape = forwardRef(({ children, ...rest }, ref) => (
  <S.Shape data-testid="shape" ref={ref} {...rest}>
    {children}
  </S.Shape>
))

Shape.displayName = 'Shape'

Shape.propTypes = {
  children: node.isRequired,
  height: oneOfType([string, number]),
  shape: oneOf(['square', 'circle']),
  width: oneOfType([string, number]).isRequired
}
