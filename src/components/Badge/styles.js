import styled, { css } from 'styled-components'

import { getVariantColor } from '../../utils/variants'
import { get, getCss } from '../../theme/helpers'

const getPadding = props => {
  if (props.length === 1) {
    return 0
  }
  if (props.padding) {
    return get(`padding.${props.padding}`, props.padding)
  }
  return get('padding.xs')
}

export const StyledBadge = styled.div(
  props => css`
    ${getCss('text.badge')};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: ${props.size};
    max-width: ${props.length === 1 ? props.size : '100%'};
    height: ${props.size};
    padding-right: ${getPadding(props)};
    padding-left: ${getPadding(props)};
    color: ${get('color.light.light')};
    font-size: ${props.fontSize ? props.fontSize : null};
    background-color: ${getVariantColor(props.variant)};
    border-radius: ${props.radius ? get(`radii.${props.radius}`) : props.size};
  `
)
