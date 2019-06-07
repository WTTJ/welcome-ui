import styled, { css } from 'styled-components'

import { system } from '../../utils/utils'
import { get, getCss } from '../../theme/helpers'

const getBlockHeight = props =>
  `calc(${get(`fontSizes.${props.variant}`)(props)} * ${get(`lineHeights.${props.variant}`)(
    props
  )} * ${props.lines})`

export const StyledText = styled.p(props => {
  const { lines, variant } = props
  const blockHeight = lines ? getBlockHeight(props) : null

  return css`
    ${getCss(`texts.${variant}`)};
    display: block; /* Fallback for non-webkit */
    height: ${blockHeight}; /* Fallback for non-webkit */

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lines || 'none'};
    overflow: hidden;

    ${system};
  `
})
