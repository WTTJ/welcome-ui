import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { system } from '@welcome-ui/system'
import { IconOptions } from '@welcome-ui/icon'

import unicodeMap from './unicode.json'

function getIconContentByName(name: StyledIcon['name']) {
  const content = unicodeMap[name]
  if (content) return content.replace('0x', '\\')
  // eslint-disable-next-line no-console
  console.warn(`Invalid icon name '${name}'`)
  return null
}

type StyledIcon = {
  name: keyof typeof unicodeMap
  size: IconOptions['size']
}

// stylelint-disable font-family-no-missing-generic-family-keyword
export const Icon = styled.i<StyledIcon>(
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
