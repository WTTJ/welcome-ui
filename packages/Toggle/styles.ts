import styled, { css, system, th } from '@xstyled/styled-components'
import { Checkbox as ReakitCheckbox } from 'reakit/Checkbox'
import { shouldForwardProp } from '@welcome-ui/system'

import { ToggleOptions } from './index'

export const Toggle = styled(ReakitCheckbox).withConfig({ shouldForwardProp })<ToggleOptions>(
  ({ order = '-1', theme }) => css`
    ${th('toggles.item.default')};
    position: relative;
    display: block;
    appearance: none;
    background: transparent;
    outline: none !important; /* important for firefox */
    cursor: pointer;
    transition: medium;
    order: ${order};

    &::after {
      ${th('toggles.after.default')};
      content: '';
      top: 0;
      bottom: 0;
      left: 1;
      position: absolute;
      margin: auto;
      transition: medium;
    }

    &:disabled {
      ${th('toggles.item.disabled')};
      cursor: not-allowed;

      &::after {
        ${th('toggles.after.disabled')};
      }
    }

    &:checked {
      &::after {
        /* 3 is border + left padding + right padding */
        transform: translateX(calc(${th('toggles.item.default.width')} - 100% - ${theme.toRem(3)}));
      }

      &:not(:disabled) {
        ${th('toggles.item.checked')};

        &::after {
          ${th('toggles.after.checked')};
        }
      }
    }

    ${system};
  `
)
