import styled, { css, system, Theme } from '@xstyled/styled-components'
import { WuiProps } from '@welcome-ui/system'

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

type StyledIconProps = Pick<IconOptions, 'size'> &
  Pick<IconOptions['content'], 'isFlag' | 'stroked'> &
  WuiProps &
  Partial<{ alt: string; title: string }>

export const Icon = styled('svg')<StyledIconProps>(({ isFlag, size = 'md', stroked, theme }) => {
  const formattedSize = theme.icons[size as keyof Theme['icons']] || size
  return css`
    ${!isFlag && (stroked ? iconSvgStrokedStyles : iconSvgFilledStyles)};
    width: ${formattedSize};
    height: ${formattedSize};
    ${system};
  `
})
