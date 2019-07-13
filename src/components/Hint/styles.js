import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { getVariantStateColor, system } from '../../utils/'

export const Hint = styled.div(
  props => css`
    ${th('fields.hint')};
    color: ${getVariantStateColor(props.variant)};
    margin-top: sm;
    ${system};
  `
)
