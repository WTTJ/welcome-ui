import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'

const sizes = {
  sm: css`
    padding: ${get('spaces.xs')} ${get('spaces.sm')};
  `,
  md: css`
    padding: ${get('spaces.sm')} ${get('spaces.md')};
  `,
  lg: css`
    padding: ${get('spaces.md')} ${get('spaces.lg')};
  `
}

function getButtonSize(size) {
  return sizes[size] || sizes['md']
}

export const fullWidthStyles = css`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: ${get('spaces.xl')};
  }
`

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

export const StyledButton = styled.button(
  props => css`
    ${getCss(`buttons.${props.variant || 'primary'}`)};
    ${getCss('texts.button')};
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
    border-radius: ${props.radius ? props.radius : null};
    appearance: none;
    overflow: hidden;
    transition: ${get('transitions.sm')};
    line-height: 0.9rem;

    &:active {
      transform: translateY(2px);
    }

    &::before {
      background: ${get('rgba.light.200', 0.05)};
    }

    &:hover {
      box-shadow: ${get('boxShadows.sm')};
    }

    &[disabled] {
      color: ${get('colors.light.200')};
      background-color: ${get('colors.light.700')};
      pointer-events: none;
    }

    ${getButtonSize(props.size, props.rounded)};
    ${props.span === 'full' ? fullWidthStyles : null};

    ${props.styles};
  `
)
