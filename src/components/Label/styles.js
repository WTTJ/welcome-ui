import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { getVariantStateColor, system } from '../../utils/'

export const Label = styled.label`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  line-height: 1;
  ${th('fields.label')};
  ${system};
`

export const Disabled = styled.div`
  display: inline-flex;
  margin-right: xxs;
`

export const Required = styled.abbr`
  margin-left: xxs;
  color: primary.500;
`

export const Variant = styled.div(
  props => css`
    display: inline-flex;
    margin-right: xxs;
    color: ${getVariantStateColor(props.variant)};
    fill: ${getVariantStateColor(props.variant)};
  `
)
