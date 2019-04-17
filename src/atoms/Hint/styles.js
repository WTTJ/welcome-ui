import styled from 'styled-components'

import { getVariantColor } from '../../common/styles/form'
import helpers from '../../theme/helpers'

const { colors, fontFamily, gutter, textStyles } = helpers

export const Hint = styled.div`
  font-family: ${fontFamily('texts')};
  color: ${props => getVariantColor(props.variant, colors('text', 'tertiary'))};
  ${textStyles('hint')};
  margin-top: ${gutter('xs')};
`

export default Hint
