import styled, { css } from '@xstyled/styled-components'
import { system, th } from '@xstyled/system'
import { Button as ReakitButton } from 'reakit/Button'
import { Box } from '@welcome-ui/box'
import { shouldForwardProp } from '@welcome-ui/system'
import { hideFocusRingsDataAttribute } from '@welcome-ui/utils'

import { ButtonOptions } from './index'

const shapeStyles = (size: ButtonOptions['size'], shape: ButtonOptions['shape'] = 'square') => css`
  width: ${th(`buttons.sizes.${size}.height`)};
  padding: 0;
  ${shape === 'circle' &&
  css`
    border-radius: ${th(`buttons.sizes.${size}.height`)};
  `};
`

export const Button = styled(ReakitButton).withConfig({ shouldForwardProp })<ButtonOptions>(
  ({ disabled, isLoading, shape, size = 'md', variant }) => css`
    ${th(`buttons.${variant}`)};
    position: relative;
    width: auto;
    ${th(`buttons.sizes.${size}`)};
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    cursor: ${isLoading || disabled ? 'not-allowed' : 'pointer'};
    outline: none !important; /* important for firefox */
    border-width: sm;
    border-style: solid;
    appearance: none;
    overflow: hidden;
    transition: medium;
    ${shape && shapeStyles(size, shape)};
    ${system};

    ${!disabled &&
    css`
      [${hideFocusRingsDataAttribute}] &:focus {
        box-shadow: none;
      }
      &:focus {
        ${th(`buttons.focus.${variant || 'primary'}`)};
      }
      &:hover {
        ${th(`buttons.hover.${variant || 'primary'}`)};
      }
      &:active {
        ${th(`buttons.active.${variant || 'primary'}`)};
      }
    `};

    &[disabled] {
      cursor: not-allowed;
    }
  `
)

export const ButtonContent = styled(Box)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  & > *:not(:only-child):not(:last-child) {
    margin-right: sm;
  }

  ${system};
`
