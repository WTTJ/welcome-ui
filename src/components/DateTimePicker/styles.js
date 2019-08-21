import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import ReactDatePicker from 'react-datepicker'

import { componentSystem, wrapperSystem } from '../../utils/'
import { fieldStyles } from '../../common/styles/form'
import { IconWrapper } from '../Field/styles'
import { Icon } from '../Icon/styles'

// Only require CSS on client
if (typeof window !== 'undefined') {
  require('react-datepicker/dist/react-datepicker.css')
}

const overridingStyles = css`
  .react-datepicker {
    font-family: inherit;
  }
`

const focusStyles = css`
  &:focus {
    position: relative;
    z-index: 1;

    ~ ${IconWrapper}:last-child ${Icon} {
      transform: rotate3d(0, 0, 1, 180deg);
    }
  }
`

export const DatePicker = styled(ReactDatePicker)`
  ${fieldStyles};
  ${focusStyles};
  ${componentSystem};
`

export const TimePicker = styled(ReactDatePicker)`
  ${fieldStyles};
  text-align: center;
  ${focusStyles};
  ${componentSystem};
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
        border-top-right-radius: ${datePickerOnly ? null : 0};
        border-bottom-right-radius: ${datePickerOnly ? null : 0};
      }
      ${TimePicker} {
        border-top-left-radius: ${timePickerOnly ? null : 0};
        border-bottom-left-radius: ${timePickerOnly ? null : 0};
      }
    }
    .react-datepicker__input-container {
      display: block;
    }
    ${overridingStyles};
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

export const CustomInput = styled.div(({ focused, icon, iconPlacement, size, ...rest }) => {
  return css`
    position: relative;
    ${icon && iconPlacementStyles(iconPlacement, size, rest)};

    ${DatePicker}, ${TimePicker} {
      padding-right: ${th(`fields.sizes.${size}.height`)(rest)};
    }

    ${Icon} {
      transition: medium;
      z-index: ${focused ? 2 : null};
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

  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    top: 3px;
    transform: scale(0.5);
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

  .react-datepicker__header__dropdown {
    padding: sm 0;
  }

  .react-datepicker__month-dropdown-container,
  .react-datepicker__year-dropdown-container {
    padding: sm;
    background-color: light.100;
    border: ${th.borderWidth('sm')} solid;
    border-color: nude.300;
    border-radius: sm;
    text-align: left;

    &:active {
      border-color: primary.500;
    }
  }

  .react-datepicker__year-dropdown,
  .react-datepicker__month-dropdown {
    background-color: light.100;
  }

  .react-datepicker__year-option,
  .react-datepicker__month-option {
    padding: xs;

    &:hover {
      background-color: nude.100;
    }

    &.react-datepicker__year-option--selected_year,
    &.--selected_month {
      background-color: primary.500;
      color: light.100;
    }
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
    outline: none;
    border-left-color: nude.500;

    &:hover {
      border-left-color: nude.600;
    }
  }

  .react-datepicker__navigation--previous {
    outline: none;
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
