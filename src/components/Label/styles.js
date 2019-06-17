import styled, { css } from 'styled-components'

import { getVariantStateColor } from '../../utils/variants'
import { get, getCss } from '../../theme/helpers'
import { system } from '../../utils/utils'

export const Label = styled.label`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  ${getCss('fields.label')};
  ${system};
`

export const Disabled = styled.div`
  display: inline-flex;
  margin-right: ${get('space.xxs')};
`

export const Required = styled.abbr`
  margin-left: ${get('space.xxs')};
  color: ${get('colors.primary.500')};
`

export const Variant = styled.div(
  props => css`
    display: inline-flex;
    margin-right: ${get('space.xxs')};
    color: ${getVariantStateColor(props.variant)};
    fill: ${getVariantStateColor(props.variant)};
  `
)
