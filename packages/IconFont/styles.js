import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { system } from '@welcome-ui/system'

import unicodeMap from './unicode.json'

// stylelint-disable font-family-no-missing-generic-family-keyword
export const Icon = styled.i(
  ({ name, size = 'md' }) => css`
    display: inline-block;
    font-family: icons;
    font-size: ${th(`icons.${size}`)};
    ${system};
    &::before {
      content: '${unicodeMap[name].replace('0x', '\\')}';
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
