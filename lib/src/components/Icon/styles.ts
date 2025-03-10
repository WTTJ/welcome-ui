import styled, { css } from '@xstyled/styled-components'

import { IconContent, IconOptions } from './index'

import { WuiProps } from '@/System'
import { ThemeValues } from '@/theme'

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

type StyledIconProps = Pick<IconOptions, 'size'> &
  Pick<IconContent, 'isFlag' | 'stroked'> &
  WuiProps &
  Partial<{ alt: string; title: string }>

export const Icon = styled.svgBox<StyledIconProps>(({ isFlag, size = 'md', stroked, theme }) => {
  const formattedSize = theme.icons[size as keyof ThemeValues['icons']] || size
  return css`
    ${!isFlag && (stroked ? iconSvgStrokedStyles : iconSvgFilledStyles)};
    width: ${formattedSize};
    height: ${formattedSize};
  `
})
