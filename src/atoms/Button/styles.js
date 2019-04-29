import styled, { css } from 'styled-components'

import { get } from '../../theme/helpers'
import { media } from '../../utils/utils'

const getVariant = (foreground, background, border) => {
  return css`
    color: ${get('color', 'text', foreground)};
    background: ${get('color', 'bg', background)};
    border-color: ${get('color', 'bg', border)};

    &::before {
      background: ${get('rgba', background, 0.05)};
    }

    svg path {
      fill: ${get('color', foreground)};
    }
  `
}

const variants = {
  primary: getVariant('white', 'primary', 'primary'),
  secondary: getVariant('secondary', 'white', 'secondary'),
  tertiary: getVariant('white', 'secondary', 'secondary'),
  disabled: getVariant('dark', 'light', 'light'),
  'primary-warning': getVariant('white', 'warning', 'warning'),
  'secondary-warning': getVariant('warning', 'white', 'warning'),
  'primary-danger': getVariant('white', 'danger', 'danger'),
  'secondary-danger': getVariant('danger', 'white', 'danger')
}

function getButtonVariant(variant) {
  return variants[variant] || variants['primary']
}

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

export const buttonStyles = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  align-self: ${({ alignself }) => alignself || null};
  justify-content: ${({ align }) => align || 'center'};
  width: auto;
  text-align: ${({ align }) => align || 'center'};
  ${get('textStyles', 'button')};
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-radius: ${props => props.radius || get('radius', 'md')};
  box-shadow: ${props => props.shadow || get('boxShadow', 'buttons')};
  appearance: none;
  overflow: hidden;
  transition: ${get('transition', 'sm')};
  line-height: 1rem;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 0 4px ${get('rgba', 'black', 0.2)};
  }

  &::before {
    background: ${get('rgba', 'white', 0.05)};
  }

  &:hover {
    ${media.mobile`
      transform: translateY(2px);
    `}
  }

  &[disabled] {
    color: ${get('color', 'white')};
    background-color: ${get('color', 'light')};
    pointer-events: none;
  }

  ${props => getButtonSize(props.size, props.rounded)};
  ${props => getButtonVariant(props.variant)};
  ${props => (props.span === 'full' ? fullWidthStyles : null)};

  ${props => props.styles};
`

export const Button = styled.button`
  ${buttonStyles};
`

export default Button
