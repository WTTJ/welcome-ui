import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../../utils/utils'

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

export const Icon = styled.svg(
  ({ size = 'md', stroked }) => css`
    ${stroked ? iconSvgStrokedStyles : iconSvgFilledStyles};
    width: ${th(`icons.${size}`)}px;
    height: ${th(`icons.${size}`)}px;
    ${system};
  `
)
