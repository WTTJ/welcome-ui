import styled, { css } from '@xstyled/styled-components'

export const CustomPopper = styled.div(
  ({ zIndex }) =>
    css`
      .react-datepicker-popper {
        z-index: ${zIndex};
      }
      .react-datepicker {
        padding: lg;
        font-family: inherit;
        border-color: nude.200;
        &--time-only {
          padding: 0;
          .react-datepicker__time-box {
            border-radius: 0;
          }
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
        background-color: light.100;
        border: none;
      }

      .react-datepicker__day,
      .react-datepicker__day-name,
      .react-datepicker__time-list-item {
        color: nude.800;
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
          font-size: meta2;
          letter-spacing: 1px;
        }
        &--outside-month {
          color: nude.600;
        }
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
        color: light.100;
        font-weight: bold;
        background-color: primary.500;
        &:hover {
          color: light.100;
          font-weight: bold;
          background-color: primary.500;
        }
      }

      .react-datepicker__day-names,
      .react-datepicker__month {
        margin: 0 -0.45rem;
      }

      .react-datepicker__day--today {
        font-weight: bold;
      }

      .react-datepicker__month-text--today,
      .react-datepicker__current-month,
      .react-datepicker-time__header,
      .react-datepicker-year-header {
        font-weight: medium;
      }
    `
)
