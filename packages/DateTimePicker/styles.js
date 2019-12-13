import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { StyledDatePicker } from '@welcome-ui/date-picker'
import { StyledTimePicker } from '@welcome-ui/time-picker'
import { IconWrapper } from '@welcome-ui/field'
import { StyledIcon } from '@welcome-ui/icon'
import { Wrapper as Select } from '@welcome-ui/select'
import { StyledButton } from '@welcome-ui/button'
import { StyledClearButton } from '@welcome-ui/clear-button'

import { wrapperSystem } from '../Core/utils/system'

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

const iconPlacementStyles = (placement, size, rest) => {
  if (placement === 'right') {
    return css`
      ${StyledDatePicker}, ${StyledTimePicker} {
        padding-right: ${`calc(1.5 * ${th(`fields.sizes.${size}.height`)(rest)})`};
      }

      ${IconWrapper} {
        &:not(:last-child) {
          right: ${th(`fields.sizes.${size}.height`)(rest)};
          width: ${`calc(0.5 * ${th(`fields.sizes.${size}.height`)(rest)})`};
          justify-content: flex-end;
        }

        &:only-of-type {
          right: 0.625rem;
        }
      }
    `
  }
  if (placement === 'left') {
    return css`
      ${StyledDatePicker}, ${StyledTimePicker} {
        padding-left: ${th(`fields.sizes.${size}.height`)(rest)};
      }
    `
  }
}

export const CustomInput = styled.div(({ focused, icon, iconPlacement, size, ...rest }) => {
  return css`
    position: relative;
    ${StyledDatePicker}, ${StyledTimePicker} {
      padding-right: ${th(`fields.sizes.${size}.height`)(rest)};
    }

    ${icon && iconPlacementStyles(iconPlacement, size, rest)};

    ${StyledClearButton} {
      z-index: ${focused ? 1 : null};
    }
  `
})

export const CustomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: lg;
  text-align: left;
  ${StyledButton} {
    width: 25;
    height: 25;
    ${StyledIcon} {
      width: 10;
      height: 10;
    }
  }
`

export const DateTimePicker = styled.div(
  ({ connected, datePickerOnly, timePickerOnly, width = 'auto' }) => css`
    position: relative;
    display: ${width === 'auto' ? 'inline-flex' : 'flex'};
    flex-wrap: nowrap;

    .react-datepicker-wrapper {
      flex-grow: 1;
      ${StyledDatePicker} {
        ${focusStyles};
        border-top-right-radius: ${datePickerOnly ? null : 0};
        border-bottom-right-radius: ${datePickerOnly ? null : 0};
      }
      ${StyledTimePicker} {
        ${focusStyles};
        border-top-left-radius: ${timePickerOnly ? null : 0};
        border-bottom-left-radius: ${timePickerOnly ? null : 0};
      }
    }

    .react-datepicker-wrapper:first-child:not(:only-child) {
      margin-right: -1px;
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

export const Selects = styled.div`
  display: flex;
  ${/* sc-selector */ Select}:first-child {
    margin-right: sm;
  }
`
