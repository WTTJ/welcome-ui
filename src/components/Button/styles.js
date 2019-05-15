import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'
import { media } from '../../utils/utils'

const sizes = {
  sm: css`
    padding: ${get('padding', 'xxs')} ${get('padding', 'xs')};
  `,
  md: css`
    padding: ${get('padding', 'xs')} ${get('padding', 'sm')};

    ${media.mobile`
      padding: ${get('padding', 'md')};
    `};
  `,
  lg: css`
    padding: ${get('padding', 'sm')} ${get('padding', 'md')};
  `
}

function getButtonSize(size) {
  return sizes[size] || sizes['md']
}

export const fullWidthStyles = css`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: ${get('gutter', 'lg')};
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
    ${getCss('buttons', props.variant || 'primary')};
    ${getCss('text', 'button')};
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
    border-width: 1px;
    border-style: solid;
    border-radius: ${props.radius ? props.radius : null};
    box-shadow: ${props.shadow || get('boxShadow', 'sm')};
    appearance: none;
    overflow: hidden;
    transition: ${get('transition', 'sm')};
    line-height: 1rem;

    &:active {
      transform: translateY(2px);
      box-shadow: ${get('boxShadow', 'sm')};
    }

    &::before {
      background: ${get('rgba', 'light', 'light', 0.05)};
    }

    &:hover {
      ${media.mobile`
    transform: translateY(2px);
  `}
    }

    &[disabled] {
      color: ${get('color', 'light', 'light')};
      background-color: ${get('color', 'light', 'dark')};
      pointer-events: none;
    }

    ${getButtonSize(props.size, props.rounded)};
    ${props.span === 'full' ? fullWidthStyles : null};

    ${props.styles};
  `
)
