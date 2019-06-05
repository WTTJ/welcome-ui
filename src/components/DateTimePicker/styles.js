import styled, { css } from 'styled-components'

import { get } from '../../theme/helpers'
import { StyledDatePicker as DatePicker } from '../DatePicker/styles'
import { StyledTimePicker as TimePicker } from '../TimePicker/styles'

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
    font-weight: ${get('fontWeights.medium')};
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
    background-color: ${get('colors.primary.500')};
    &:hover {
      background-color: ${get('colors.primary.500')};
    }
  }
`

export const DateTimePicker = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  .react-datepicker-wrapper {
    position: relative;
    ${DatePicker} {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    ${TimePicker} {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  ${overridingStyles};
`
