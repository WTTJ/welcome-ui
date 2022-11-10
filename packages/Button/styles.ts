import styled, { css } from 'styled-components'
import { Button as ReakitButton } from 'reakit/Button'
import { hideFocusRingsDataAttribute } from '@welcome-ui/utils'
import { system } from '@welcome-ui/system'

import { ButtonOptions } from './index'

export const Button = styled(ReakitButton)<ButtonOptions>(
  ({ disabled, shape, size = 'md', theme, variant }) => {
    const variantStyles = theme.buttons[variant]
    const sizeStyles = theme.buttons.sizes[size]

    const shapeStyles = css`
      width: ${theme.buttons.sizes[size].height};
      padding: 0;

      ${shape === 'circle' &&
      css`
        border-radius: ${theme.buttons.sizes[size].height};
      `};
    `

    return css`
      ${variantStyles};
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: auto;
      ${sizeStyles};
      text-decoration: none;
      text-align: center;
      white-space: nowrap;
      cursor: pointer;
      outline: none !important; /* important for firefox */
      border-width: sm;
      border-style: solid;
      appearance: none;
      overflow: hidden;
      transition: medium;
      ${shape && shapeStyles}
      ${system};

      & > *:not(:only-child):not(:last-child) {
        margin-right: sm;
      }

      ${!disabled &&
      variant !== 'disabled' &&
      css`
        [${hideFocusRingsDataAttribute}] &:focus {
          box-shadow: none;
        }
        &:focus {
          ${theme.buttons.focus[variant || 'primary']};
        }
        &:hover {
          ${theme.buttons.hover[variant || 'primary']};
        }
        &:active {
          ${theme.buttons.active[variant || 'primary']};
        }
      `};

      &[disabled] {
        cursor: not-allowed;
      }
    `
  }
)
