import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'
import { system } from '../../utils/utils'

const sizes = {
  sm: css`
    ${getCss(`buttons.sizes.sm`)};
    padding: 0 ${get('space.sm')};
  `,
  md: css`
    ${getCss(`buttons.sizes.md`)};
    padding: 0 ${get('space.md')};
  `,
  lg: css`
    ${getCss(`buttons.sizes.lg`)};
    padding: 0 ${get('space.lg')};
  `
}

export const pulsingStyles = css`
  overflow: visible;

  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: ' ';
    background: inherit;
    opacity: 0.1;
    border-radius: 50%;
    transform-origin: center;
  }
`

export const Button = styled.button(
  props => css`
    ${getCss(`buttons.${props.variant || 'primary'}`)};
    ${sizes[props.size] || sizes.md};
    position: relative;
    display: inline-flex;
    align-items: center;
    align-self: ${props.alignself || null};
    justify-content: ${props.align || 'center'};
    width: auto;
    text-align: ${props.align || 'center'};
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    border-width: ${get('borderWidths.sm')};
    border-style: solid;
    appearance: none;
    overflow: hidden;
    transition: ${get('transitions.medium')};
    ${system};

    & > *:first-child:not(:only-child) {
      margin-right: ${get('space.sm')};
    }

    &::before {
      background: ${get('rgba.light.200', 0.05)};
    }

    ${!props.disabled &&
      css`
        &:active {
          transform: translateY(2px);
        }

        &:hover,
        &:focus {
          ${getCss(`buttons.focused.${props.variant || 'primary'}`)};
        }
      `};

    &[disabled] {
      pointer-events: none;
    }
  `
)
