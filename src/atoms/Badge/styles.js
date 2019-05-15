import styled, { css } from 'styled-components'

import { getVariantColor } from '../../common/styles/form'
import { get, getCss } from '../../theme/helpers'

const getWithFallback = (props, key) => get(key, props[key])(props) || props[key] || null

export const Badge = styled.div(
  props => css`
    ${getCss('text', 'badge')};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: ${props.size};
    max-width: ${props.length === 1 ? props.size : '100%'};
    height: ${props.size};
    padding-right: ${props.length === 1 ? 0 : getWithFallback(props, 'padding')};
    padding-left: ${props.length === 1 ? 0 : getWithFallback(props, 'padding')};
    color: ${get('color', 'light', 'light')};
    font-size: ${getWithFallback(props, 'fontSize')};
    background-color: ${getVariantColor(props.variant)};
    border-radius: ${props.radius ? get('radii', props.radius) : props.size};
  `
)

export default Badge
