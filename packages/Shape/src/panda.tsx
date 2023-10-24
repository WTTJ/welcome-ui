import React from 'react'
import { type HTMLStyledProps, styled } from '@welcome-ui/panda/jsx'
import { shape, type ShapeVariantProps } from '@welcome-ui/panda/recipes'

/**
 * @experimental panda version
 */
export type ShapePandaOptions = ShapeVariantProps
/**
 * @experimental panda version
 */
export type ShapePandaProps = HTMLStyledProps<'div'> & ShapePandaOptions

/**
 * @experimental panda version
 */
const StyledShapePanda = styled('div', shape)

/**
 * @experimental panda version
 */
export const ShapePanda = React.forwardRef<HTMLDivElement, ShapePandaProps>(
  ({ children, h, shape, style = {}, w, ...rest }, ref) => {
    if (shape) {
      const size = `max(${w}, ${h})`
      style.width = size
      style.height = size
    }

    return (
      <StyledShapePanda h={h} ref={ref} shape={shape} style={style} w={w} {...rest}>
        {children}
      </StyledShapePanda>
    )
  }
)

ShapePanda.displayName = 'ShapePanda'
