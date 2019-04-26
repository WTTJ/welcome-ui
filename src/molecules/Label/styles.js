import styled from 'styled-components'

import { getVariantColor } from '../../common/styles/form'
import helpers from '../../theme/helpers'

const { colors, gutter, textStyles } = helpers

export const Disabled = styled.div`
  display: inline-flex;
  margin-right: ${gutter('xxs')};
`

export const Required = styled.abbr`
  margin-left: ${gutter('xxs')};
  color: ${colors('primary')};
`

export const Variant = styled.div`
  display: inline-flex;
  margin-right: ${gutter('xxs')};
  color: ${props => getVariantColor(props.variant)};
  fill: ${props => getVariantColor(props.variant)};
`

export const Label = styled.label`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  ${textStyles('label')};
  color: ${colors('text', 'secondary')};
`

export default Label
