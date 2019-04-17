import styled, { css, keyframes } from 'styled-components'

import helpers from '../../theme/helpers'
import { media } from '../../utils/utils'

const { boxShadow, colors, padding, gutter, radius, rgba, textStyles, transition } = helpers

const pulsing = keyframes`
  from {
    transform: scale(1);
    opacity: .1;
  }
  to {
    transform: scale(1.8);
    opacity: .2;
  }
`

const pulsingRule = css`
  ${pulsing} 0.2s linear both;
`

export const slidingBackgroundStyles = css`
  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${rgba('white', 0.15)};
    transform: scaleX(0);
    transform-origin: 0;
    transition: ${transition('md')};
  }

  &:hover::before {
    transform: scaleX(1);
  }
`

const getVariant = (foreground, background, border) => {
  return css`
    color: ${colors('text', foreground)};
    background: ${colors('bg', background)};
    border-color: ${colors('bg', border)};

    &::before {
      background: ${rgba(background, 0.05)};
    }

    svg path {
      fill: ${colors(foreground)};
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
    padding: ${padding('xxs')} ${padding('xs')};
  `,
  md: css`
    padding: ${padding('xs')} ${padding('sm')};

    ${media.mobile`
      padding: ${padding('md')};
    `};
  `,
  lg: css`
    padding: ${padding('sm')} ${padding('md')};
  `
}

function getButtonSize(size) {
  return sizes[size] || sizes['md']
}

export const fullWidthStyles = css`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: ${gutter('lg')};
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
    // animation: ${pulsingRule} 1.5s ease infinite alternate;
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
  ${textStyles('button')};
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-radius: ${props => props.radius || radius('md')};
  box-shadow: ${props => props.shadow || boxShadow('buttons')};
  appearance: none;
  overflow: hidden;
  transition: ${transition('sm')};
  line-height: 1rem;

  ${props => (props.effect ? slidingBackgroundStyles : null)};

  &:active {
    transform: translateY(2px);
    box-shadow: 0 0 4px ${rgba('black', 0.2)};
  }

  &::before {
    background: ${rgba('white', 0.05)};
  }

  &:hover {
    ${media.mobile`
      transform: translateY(2px);
    `}
  }

  &[disabled] {
    color: ${colors('white')};
    background-color: ${colors('light')};
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
