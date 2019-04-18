import styled from 'styled-components'

import { getVariantColor } from '../../common/styles/form'
import helpers from '../../theme/helpers'

const { colors, fontSize, padding, radius, textStyles } = helpers

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${props => props.size};
  max-width: ${props => (props.length === 1 ? props.size : '100%')};
  height: ${props => props.size};
  padding-right: ${props =>
    props.length === 1 ? 0 : padding(props.padding)(props) || props.padding || null};
  padding-left: ${props =>
    props.length === 1 ? 0 : padding(props.padding)(props) || props.padding || null};
  color: ${colors('white')};
  ${textStyles('badge')};
  font-size: ${props => fontSize(props.fontsize)(props) || props.fontsize || null};
  background-color: ${props => getVariantColor(props.variant)};
  border-radius: ${props => radius(props.radius)(props) || props.radius || props.size};
`

export default Badge
