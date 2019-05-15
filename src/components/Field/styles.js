import styled, { css } from 'styled-components'

import { StyledLabel } from '../Label/styles'
import { radioTabStyles } from '../RadioTab/styles'
import { StyledToggle } from '../Toggle/styles'
import { StyledInputCheckbox } from '../InputCheckbox/styles'

import { get } from '../../theme/helpers'

export const StyledField = styled.div(
  props => css`
    ${StyledLabel} {
      margin-right: ${props.direction === 'row' ? get('gutter', 'xxs') : null};
      margin-bottom: ${props.direction === 'column' ? get('gutter', 'xxs') : null};
    }
    ${StyledToggle}, ${StyledInputCheckbox} {
      margin-right: ${get('gutter', 'xxs')};
    }
    ${props.fieldType === 'radioTab' && radioTabStyles(props)}
  `
)
