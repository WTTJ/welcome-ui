import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'
import { fieldTypeStyles } from '../../common/styles/form'
import { system } from '../../utils/utils'

export const StyledTextarea = styled.textarea(
  () => css`
    ${fieldTypeStyles};
    ${getCss('fields.textarea')};
    line-height: ${get('fontSizes.body1')};
    padding: ${get('space.sm')};
    ${system};
  `
)
