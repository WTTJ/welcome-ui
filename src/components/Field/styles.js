import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../../utils/'
import { Label } from '../Label/styles'
import { radioTabStyles } from '../RadioTab/styles'
import { FieldGroup } from '../FieldGroup/styles'
import { InputRadio } from '../InputRadio/styles'
import { InputCheckbox } from '../InputCheckbox/styles'
import { Toggle } from '../Toggle/styles'

const rowStyles = css`
  margin-right: sm;
`

const columnStyles = css`
  margin-bottom: sm;
`

const checkableFieldStyles = css`
  ${th('fields.checkablelabel.default')};
`

export const Field = styled.div(
  props => css`
    ${FieldGroup} {
      margin-bottom: ${props.checkableField && 'xxs'};
    }
    ${Label} {
      ${props.flexDirection === 'row' && rowStyles};
      ${props.flexDirection === 'column' && columnStyles};
      ${props.checkableField && checkableFieldStyles};
      ${props.checked && th('fields.checkablelabel.checked')}
    }
    ${Toggle}, ${InputCheckbox}, ${InputRadio} {
      margin-right: xxs;
    }
    ${props.fieldType === 'RadioTab' && radioTabStyles(props)}
    ${system};
  `
)
