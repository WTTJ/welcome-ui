import styled, { css } from '@xstyled/styled-components'

import type { WuiProps } from '@old/System'
import type { ThemeValues } from '@old/theme'

import type { IconContent, IconOptions } from './index'

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

type StyledIconProps = Partial<{ alt: string; title: string }> &
  Pick<IconContent, 'isFlag' | 'stroked'> &
  Pick<IconOptions, 'size'> &
  WuiProps

export const Icon = styled.svgBox<StyledIconProps>(({ isFlag, size = 'md', stroked, theme }) => {
  const formattedSize = theme.icons[size as keyof ThemeValues['icons']] || size
  return css`
    ${!isFlag && (stroked ? iconSvgStrokedStyles : iconSvgFilledStyles)};
    width: ${formattedSize};
    height: ${formattedSize};
  `
})
