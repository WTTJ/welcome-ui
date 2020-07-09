import styled, { css } from '@xstyled/styled-components'
import { system } from '@welcome-ui/system'

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
    stroke: none;
  }
`

export const Icon = styled.svg(({ isFlag, size = 'md', stroked, theme }) => {
  const formattedSize = theme.icons[size] || size
  return css`
    ${!isFlag && (stroked ? iconSvgStrokedStyles : iconSvgFilledStyles)};
    width: ${formattedSize};
    height: ${formattedSize};
    ${system};
  `
})
