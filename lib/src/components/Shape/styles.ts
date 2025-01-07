import styled, { css, system } from '@xstyled/styled-components'

import { getMax } from '../../utils/get-max-width-height'
import { Box } from '../Box'

import { ShapeOptions } from './index'

const shapeStyles = (w: string, h: string, shape: ShapeOptions['shape']) => css`
  width: ${getMax(w, h)};
  height: ${getMax(w, h)};
  border-radius: ${shape === 'circle' && '50%'};
`

export const Shape = styled(Box)<ShapeOptions>(
  ({ h, shape, w }) => css`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      object-fit: cover;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    ${system};

    /* we must override shapeStyles (let this line under ${system}) */
    ${shape && shapeStyles(w as string, h as string, shape)}
  `
)
