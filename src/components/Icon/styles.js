import styled, { css } from 'styled-components'

import { system } from '../../utils/utils'
import { get } from '../../theme/helpers'

const iconSvgStrokedStyles = css`
  g,
  path {
    stroke: inherit;
    fill: none;
  }
`

const iconSvgFilledStyles = css`
  g,
  path {
    fill: currentColor;
    stroke: none;
  }
`

export const IconSvg = styled.svg(
  ({ size = 'md', stroked, ...props }) => css`
    ${stroked ? iconSvgStrokedStyles : iconSvgFilledStyles};
    width: ${get(`icons.${size}`)(props)}px;
    height: ${get(`icons.${size}`)(props)}px;
    ${system};
  `
)
