import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { wrapperSystem } from '../../utils/'
import { Label } from '../Label/styles'
import { radioTabStyles } from '../RadioTab/styles'
import { FieldGroup } from '../FieldGroup/styles'

const rowStyles = css`
  margin-right: sm;
`

const columnStyles = css`
  margin-bottom: sm;
`

const checkableFieldStyles = css`
  ${th('fields.checkablelabel.default')};
  margin-bottom: sm;
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
    ${props.fieldType === 'RadioTab' && radioTabStyles(props)}
    ${wrapperSystem};
  `
)

export const IconWrapper = styled.div(
  ({ iconPlacement, size, ...rest }) => css`
    position: absolute;
    top: 0;
    left: ${iconPlacement === 'left' ? 0 : null};
    right: ${iconPlacement === 'right' ? 0 : null};
    bottom: 0;
    display: flex;
    width: ${size ? th(`fields.sizes.${size}.height`)(rest) : null};
    justify-content: center;
    align-items: center;
    pointer-events: none;
  `
)

export const Input = styled.div`
  flex-shrink: 0;
`

export const Content = styled.div``
