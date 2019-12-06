import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../../utils/system'

const getBlockHeight = lines => css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${lines || 'none'};
  overflow: hidden;
`

export const Text = styled.p(
  ({ lines, underline, variant }) => css`
    ${th(`texts.${variant}`)};
    ${underline && th('underline')};
    display: block; /* Fallback for non-webkit */
    ${lines && lines !== Infinity && getBlockHeight(lines)}; /* Fallback for non-webkit */

    ${system};
  `
)
