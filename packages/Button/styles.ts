import styled, { css, DefaultTheme } from 'styled-components'
import { Button as ReakitButton } from 'reakit/Button'
import { hideFocusRingsDataAttribute } from '@welcome-ui/utils'
import { system } from '@welcome-ui/system'

import { ButtonOptions } from './index'

const shapeStyles = (
  size: ButtonOptions['size'],
  shape: ButtonOptions['shape'] = 'square',
  theme: DefaultTheme
) => css`
  width: ${theme.buttons.sizes[size].height};
  padding: 0;
  ${shape === 'circle' &&
  css`
    border-radius: ${theme.buttons.sizes[size].height};
  `};
`

export const Button = styled(ReakitButton)<ButtonOptions>(
  ({ disabled, shape, size = 'md', theme, variant }) => css`
    ${theme.buttons[variant]};
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    ${theme.buttons.sizes[size]};
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    outline: none !important; /* important for firefox */
    border-width: ${theme.spaces.sm};
    border-style: solid;
    appearance: none;
    overflow: hidden;
    transition: ${theme.transitions.medium};
    ${shape && shapeStyles(size, shape, theme)};
    ${system};

    & > svg:only-child {
      width: ${theme.buttons.icon.only[size]};
      height: ${theme.buttons.icon.only[size]};
    }

    & > svg:not(:only-child) {
      width: ${theme.buttons.icon.default[size]};
      height: ${theme.buttons.icon.default[size]};
    }

    & > *:not(:only-child):not(:last-child) {
      margin-right: ${theme.spaces.sm};
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
)
