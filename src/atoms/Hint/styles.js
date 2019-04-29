import styled from 'styled-components'

import { getVariantColor } from '../../common/styles/form'
import { get } from '../../theme/helpers'

export const Hint = styled.div`
  font-family: ${get('fontFamily', 'texts')};
  color: ${props => getVariantColor(props.variant, get('color', 'text', 'tertiary'))};
  ${get('textStyles', 'hint')};
  margin-top: ${get('gutter', 'xs')};
`

export default Hint
