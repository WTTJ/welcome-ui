import styled, { css, system, Theme } from '@xstyled/styled-components'
import { WuiProps } from '@welcome-ui/system'
import { cva } from '@welcome-ui/panda/css'
import { styled as styledPanda } from '@welcome-ui/panda/jsx'

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

export const iconStyles = cva({
  base: {
    '&[data-stroked="true"]': {
      '& g, & path': {
        stroke: 'inherit',
        fill: 'none',
      },
    },
    '&[data-stroked="false"]': {
      '& g, & path': {
        stroke: 'none',
      },
    },
  },
  variants: {
    size: {
      xs: {
        height: '12px',
        width: '12px',
      },
      sm: {
        height: '16px',
        width: '16px',
      },
      md: {
        height: '24px',
        width: '24px',
      },
      lg: {
        height: '32px',
        width: '32px',
      },
      xl: {
        height: '48px',
        width: '48px',
      },
      xxl: {
        height: '64px',
        width: '64px',
      },
    },
  },
})

export const IconPanda = styledPanda('svg', iconStyles)
