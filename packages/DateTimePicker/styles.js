import styled, { css } from '@xstyled/styled-components'
import { S } from '@welcome-ui/date-time-picker-common'
import { wrapperSystem } from '@welcome-ui/system'

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

    .react-datepicker-wrapper {
      flex-grow: 1;
      ${S.DatePicker} {
        ${focusStyles};
        border-top-right-radius: ${datePickerOnly ? null : 0};
        border-bottom-right-radius: ${datePickerOnly ? null : 0};
      }
      ${S.TimePicker} {
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
