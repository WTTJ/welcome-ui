import styled, { css } from 'styled-components'

import { system } from '../../utils/utils'
import { getVariantColor } from '../../utils/variants'
import { get, getCss } from '../../theme/helpers'

const oneCharacterStyles = size => css`
  max-width: ${size};
  padding-right: 0;
  padding-left: 0;
`

export const StyledBadge = styled.div(
  props => css`
    ${getCss('badges.default')};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: ${props.size};
    max-width: 100%;
    height: ${props.size};
    padding: 0 ${get('space.sm')};
    color: ${get('colors.light.200')};
    background-color: ${getVariantColor(props.variant)};
    border-radius: ${props.size};
    ${system};
    ${props.length === 1 && oneCharacterStyles(props.size)};
  `
)
