import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../../utils/'

const getBlockHeight = props => `
  calc(${th.fontSize(props.variant)} * ${th.lineHeight(props.variant)} * ${props.lines})`

export const Text = styled.p(props => {
  const { lines, variant } = props
  const blockHeight = lines ? getBlockHeight(props) : null

  return css`
    ${th(`texts.${variant}`)};
    display: block; /* Fallback for non-webkit */
    height: ${blockHeight}; /* Fallback for non-webkit */

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lines || 'none'};
    overflow: hidden;

    ${system};
  `
})
