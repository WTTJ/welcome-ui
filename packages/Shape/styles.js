import styled, { css } from '@xstyled/styled-components'
import { system } from '@welcome-ui/system'
import { getMax } from '@welcome-ui/utils'

const shapeStyles = (w, h, shape) => css`
  width: ${getMax(w, h)};
  height: ${getMax(w, h)};
  border-radius: ${shape === 'circle' && '50%'};
`

export const Shape = styled.div(
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
