import styled, { css } from '@xstyled/styled-components'
import { system } from '@welcome-ui/system'
import { getMax } from '@welcome-ui/utils'
import { Shape as ShapeType } from 'Shape'
import { Box } from '@welcome-ui/box'

const shapeStyles = (w: string, h: string, shape: ShapeType) => css`
  width: ${getMax(w, h)};
  height: ${getMax(w, h)};
  border-radius: ${shape === 'circle' && '50%'};
`

export const Shape = styled(Box)<{ shape?: ShapeType }>(
  ({ h, shape, w }) => css`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    ${system}
    ${shape && shapeStyles(w as string, h as string, shape)}

  img {
      object-fit: cover;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
  `
)
