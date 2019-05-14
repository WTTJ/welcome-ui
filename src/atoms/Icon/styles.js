import styled, { css } from 'styled-components'

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

export const IconSvg = styled.svg`
  ${({ stroked }) => (stroked ? iconSvgStrokedStyles : iconSvgFilledStyles)};
`
