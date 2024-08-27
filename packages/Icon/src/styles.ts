import styled, { css } from '@xstyled/styled-components'

import { IconOptions } from './index'

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

type StyledIconProps = Partial<
  Pick<IconOptions, 'size'> &
    Pick<IconOptions['content'], 'isFlag' | 'stroked'> &
    Partial<{ alt: string; title: string }>
>

export const Icon = styled.svgBox<StyledIconProps>(({ isFlag, size = 'md', stroked, theme }) => {
  const formattedSize = theme.icons[size as keyof typeof theme.icons] || size
  return css`
    ${!isFlag && (stroked ? iconSvgStrokedStyles : iconSvgFilledStyles)};
    width: ${formattedSize};
    height: ${formattedSize};
  `
})
