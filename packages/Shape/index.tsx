import React, { forwardRef } from 'react'
import { CreateWuiProps } from '@welcome-ui/system'

import * as S from './styles'

export type Shape = 'square' | 'circle'

export interface ShapeOptions {
  shape?: Shape
}

export type ShapeProps = CreateWuiProps<'div', ShapeOptions>

export const Shape = forwardRef<HTMLDivElement, ShapeProps>(
  ({ children, dataTestId, shape, ...rest }, ref) => (
    <S.Shape data-testid={dataTestId} ref={ref} shape={shape} {...rest}>
      {children}
    </S.Shape>
  )
)

Shape.displayName = 'Shape'
