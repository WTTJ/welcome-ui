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

export const IconSvg = styled.svg.attrs(({ size = 'md', ...props }) => ({
  width: get(`icons.${size}`)(props),
  height: get(`icons.${size}`)(props)
}))`
  ${({ stroked }) => (stroked ? iconSvgStrokedStyles : iconSvgFilledStyles)};
  ${system};
`
