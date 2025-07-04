import * as Ariakit from '@ariakit/react'
import styled, { css, system, th } from '@xstyled/styled-components'

import { shouldForwardProp } from '@/System'

import type { Size } from './theme'

import type { ToggleOptions } from './index'

export const Toggle = styled(Ariakit.Checkbox).withConfig({ shouldForwardProp })<ToggleOptions>(
  ({ order = '-1', size }) => css`
    ${th('toggles.item.default')};
    ${th(`toggles.item.sizes.${size}`)};
    position: relative;
    display: block;
    appearance: none;
    outline: none !important; /* important for firefox */
    cursor: pointer;
    transition: medium;
    order: ${order};

    &::after {
      ${th('toggles.after.default')};
      ${th(`toggles.after.sizes.${size}`)};
      content: '';
      top: 0;
      bottom: 0;
      left: 2;
      position: absolute;
      margin: auto;
      transition: medium;
      z-index: 1;
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
        /* border + left padding + right padding */
        transform: translateX(calc(${th(`toggles.item.sizes.${size}.width`)} - 100% - 0.3rem));
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

export const Wrapper = styled.divBox<{ onClick: React.MouseEventHandler<HTMLInputElement> }>`
  position: relative;
  display: inline-block;
  cursor: pointer;
  flex-shrink: 0;
`

export const IconWrapper = styled.divBox.withConfig({ shouldForwardProp })<{
  checked: boolean
  size: Size
}>(
  ({ checked, size }) => css`
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    height: ${th(`toggles.item.sizes.${size}.height`)};
    bottom: 0;

    > svg,
    i {
      ${th(`toggles.icon.sizes.${size}`)}
    }

    ${checked &&
    css`
      left: ${th(`toggles.icon.position.${size}.left`)};
      color: neutral-90;
    `}

    ${!checked &&
    css`
      right: ${th(`toggles.icon.position.${size}.right`)};
    `}
  `
)
