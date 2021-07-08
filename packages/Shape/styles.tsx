import styled, { css, HeightProps, SystemProps, WidthProps } from '@xstyled/styled-components'
import { system } from '@welcome-ui/system'
import { getMax } from '@welcome-ui/utils'
import { ShapeType } from 'Shape'

const shapeStyles = (w: WidthProps['w'], h: HeightProps['h'], shape: ShapeType) => css`
  width: ${getMax(w, h)};
  height: ${getMax(w, h)};
  border-radius: ${shape === 'circle' && '50%'};
`

interface ShapeProps {
  shape: ShapeType
}

export const Shape = styled.div<ShapeProps & SystemProps>(
  ({ h, shape, w }) => css`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    ${system}
    ${shape && shapeStyles(w, h, shape)}

  img {
      object-fit: cover;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
  `
)
