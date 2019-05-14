import styled, { css } from 'styled-components'

import { getVariantColor } from '../../common/styles/form'
import { get } from '../../theme/helpers'

export const Badge = styled.div(
  props => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: ${props.size};
    max-width: ${props.length === 1 ? props.size : '100%'};
    height: ${props.size};
    padding-right: ${props.length === 1
      ? 0
      : get('padding', props.padding)(props) || props.padding || null};
    padding-left: ${props.length === 1
      ? 0
      : get('padding', props.padding)(props) || props.padding || null};
    color: ${get('color', 'light', 'light')};
    ${get('text', 'badge')};
    font-size: ${get('fontSize', props.fontsize)(props) || props.fontsize || null};
    background-color: ${getVariantColor(props.variant)};
    border-radius: ${props.radius ? get('radius', props.radius) : props.size};
  `
)

export default Badge
