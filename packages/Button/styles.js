import styled, { css } from '@xstyled/styled-components'
import { Button as ReakitButton } from 'reakit/Button'
import { th } from '@xstyled/system'

import { filterComponent, system } from '../Core/utils/system'

const shapeStyles = (size, shape) => css`
  width: ${th(`buttons.sizes.${size}.height`)};
  padding: 0;
  border-radius: ${shape === 'circle' && th(`buttons.sizes.${size}.height`)};
`

export const Button = styled(filterComponent(ReakitButton))(
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
    outline: none;
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
        &:focus {
          ${th(`buttons.focus.${variant || 'primary'}`)};
        }
        &:hover {
          ${th(`buttons.hover.${variant || 'primary'}`)};
        }
      `};

    &[disabled] {
      cursor: not-allowed;
    }
  `
)

export const ButtonGroup = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: -3px;

  ${Button} {
    margin-top: 3px;

    &:not(:only-child) {
      border-radius: 0;

      &:not(:last-child) {
        border-right-color: rgba(255, 255, 255, 0.4);
      }

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }

  ${system}
`
