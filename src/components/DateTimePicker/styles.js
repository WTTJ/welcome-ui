import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import ReactDatePicker from 'react-datepicker'

import { componentSystem, system, wrapperSystem } from '../../utils/'
import { fieldStyles } from '../../common/styles/form'

// Only require CSS on client
if (typeof window !== 'undefined') {
  require('react-datepicker/dist/react-datepicker.css')
}

const overridingStyles = css`
  .react-datepicker {
    font-family: inherit;
  }
`

export const DatePicker = styled(ReactDatePicker)(
  ({ connected }) => css`
    ${fieldStyles};
    ${connected ? componentSystem : system};
  `
)

export const TimePicker = styled(ReactDatePicker)(
  ({ connected }) => css`
    ${fieldStyles};
    text-align: center;
    ${connected ? componentSystem : system};
  `
)

export const DateTimePicker = styled.div(
  ({ connected, datePickerOnly, focusedInput, timePickerOnly }) => css`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    z-index: ${focusedInput ? 1 : 'auto'};

    .react-datepicker-wrapper:first-child {
      margin-right: -1px;
      z-index: ${focusedInput === 'date' ? 1 : null};
    }

    .react-datepicker-wrapper:last-child {
      z-index: ${focusedInput === 'time' ? 1 : null};
    }

    .react-datepicker-wrapper {
      position: relative;
      ${DatePicker} {
        border-top-right-radius: ${datePickerOnly ? null : 0};
        border-bottom-right-radius: ${datePickerOnly ? null : 0};
      }
      ${TimePicker} {
        border-top-left-radius: ${timePickerOnly ? null : 0};
        border-bottom-left-radius: ${timePickerOnly ? null : 0};
      }
    }
    ${overridingStyles};
    ${connected ? null : wrapperSystem};
  `
)

export const CustomInput = styled.div(({ icon, size, ...rest }) => {
  return css`
    position: relative;
    ${DatePicker}, ${TimePicker} {
      padding-left: ${icon ? th(`fields.sizes.${size}.height`)(rest) : null};
    }
  `
})

export const Popper = styled.div`
  ${overridingStyles}

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

  .react-datepicker {
    border-color: nude.300;
  }

  .react-datepicker__header {
    background-color: nude.100;
    border-color: nude.300;
  }

  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::before {
    border-bottom-color: nude.300;
  }

  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item:hover {
    background-color: nude.100;
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected,
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected:hover,
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

  .react-datepicker__navigation--next {
    border-left-color: nude.500;

    &:hover {
      border-left-color: nude.600;
    }
  }

  .react-datepicker__navigation--previous {
    border-right-color: nude.500;

    &:hover {
      border-right-color: nude.600;
    }
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

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
    height: auto;
    padding: 10;
  }

  .react-datepicker--time-only .react-datepicker__time-box {
    border-radius: 0;
  }
`
