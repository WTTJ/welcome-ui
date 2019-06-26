import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { getVariantStateColor, system } from '../../utils/'

export const Hint = styled.div(
  props => css`
    font-family: texts;
    color: ${getVariantStateColor(props.variant)};
    ${th('fields.hint')};
    margin-top: sm;
    ${system};
  `
)
