import { bool, node, number, oneOfType, string } from 'prop-types'
import React, { forwardRef } from 'react'

import * as S from './styles'

export const Shape = forwardRef(
  ({ borderRadius, children, height, rounded, width, ...rest }, ref) => (
    <S.Shape
      borderRadius={(rounded && width) || borderRadius}
      data-testid="shape"
      height={height}
      ref={ref}
      width={width}
      {...rest}
    >
      {children}
    </S.Shape>
  )
)

Shape.displayName = 'Shape'

Shape.propTypes = {
  borderRadius: oneOfType([string, number]),
  children: node.isRequired,
  height: oneOfType([string, number]).isRequired,
  rounded: bool,
  width: oneOfType([string, number]).isRequired
}
