import styled, { css } from 'styled-components'

import { system } from '../../utils/utils'
import { StyledLabel } from '../Label/styles'
import { radioTabStyles } from '../RadioTab/styles'
import { StyledToggle } from '../Toggle/styles'
import { StyledInputCheckbox } from '../InputCheckbox/styles'
import { get, getCss } from '../../theme/helpers'

const rowStyles = css`
  margin-right: ${get('space.sm')};
`

const columnStyles = css`
  margin-bottom: ${get('space.sm')};
`

const checkableFieldStyles = css`
  ${getCss('fields.checkablelabel.default')};
  margin-right: 0;
`

export const StyledField = styled.div(
  props => css`
    ${StyledLabel} {
      ${props.flexDirection === 'row' && rowStyles};
      ${props.flexDirection === 'column' && columnStyles};
      ${props.checkableField && checkableFieldStyles};
      ${props.checked && getCss('fields.checkablelabel.checked')}
    }
    ${StyledToggle}, ${StyledInputCheckbox} {
      margin-right: ${get('space.xxs')};
    }
    ${props.fieldType === 'radioTab' && radioTabStyles(props)}
    ${system};
  `
)
