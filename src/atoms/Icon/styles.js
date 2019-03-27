import styled, { css } from 'styled-components'

import { color } from '../../utils/theme'

const iconSvgStrokedStyles = css`
  g, path {
    stroke: inherit;
    fill: none;
  }
`

const iconSvgFilledStyles = css`
  g, path {
    fill: inherit;
    stroke: none;
  }
`

export const IconSvg = styled.svg`
  ${({ stroked }) => stroked ? iconSvgStrokedStyles : iconSvgFilledStyles};
`