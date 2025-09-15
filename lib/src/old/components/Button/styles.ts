import { Button as AriakitButton } from '@ariakit/react'
import styled, { css, system, th } from '@xstyled/styled-components'

import { shouldForwardProp } from '@old/System'
import { hideFocusRingsDataAttribute } from '@old/utils'

import type { ButtonOptions } from './index'

const shapeStyles = (size: ButtonOptions['size'], shape: ButtonOptions['shape'] = 'square') => css`
  width: ${th(`buttons.sizes.${size}.height`)};
  padding: 0;
  ${shape === 'circle' &&
  css`
    border-radius: ${th(`buttons.sizes.${size}.height`)};
  `};
`

export const Button = styled(AriakitButton).withConfig({ shouldForwardProp })<ButtonOptions>(
  ({ ai, danger, disabled, shape, size = 'md', variant = 'primary' }) => css`
    ${th(`buttons.${variant}`)};
    ${ai &&
    css`
      ${th(`buttons.ai.${variant}`)};
    `}
    ${danger &&
    css`
      ${th(`buttons.danger.${variant}`)};
    `}
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    ${th(`buttons.sizes.${size}`)};
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
    ${shape && shapeStyles(size, shape)};
    ${system};

    & > svg.wui-icon,
    & > i.wui-icon-font {
      font-weight: initial;

      &:only-child {
        width: ${th(`buttons.icon.only.${size}`)};
        height: ${th(`buttons.icon.only.${size}`)};
        font-size: ${th(`buttons.icon.only.${size}`)};
      }
      &:not(:only-child) {
        width: ${th(`buttons.icon.default.${size}`)};
        height: ${th(`buttons.icon.default.${size}`)};
        font-size: ${th(`buttons.icon.default.${size}`)};
      }
    }

    & > *:not(:only-child):not(:last-child) {
      margin-right: sm;
    }

    ${!disabled &&
    css`
      [${hideFocusRingsDataAttribute}] &:focus {
        box-shadow: none;
      }
      &:focus {
        ${th(`buttons.focus.${variant}`)};
        ${ai &&
        css`
          ${th(`buttons.focus.ai.${variant}`)};
        `}
        ${danger &&
        css`
          ${th(`buttons.focus.danger.${variant}`)};
        `}
      }
      &:hover {
        ${th(`buttons.hover.${variant}`)};
        ${ai &&
        css`
          ${th(`buttons.hover.ai.${variant}`)};
        `}
        ${danger &&
        css`
          ${th(`buttons.hover.danger.${variant}`)};
        `}
      }
      &:active {
        ${th(`buttons.active.${variant}`)};
        ${ai &&
        css`
          ${th(`buttons.active.ai.${variant}`)};
        `}
        ${danger &&
        css`
          ${th(`buttons.active.danger.${variant}`)};
        `}
      }
    `};

    &[disabled] {
      cursor: not-allowed;
    }
  `
)
