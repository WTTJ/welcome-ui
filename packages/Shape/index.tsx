import { WuiProps } from '@welcome-ui/system'
import React, { forwardRef } from 'react'

import * as S from './styles'

export type Shape = 'square' | 'circle'

export interface ShapeProps extends React.HTMLAttributes<HTMLDivElement> {
  shape: Shape
}

export const Shape = forwardRef<HTMLDivElement, ShapeProps & WuiProps>(
  ({ children, dataTestId, shape, ...rest }, ref) => (
    <S.Shape data-testid={dataTestId} ref={ref} shape={shape} {...rest}>
      {children}
    </S.Shape>
  )
)

Shape.displayName = 'Shape'
