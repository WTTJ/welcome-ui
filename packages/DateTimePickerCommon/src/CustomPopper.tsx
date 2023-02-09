import React from 'react'
import styled, { css, CSSObject, th } from '@xstyled/styled-components'
import { cardStyles } from '@welcome-ui/utils'

import { datePickerStyles } from './datePickerStyles'

export const CustomPopper = ({
  children,
}: {
  children: React.ReactElement
}): React.ReactElement => {
  if (!children) {
    return null
  }
  // Get any styles passed via `popperProps`
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children: nested, modifiers, placement, ...popperProps } = children.props
  return <StyledCustomPopper popperStyles={popperProps}>{children}</StyledCustomPopper>
}

const StyledCustomPopper = styled.div(
  ({ popperStyles }: { popperStyles: CSSObject }) => css`
    ${datePickerStyles};
    .react-datepicker-popper {
      ${popperStyles};
    }
    .react-datepicker {
      padding: lg;
      font-family: inherit;
      ${cardStyles};

      &--time-only {
        padding: 0;
        .react-datepicker__time-box {
          border-radius: 0;
        }
      }

      &__time {
        background-color: inherit;
      }
    }

    .react-datepicker-time__header,
    .react-datepicker__triangle {
      display: none;
    }

    .react-datepicker__time-container {
      width: 100px;
      .react-datepicker__time .react-datepicker__time-box {
        width: 100%;
        ul.react-datepicker__time-list li.react-datepicker__time-list-item {
          height: auto;
          padding: sm;
        }
      }
    }

    .react-datepicker__header {
      padding: 0;
      background-color: light-900;
      border: none;
    }

    .react-datepicker__day,
    .react-datepicker__day-name,
    .react-datepicker__time-list-item {
      color: nude-700;
      font-weight: regular;
    }

    .react-datepicker__day {
      &,
      &-name {
        margin: 0.166rem 0.45rem;
      }
      &-name {
        text-transform: uppercase;
        font-weight: medium;
        font-size: xs;
        letter-spacing: 1px;
      }
      &--outside-month {
        color: nude-600;
      }
    }

    .react-datepicker__day--today {
      ${th('dateTimePickerCommon.item.today')};
    }

    .react-datepicker__day:hover,
    .react-datepicker__month-text:hover,
    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box
      ul.react-datepicker__time-list
      li.react-datepicker__time-list-item:hover {
      background-color: nude-100;
    }

    .react-datepicker__day,
    .react-datepicker__day--keyboard-selected,
    .react-datepicker__day--selected,
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--selected,
    .react-datepicker__month-text--keyboard-selected,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__month-text:hover {
      border-radius: 50%;
      &:hover {
        border-radius: 50%;
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
      ${th('dateTimePickerCommon.item.selected')};
      &:hover {
        ${th('dateTimePickerCommon.item.selected')};
      }
    }

    .react-datepicker__day-names,
    .react-datepicker__month {
      margin: 0 -0.45rem;
    }

    .react-datepicker__month-text--today,
    .react-datepicker__current-month,
    .react-datepicker-time__header,
    .react-datepicker-year-header {
      font-weight: medium;
    }
  `
)
