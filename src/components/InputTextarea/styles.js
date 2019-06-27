import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { fieldStyles } from '../../common/styles/form'
import { system } from '../../utils/'

export const StyledTextarea = styled.textarea(
  () => css`
    ${fieldStyles};
    ${th('fields.textarea')};
    line-height: body1;
    padding: sm;
    ${system};
  `
)
