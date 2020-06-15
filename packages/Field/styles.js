import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { StyledLabel } from '@welcome-ui/label'
import { StyledFieldGroup } from '@welcome-ui/field-group'
import { filterFieldComponent, system, wrapperSystem } from '@welcome-ui/system'

const rowStyles = css`
  margin-right: sm;
`

const columnStyles = css`
  margin-bottom: sm;
`

const checkableFieldStyles = css`
  ${th('defaultFields.checkablelabel.default')};
  margin-bottom: sm;
`

const FILTER_PROPS = [
  'options',
  'value',
  'renderMultiple',
  'renderOption',
  'itemToString',
  'search',
  'timeIntervals',
  'onAddFile',
  'onRemoveFile',
  'showMonthDropdown',
  'showYearDropdown',
  'dateFormat',
  'maxDate',
  'yearDropdownItemNumber'
]

export const Field = styled(filterFieldComponent('div', FILTER_PROPS))(
  props => css`
    ${StyledFieldGroup} {
      margin-bottom: ${props.checkableField && 'xxs'};
    }
    ${StyledLabel} {
      ${props.flexDirection === 'row' && rowStyles};
      ${props.flexDirection === 'column' && columnStyles};
      ${props.checkableField && checkableFieldStyles};
      ${props.checked && th('defaultFields.checkablelabel.checked')}
    }
    ${wrapperSystem};
  `
)

export const IconWrapper = styled.div(
  ({ iconPlacement, size, ...rest }) => css`
    position: absolute;
    top: 0;
    left: ${iconPlacement === 'left' ? 0 : 'auto'};
    right: ${iconPlacement === 'right' ? 0 : 'auto'};
    bottom: 0;
    display: flex;
    width: ${size ? th(`defaultFields.sizes.${size}.height`)(rest) : null};
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
