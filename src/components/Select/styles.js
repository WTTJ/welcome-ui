import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import Select from 'react-select'

import { fieldStyles } from '../../common/styles/form'
import { system } from '../../utils/'

export const StyledSelect = styled(Select)`
  ${system};

  .wui__control {
    ${fieldStyles};
    box-shadow: none;

    .wui__indicators svg {
      transform: rotate(0deg);
      transition: medium;
    }

    &.wui__control--is-focused,
    &.wui__control--menu-is-open {
      ${th('fields.focused')};
    }

    &.wui__control--menu-is-open {
      .wui__indicators svg {
        transform: rotate(180deg);
      }
    }
  }

  .wui__value-container {
    padding: 0;
  }

  .wui__indicator-separator {
    display: none;
  }

  .wui__indicator {
    padding: 0;
  }

  .wui__menu {
    ${fieldStyles};
    padding: 0;
    box-shadow: sm;
  }

  .wui__menu-list {
    padding: 0;
  }

  .wui__option {
    padding: md sm;
    transition: medium;
  }

  .wui__option--is-focused {
    ${th('fields.select.focused')};
  }

  .wui__option--is-selected,
  .wui__option--is-focused:active,
  .wui__option--is-focused.wui__option--is-selected {
    ${th('fields.select.selected')};
  }
`
