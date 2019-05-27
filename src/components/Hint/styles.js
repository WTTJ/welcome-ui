import styled, { css } from 'styled-components'

import { getVariantStateColor } from '../../utils/variants'
import { get, getCss } from '../../theme/helpers'

export const Hint = styled.div(
  props => css`
    font-family: ${get('fontFamilies.texts')};
    color: ${getVariantStateColor(props.variant)};
    ${getCss('fields.hint')};
    margin-top: ${get('space.sm')};
  `
)
