import styled, { css } from '@xstyled/styled-components'
import { system, th } from '@xstyled/system'
import { Button as ReakitButton } from 'reakit/Button'
import { shouldForwardProp, WuiProps } from '@welcome-ui/system'
import { hideFocusRingsDataAttribute } from '@welcome-ui/utils'

import { Shape, Size, Variant } from './index'

const shapeStyles = (size: Size, shape = 'square') => css`
  width: ${th(`buttons.sizes.${size}.height`)};
  padding: 0;
  ${shape === 'circle' &&
    css`
      border-radius: ${th(`buttons.sizes.${size}.height`)};
    `};
`

export interface StyledButtonProps {
  disabled?: boolean
  shape?: Shape
  size?: Size
  variant?: Variant
}

export const Button = styled(ReakitButton).withConfig({ shouldForwardProp })<
  StyledButtonProps & WuiProps
>(
  ({ disabled, shape, size = 'md', variant }) => css`
    ${th(`buttons.${variant}`)};
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

    & > *:not(:only-child):not(:last-child) {
      margin-right: sm;
    }

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
