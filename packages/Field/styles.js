import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { StyledLabel } from '@welcome-ui/label'

import { filterComponent, system, wrapperSystem } from '../utils/system'
// import { FieldGroup } from '../FieldGroup/styles'

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

export const Field = styled(filterComponent('div', ['options', 'value', 'renderMultiple']))(
  props => css`
    /* ${FieldGroup} {
      margin-bottom: ${props.checkableField && 'xxs'};
    } */
    ${StyledLabel} {
      ${props.flexDirection === 'row' && rowStyles};
      ${props.flexDirection === 'column' && columnStyles};
      ${props.checkableField && checkableFieldStyles};
      ${props.checked && th('fields.checkablelabel.checked')}
    }
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
    transition: medium;
    transition-timing-function: primary;
    ${system};
  `
)

export const Input = styled.div`
  flex-shrink: 0;
`

export const Content = styled.div``
