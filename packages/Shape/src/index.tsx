import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { type HTMLStyledProps, styled } from '@welcome-ui/panda/jsx'
import { shape, type ShapeVariantProps } from '@welcome-ui/panda/recipes'

import * as S from './styles'

export interface ShapeOptions {
  shape?: 'square' | 'circle'
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

export type ShapePandaOptions = ShapeVariantProps
export type ShapePandaProps = HTMLStyledProps<'div'> & ShapePandaOptions

const StyledShapePanda = styled('div', shape)

export const ShapePanda = React.forwardRef<HTMLDivElement, ShapePandaProps>(
  ({ children, h, shape, style, w, ...rest }, ref) => {
    const styles = { ...style }

    if (shape === 'circle') {
      const size = `max(${w}, ${h})`
      styles['width'] = size
      styles['height'] = size
    }

    return (
      <StyledShapePanda h={h} ref={ref} shape={shape} style={styles} w={w} {...rest}>
        {children}
      </StyledShapePanda>
    )
  }
)
