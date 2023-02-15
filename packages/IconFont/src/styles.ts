import styled, { css, system, th } from '@xstyled/styled-components'
import { IconOptions } from '@welcome-ui/icon'

import unicodeMap from './unicode.json'

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
