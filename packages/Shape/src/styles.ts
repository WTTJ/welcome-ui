import styled, { css } from '@wttj/xstyled-styled-components'

import { ShapeOptions } from './index'

const shapeStyles = (shape: ShapeOptions['shape']) => css`
  border-radius: ${shape === 'circle' && '50%'};
`

export const Shape = styled.divBox(
  ({ shape }: ShapeOptions) => css`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    ${shape && shapeStyles(shape)}

    img {
      object-fit: cover;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
  `
)
