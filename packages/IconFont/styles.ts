import styled, { css, DefaultTheme } from 'styled-components'
import { system } from '@welcome-ui/system'

import unicodeMap from './unicode.json'

export type StyledIconProps = {
  name: keyof typeof unicodeMap
  size: keyof DefaultTheme['icons']
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
  ({ name, size = 'md', theme }) => css`
    display: inline-block;
    font-family: icons;
    font-size: ${theme.icons[size]};
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
