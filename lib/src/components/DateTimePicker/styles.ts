import styled, { css, system } from '@xstyled/styled-components'

import { StyledDatePicker, StyledTimePicker } from '../DateTimePickerCommon'

const focusStyles = css`
  &:focus {
    position: relative;
    z-index: 1;
  }
`

export const DateTimePicker = styled.divBox`
  position: relative;
  display: inline-flex;
  flex-wrap: nowrap;

  .react-datepicker-wrapper {
    flex-grow: 1;
    ${StyledDatePicker} {
      ${focusStyles};
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    ${StyledTimePicker} {
      ${focusStyles};
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
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

  ${system};
`
