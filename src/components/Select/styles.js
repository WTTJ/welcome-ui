import styled from 'styled-components'
import Select from 'react-select'

import { get, getCss } from '../../theme/helpers'
import { fieldTypeStyles } from '../../common/styles/form'
import { system } from '../../utils/utils'

export const StyledSelect = styled(Select)`
  ${system};

  .wui__control {
    ${fieldTypeStyles};
    box-shadow: none;

    .wui__indicators svg {
      transform: rotate(0deg);
      transition: ${get('transitions.medium')};
    }

    &.wui__control--is-focused,
    &.wui__control--menu-is-open {
      ${getCss('fields.focused')};
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
    ${fieldTypeStyles};
    padding: 0;
    box-shadow: ${get('boxShadows.sm')};
  }

  .wui__menu-list {
    padding: 0;
  }

  .wui__option {
    padding: ${get('space.md')} ${get('space.sm')};
    transition: ${get('transitions.medium')};
  }

  .wui__option--is-focused {
    ${getCss('fields.select.focused')};
  }

  .wui__option--is-selected,
  .wui__option--is-focused:active,
  .wui__option--is-focused.wui__option--is-selected {
    ${getCss('fields.select.selected')};
  }
`
