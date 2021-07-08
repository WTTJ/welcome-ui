import { SystemProps } from '@xstyled/system'
import React, { forwardRef } from 'react'

import * as S from './styles'

export type ShapeType = 'square' | 'circle'

export interface ShapeProps extends React.HTMLAttributes<HTMLDivElement> {
  dataTestId?: string
  shape: ShapeType
}

export const Shape = forwardRef<HTMLDivElement, ShapeProps & SystemProps>(
  ({ children, dataTestId, shape, ...rest }, ref) => (
    <S.Shape data-testid={dataTestId} ref={ref} shape={shape} {...rest}>
      {children}
    </S.Shape>
  )
)

Shape.displayName = 'Shape'
