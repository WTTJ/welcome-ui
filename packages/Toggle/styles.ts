import styled, { css } from 'styled-components'
import { Checkbox as ReakitCheckbox } from 'reakit/Checkbox'
import { system } from '@welcome-ui/system'

import { ToggleOptions } from './index'

export const Toggle = styled(ReakitCheckbox)<ToggleOptions>(
  ({ $order = '-1', theme }) => css`
    ${theme.toggles.item.default};
    position: relative;
    display: block;
    appearance: none;
    background: transparent;
    outline: none !important; /* important for firefox */
    cursor: pointer;
    transition: ${theme.transitions.medium};
    order: ${$order};

    &::after {
      ${theme.toggles.after.default};
      content: '';
      top: 0;
      bottom: 0;
      left: 2px;
      position: absolute;
      margin: auto;
      transition: ${theme.transitions.medium};
    }

    &:disabled {
      ${theme.toggles.item.disabled};
      cursor: not-allowed;

      &::after {
        ${theme.toggles.after.disabled};
      }
    }

    &:checked {
      &::after {
        /* border + left padding + right padding */
        transform: translateX(calc(${theme.toggles.item.default.width} - 100% - 0.3rem));
      }

      &:not(:disabled) {
        ${theme.toggles.item.checked};

        &::after {
          ${theme.toggles.after.checked};
        }
      }
    }

    ${system};
  `
)
