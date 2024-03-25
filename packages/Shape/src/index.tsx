import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { getMax } from '@welcome-ui/utils'

import * as S from './styles'

export interface ShapeOptions {
  shape?: 'square' | 'circle'
}

export type ShapeProps = CreateWuiProps<'div', ShapeOptions>

export const Shape = forwardRef<'div', ShapeProps>(
  ({ children, dataTestId, h, shape, w, ...rest }, ref) => {
    const width = shape ? getMax(w, h) : w
    const height = shape ? getMax(w, h) : h
    return (
      <S.Shape data-testid={dataTestId} ref={ref} shape={shape} {...rest} h={height} w={width}>
        {children}
      </S.Shape>
    )
  }
)

Shape.displayName = 'Shape'
