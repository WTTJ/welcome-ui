import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../../utils/utils'
import { Label as StyledLabel } from '../Label/styles'
import { radioTabStyles } from '../RadioTab/styles'
import { StyledFieldGroup } from '../FieldGroup/styles'
import { StyledToggle } from '../Toggle/styles'
import { StyledCheckbox } from '../InputCheckbox/styles'

const rowStyles = css`
  margin-right: sm;
`

const columnStyles = css`
  margin-bottom: sm;
`

const checkableFieldStyles = css`
  ${th('fields.checkablelabel.default')};
`

export const StyledField = styled.div(
  props => css`
    ${StyledFieldGroup} {
      margin-bottom: ${props.checkableField && 'xxs'};
    }
    ${StyledLabel} {
      ${props.flexDirection === 'row' && rowStyles};
      ${props.flexDirection === 'column' && columnStyles};
      ${props.checkableField && checkableFieldStyles};
      ${props.checked && th('fields.checkablelabel.checked')}
    }
    ${StyledToggle}, ${StyledCheckbox} {
      margin-right: xxs;
    }
    ${props.fieldType === 'RadioTab' && radioTabStyles(props)}
    ${system};
  `
)
