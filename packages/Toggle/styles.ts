import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Checkbox as ReakitCheckbox } from 'reakit/Checkbox'
import { componentSystem, shouldForwardProp, system } from '@welcome-ui/system'

export interface StyledToggleProps {
  checked?: boolean
  connected?: boolean
  disabled?: boolean
  order: string
}

export const Toggle = styled(ReakitCheckbox).withConfig({ shouldForwardProp })<StyledToggleProps>(
  ({ checked, connected, disabled, order = '-1', theme }) => css`
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
      top: 1;
      left: 1;
      position: absolute;
      transition: medium;
    }

    ${checked &&
    css`
      &::after {
        left: 100%;
        transform: translateX(calc(-100% - ${theme.toRem(1)}));
      }
    `};

    ${checked &&
    !disabled &&
    css`
      ${th('toggles.item.checked')};

      &::after {
        ${th('toggles.after.checked')};
      }
    `};

    ${disabled &&
    css`
      ${th('toggles.item.disabled')};
      cursor: not-allowed;

      &::after {
        ${th('toggles.after.disabled')};
      }
    `};

    ${connected ? componentSystem : system};
  `
)
