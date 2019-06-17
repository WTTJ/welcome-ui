import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { getVariantStateColor } from '../../utils/variants'
import { system } from '../../utils/utils'

export const Hint = styled.div(
  props => css`
    font-family: texts;
    color: ${getVariantStateColor(props.variant)};
    ${th('fields.hint')};
    margin-top: sm;
    ${system};
  `
)
