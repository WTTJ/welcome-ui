import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../../utils/utils'

const sizes = {
  xs: css`
    ${th(`buttons.sizes.xs`)};
    padding: 0 sm;
  `,
  sm: css`
    ${th(`buttons.sizes.sm`)};
    padding: 0 sm;
  `,
  md: css`
    ${th(`buttons.sizes.md`)};
    padding: 0 md;
  `,
  lg: css`
    ${th(`buttons.sizes.lg`)};
    padding: 0 lg;
  `
}

export const Button = styled.button(
  props => css`
    ${th(`buttons.${props.variant || 'primary'}`)};
    ${sizes[props.size] || sizes.md};
    position: relative;
    display: inline-flex;
    align-items: center;
    align-self: ${props.alignself || null};
    justify-content: ${props.align || 'center'};
    width: auto;
    text-align: ${props.align || 'center'};
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    border-width: sm;
    border-style: solid;
    appearance: none;
    overflow: hidden;
    transition: medium;
    ${system};

    & > *:first-child:not(:only-child) {
      margin-right: sm;
    }

    ${!props.disabled &&
      css`
        &:active {
          transform: translateY(2px);
        }

        &:hover,
        &:focus {
          ${th(`buttons.focused.${props.variant || 'primary'}`)};
        }
      `};

    &[disabled] {
      pointer-events: none;
    }
  `
)
