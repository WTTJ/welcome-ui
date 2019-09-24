import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { DatePicker } from '../DatePicker/styles'
import { TimePicker } from '../TimePicker/styles'
import { wrapperSystem } from '../../utils/system'
import { IconWrapper } from '../Field/styles'
import { Icon } from '../Icon/styles'
import { Wrapper as Select } from '../Select/styles'
import { Button } from '../Button/styles'
import { ClearButton } from '../ClearButton/styles'

// Only require CSS on client
if (typeof window !== 'undefined') {
  require('react-datepicker/dist/react-datepicker.css')
}

const focusStyles = css`
  &:focus {
    position: relative;
    z-index: 1;
  }
`

export const DateTimePicker = styled.div(
  ({ connected, datePickerOnly, timePickerOnly, width = 'auto' }) => css`
    position: relative;
    display: ${width === 'auto' ? 'inline-flex' : 'flex'};
    flex-wrap: nowrap;

    .react-datepicker-wrapper:first-child:not(:only-child) {
      margin-right: -1px;
    }

    .react-datepicker-wrapper {
      flex-grow: 1;
      ${DatePicker} {
        ${focusStyles};
        border-top-right-radius: ${datePickerOnly ? null : 0};
        border-bottom-right-radius: ${datePickerOnly ? null : 0};
      }
      ${TimePicker} {
        ${focusStyles};
        border-top-left-radius: ${timePickerOnly ? null : 0};
        border-bottom-left-radius: ${timePickerOnly ? null : 0};
      }
    }
    .react-datepicker__input-container {
      display: block;
    }

    .react-datepicker {
      font-family: inherit;
    }

    ${connected ? null : wrapperSystem};
  `
)

const iconPlacementStyles = (placement, size, rest) => {
  if (placement === 'right') {
    return css`
      ${IconWrapper}:not(:last-child) {
        right: ${th(`fields.sizes.${size}.height`)(rest)};
        width: ${`calc(0.5 * ${th(`fields.sizes.${size}.height`)(rest)})`};
        justify-content: flex-end;
      }

      ${DatePicker}, ${TimePicker} {
        padding-right: ${`calc(1.5 * ${th(`fields.sizes.${size}.height`)(rest)})`};
      }
    `
  }
  if (placement === 'left') {
    return css`
      ${DatePicker}, ${TimePicker} {
        padding-left: ${th(`fields.sizes.${size}.height`)(rest)};
      }
    `
  }
}

export const CustomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: lg;
  text-align: left;
  ${Button} {
    width: 25;
    height: 25;
    ${Icon} {
      width: 10;
      height: 10;
    }
  }
`

export const Selects = styled.div`
  display: flex;
  ${Select}:first-child {
    margin-right: sm;
  }
`

export const CustomInput = styled.div(({ focused, icon, iconPlacement, size, ...rest }) => {
  return css`
    position: relative;
    ${icon && iconPlacementStyles(iconPlacement, size, rest)};

    ${DatePicker}, ${TimePicker} {
      padding-right: ${th(`fields.sizes.${size}.height`)(rest)};
    }

    ${ClearButton} {
      z-index: ${focused ? 1 : null};
    }
  `
})
