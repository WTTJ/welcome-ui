import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { fieldTypeStyles } from '../../common/styles/form'
import { system } from '../../utils/utils'

export const StyledTextarea = styled.textarea(
  () => css`
    ${fieldTypeStyles};
    ${th('fields.textarea')};
    line-height: body1;
    padding: sm;
    ${system};
  `
)
