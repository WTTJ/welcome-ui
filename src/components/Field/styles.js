import styled, { css } from 'styled-components'

import { system } from '../../utils/utils'
import { Label as StyledLabel } from '../Label/styles'
import { radioTabStyles } from '../RadioTab/styles'
import { StyledFieldGroup } from '../FieldGroup/styles'
import { StyledToggle } from '../Toggle/styles'
import { StyledCheckbox } from '../InputCheckbox/styles'
import { get, getCss } from '../../theme/helpers'

const rowStyles = css`
  margin-right: ${get('space.sm')};
`

const columnStyles = css`
  margin-bottom: ${get('space.sm')};
`

const checkableFieldStyles = css`
  ${getCss('fields.checkablelabel.default')};
`

export const StyledField = styled.div(
  props => css`
    ${StyledFieldGroup} {
      margin-bottom: ${props.checkableField && get('space.xxs')};
    }
    ${StyledLabel} {
      ${props.flexDirection === 'row' && rowStyles};
      ${props.flexDirection === 'column' && columnStyles};
      ${props.checkableField && checkableFieldStyles};
      ${props.checked && getCss('fields.checkablelabel.checked')}
    }
    ${StyledToggle}, ${StyledCheckbox} {
      margin-right: ${get('space.xxs')};
    }
    ${props.fieldType === 'RadioTab' && radioTabStyles(props)}
    ${system};
  `
)
