import { node, number, oneOf, oneOfType, string } from 'prop-types'
import React, { forwardRef } from 'react'

import { SHAPES_TYPE } from '../../utils/propTypes'

import * as S from './styles'

export const Shape = forwardRef(({ children, dataTestId, ...rest }, ref) => (
  <S.Shape data-testid={dataTestId} ref={ref} {...rest}>
    {children}
  </S.Shape>
))

Shape.displayName = 'Shape'

Shape.propTypes /* remove-proptypes */ = {
  children: node,
  h: oneOfType([string, number]),
  shape: oneOf(SHAPES_TYPE),
  w: oneOfType([string, number]).isRequired
}
