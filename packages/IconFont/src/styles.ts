import styled, { css, system, th } from '@xstyled/styled-components'
import { IconOptions } from '@welcome-ui/icon'
import { cva } from '@welcome-ui/panda/css'
import { styled as styledPanda } from '@welcome-ui/panda/jsx'

import unicodeMap from './unicode.json'

export type StyledIconProps = {
  name: keyof typeof unicodeMap
  size: IconOptions['size']
}

export function getIconContentByName(name: StyledIconProps['name']) {
  const content = unicodeMap[name]
  if (content) return content.replace('0x', '\\')
  // eslint-disable-next-line no-console
  console.warn(`Invalid icon name '${name}'`)
  return null
}

// stylelint-disable font-family-no-missing-generic-family-keyword
export const Icon = styled.i<StyledIconProps>(
  ({ name, size = 'md' }) => css`
    display: inline-block;
    font-family: icons;
    font-size: ${th(`icons.${size}`)};
    ${system};
    &::before {
      content: '${getIconContentByName(name)}';
      display: block;
      font-style: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `
)

export const iconStyles = cva({
  base: {
    display: 'inline-block',
    fontFamily: 'icon',
    '&::before': {
      content: 'attr(data-content)',
      display: 'block',
      fontStyle: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
      lineHeight: '1',
      fontSmoothing: 'antialiased',
      // '-moz-osx-font-smoothing': 'grayscale',
    },
  },
  variants: {
    size: {
      xs: {
        fontSize: '12px',
      },
      sm: {
        fontSize: '16px',
      },
      md: {
        fontSize: '24px',
      },
      lg: {
        fontSize: '32px',
      },
      xl: {
        fontSize: '48px',
      },
      xxl: {
        fontSize: '64px',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const IconPanda = styledPanda('i', iconStyles)
