import styled, { css } from 'styled-components'

import { getVariantColor } from '../../utils/variants'
import { get, getCss } from '../../theme/helpers'

export const StyledHint = styled.div(
  props => css`
    font-family: ${get('fontFamily.texts')};
    color: ${getVariantColor(props.variant)};
    ${getCss('fields.hint')};
    margin-top: ${get('spaces.sm')};
  `
)
