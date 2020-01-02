import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { system } from '@welcome-ui/system'

import { getVariantStateColor } from '../Core/utils/variants'

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
