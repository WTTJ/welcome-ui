import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../../utils/system'

const getBlockHeight = ({ lines, variant }) => css`
  height: ${`calc(${th.fontSize(variant)} * ${th.lineHeight(variant)} * ${lines}`};
`

export const Text = styled.p(({ lines, underline, variant }) => {
  return css`
    ${th(`texts.${variant}`)};
    ${underline && th('underline')};
    display: block; /* Fallback for non-webkit */
    ${lines &&
      getBlockHeight({ lines, variant })} /* Fallback for non-webkit */

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lines || 'none'};
    overflow: hidden;

    ${system};
  `
})
