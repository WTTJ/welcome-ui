import styled, { css, system, th } from '@xstyled/styled-components'

import unicodeMap from './unicode.json'

import { IconOptions } from '@/Icon'

export type StyledIconProps = {
  name: keyof typeof unicodeMap
  size: IconOptions['size']
}

function getIconContentByName(name: StyledIconProps['name']) {
  const content = unicodeMap[name]
  if (content) return content.replace('0x', '\\')
  // eslint-disable-next-line no-console
  console.warn(`Invalid icon name '${name}'`)
  return null
}

export const Icon = styled.i<StyledIconProps>(
  ({ name, size = 'md' }) => css`
    display: inline-block;
    /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
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
