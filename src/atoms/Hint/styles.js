import styled, { css } from 'styled-components'

import { getVariantColor } from '../../common/styles/form'
import { get, getCss } from '../../theme/helpers'

export const Hint = styled.div(
  props => css`
    font-family: ${get('fontFamily', 'texts')};
    color: ${getVariantColor(props.variant, get('color', 'nude', 'default'))};
    ${getCss('text', 'hint')};
    margin-top: ${get('gutter', 'xs')};
  `
)

export default Hint
