import type { CreateWuiProps } from '@old/System'
import { forwardRef } from '@old/System'

import * as S from './styles'

export interface ShapeOptions {
  shape?: 'circle' | 'square'
}

export type ShapeProps = CreateWuiProps<'div', ShapeOptions>

export const Shape = forwardRef<'div', ShapeProps>(
  ({ children, dataTestId, shape, ...rest }, ref) => (
    <S.Shape data-testid={dataTestId} ref={ref} shape={shape} {...rest}>
      {children}
    </S.Shape>
  )
)

Shape.displayName = 'Shape'
