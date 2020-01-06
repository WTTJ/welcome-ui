import styled, { css } from '@xstyled/styled-components'
import { system } from '@welcome-ui/system'
import { getMax } from '@welcome-ui/utils'

const shapeStyles = (width, height, shape) => css`
  width: ${getMax(width, height)};
  height: ${getMax(width, height)};
  border-radius: ${shape === 'circle' && '50%'};
`

export const Shape = styled.div(
  ({ height, shape, width }) => css`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    ${system}
    ${shape && shapeStyles(width, height, shape)}

  img {
      object-fit: cover;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
  `
)
