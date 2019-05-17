import styled, { css } from 'styled-components'
import { get } from '../../theme/helpers'

// common form styles
import { fieldTypeStyles } from '../../common/styles/form'

export const StyledTextarea = styled.textarea(
  props => css`
    ${fieldTypeStyles};
    min-height: calc(${get('gutter.xxl')} * 2);
    line-height: ${get('fontSize.body1')};
    padding: ${get('gutter.xs')};
  `
)
