import { node, number, oneOfType, string } from 'prop-types'
import React, { forwardRef } from 'react'

import { SHAPES_TYPE } from '../../utils'

import * as S from './styles'

export const Shape = forwardRef(({ children, testId, ...rest }, ref) => (
  <S.Shape data-testid={testId} ref={ref} {...rest}>
    {children}
  </S.Shape>
))

Shape.displayName = 'Shape'

Shape.propTypes = {
  children: node.isRequired,
  height: oneOfType([string, number]),
  shape: SHAPES_TYPE,
  testId: string,
  width: oneOfType([string, number]).isRequired
}
