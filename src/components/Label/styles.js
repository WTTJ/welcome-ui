import styled, { css } from 'styled-components'

import { getVariantColor } from '../../utils/variants'
import { get, getCss } from '../../theme/helpers'

export const Disabled = styled.div`
  display: inline-flex;
  margin-right: ${get('gutter.xxs')};
`

export const Required = styled.abbr`
  margin-left: ${get('gutter.xxs')};
  color: ${get('color.primary.default')};
`

export const Variant = styled.div(
  props => css`
    display: inline-flex;
    margin-right: ${get('gutter.xxs')};
    color: ${getVariantColor(props.variant)};
    fill: ${getVariantColor(props.variant)};
  `
)

export const StyledLabel = styled.label`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  ${getCss('text.label')};
  color: ${get('color.dark.default')};
`
