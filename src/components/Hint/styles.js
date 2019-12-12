import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { getVariantStateColor } from '../../utils/variants'
import { system } from '../../utils/system'

export const Hint = styled.div(
  props => css`
    ${th('fields.hint')};
    color: ${getVariantStateColor(props.variant)};
    margin-top: sm;
    display: flex;
    align-items: center;
    ${system};
  `
)
