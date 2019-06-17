import styled, { css } from '@xstyled/styled-components'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { fieldTypeStyles } from '../../common/styles/form'

const overridingStyles = css`
  .react-datepicker-wrapper:first-child {
    margin-right: -1px;
    z-index: ${props => (props.focusedInput === 'date' ? 1 : null)};
  }

  .react-datepicker-wrapper:last-child {
    z-index: ${props => (props.focusedInput === 'time' ? 1 : null)};
  }

  .react-datepicker {
    font-family: inherit;
  }

  .react-datepicker--time-only .react-datepicker__time-box {
    border-radius: 0;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected,
  .react-datepicker__day--today,
  .react-datepicker__month-text--today,
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    font-weight: medium;
  }
  .react-datepicker__time-container {
    width: 100px;
    .react-datepicker__time .react-datepicker__time-box {
      width: 100%;
    }
  }
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected,
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range {
    background-color: primary.500;
    &:hover {
      background-color: primary.500;
    }
  }
`

export const DatePicker = styled(ReactDatePicker)`
  ${fieldTypeStyles};
`

export const TimePicker = styled(ReactDatePicker)`
  ${fieldTypeStyles};
  text-align: center;
`

export const DateTimePicker = styled.div(
  props => css`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    z-index: ${props.focusedInput ? 20 : 'auto'};
    .react-datepicker-wrapper {
      position: relative;
      ${DatePicker} {
        border-top-right-radius: ${props.datePickerOnly ? null : 0};
        border-bottom-right-radius: ${props.datePickerOnly ? null : 0};
      }
      ${TimePicker} {
        border-top-left-radius: ${props.timePickerOnly ? null : 0};
        border-bottom-left-radius: ${props.timePickerOnly ? null : 0};
      }
    }

    ${overridingStyles};
  `
)
