import styled, { css, keyframes } from 'styled-components'
import { bool, string, oneOf } from 'prop-types'
import Link from 'react-router-dom/Link'
import { media, overflowEllipsis } from '../../utils/utils'
import {
  boxShadow,
  color,
  rgba,
  gutter,
  fontSize,
  fontWeight,
  fontFamily,
  letterSpacing,
  radius,
  roundedButtonSize,
  textStyles,
  transition
} from '../../utils/theme'

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

export const sizeMdStyles = css`
  padding: ${gutter('md')} ${gutter('lg')};
  ${textStyles('button')};

  ${media.mobile`
  padding: ${gutter('md')};
  `};
`

export const sizeXsStyles = css`
  padding: ${gutter('xs')};
  ${textStyles('button_small')};
`

export const sizeSmStyles = css`
  padding: ${gutter('xs')} ${gutter('sm')};
  ${textStyles('button_small')};
`

export const sizeLgStyles = css`
  padding: ${gutter('md')} ${gutter('xl')};
  font-size: ${fontSize('md')};
  font-weight: ${fontWeight('bold')};
  letter-spacing: ${letterSpacing('lg')};
`

export const primaryStyles = css`
  background: ${color('seafoamblue')};
  color: ${color('white')};

  &:hover {
    color: ${color('white')};
  }

  &[disabled] {
    color: ${color('white')};
    background-color: ${color('gray', '200')};
  }
`

export const primaryOutlineStyles = css`
  background-color: ${color('white')};
  color: ${color('seafoamblue')};
  border: 1px solid ${color('seafoamblue')};
  font-weight: ${fontWeight('bold')};

  &:hover {
    background-color: ${color('green', '100')};
    color: ${color('seafoamblue')};
  }
`

export const closeDarkStyles = css`
  background: ${rgba('black', '0.3')};
  color: ${color('white')};

  &:hover {
    color: ${color('white')};
  }

  &::before {
    background: ${rgba('black', 0.15)};
  }

  svg path {
    fill: ${color('white')};
  }
`

export const darkStyles = css`
  background: ${color('gunmetal')};
  color: ${color('white')};

  &:hover {
    color: ${color('white')};
  }

  &::before {
    background: ${rgba('white', 0.05)};
  }

  svg path {
    fill: ${color('white')};
  }
`

export const lightStyles = css`
  background: ${color('white')};
  color: ${color('texts', 'light')};

  &:hover {
    color: ${color('texts', 'light')};
  }

  &::before {
    background: ${rgba('black', 0.02)};
  }

  svg path {
    fill: ${color('texts', 'xlight')};
  }
`

export const neutralStyles = css`
  background: ${color('gray', '150')};
  color: ${color('gray', '300')};

  &:hover {
    color: ${color('gray', '300')};
  }

  &::before {
    background: ${rgba('black', 0.02)};
  }

  svg path {
    fill: ${color('gray', '300')};
  }
`

export const dangerStyles = css`
  background: ${color('white')};
  color: ${color('alabamacrimson')};

  &:hover {
    color: ${color('alabamacrimson')};
  }

  &::before {
    background: ${rgba('black', 0.02)};
  }

  svg path {
    fill: ${color('alabamacrimson')};
  }
`

export const dangerReverseStyles = css`
  background: ${color('alabamacrimson')};
  color: ${color('white')};

  &:hover {
    color: ${color('white')};
  }

  &::before {
    background: ${rgba('black', 0.02)};
  }

  svg path {
    fill: ${color('white')};
  }
`

export const warningStyles = css`
  background: ${color('white')};
  color: ${color('orange', '400')};

  &:hover {
    color: ${color('orange', '400')};
  }

  &::before {
    background: ${rgba('black', 0.02)};
  }

  svg path {
    fill: ${color('orange', '400')};
  }
`

export const nakedStyles = css`
  padding: 0;
  color: ${color('texts', 'light')};
  box-shadow: none;
  border: none;
  font-size: ${fontSize('md')};
  letter-spacing: ${letterSpacing('md')};

  &:hover {
    color: ${color('texts', 'dark')};
  }

  svg path {
    fill: ${color('texts', 'xlight')};
  }
`

export const linkedinStyles = css`
  background: ${color('linkedin', 'secondary')};
  color: ${color('white')};

  &[disabled] {
    background: ${color('grey', '200')};
  }

  &:hover {
    color: ${color('white')};
  }
`

export const roundedStyles = css`
  padding: 0;
  align-items: center;
  justify-content: center;
  transform: translateZ(0);
  border-radius: 50%;

  svg {
    display: block;
    transform: rotate(0deg);
    backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    -webkit-transform: translate3D(0, 0, 0) scale(1) skewY(0deg);
  }
`

export const roundedSizeAutoStyles = css`
  width: auto;
  height: auto;
`

export const roundedSizeSmStyles = css`
  width: ${roundedButtonSize('sm')};
  height: ${roundedButtonSize('sm')};
`

export const roundedSizeMdStyles = css`
  width: ${roundedButtonSize('md')};
  height: ${roundedButtonSize('md')};
`

export const roundedSizeLgStyles = css`
  width: ${roundedButtonSize('lg')};
  height: ${roundedButtonSize('lg')};
`

export const borderRoundedStyles = css`
  border-radius: 40px;
`

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
    animation: ${pulsing} 1.5s ease infinite alternate;
  }
`

export const ButtonText = styled.span``

export const ButtonLabel = styled.span`
  display: inline-block;
`

export const withIconStyles = css`
  text-align: left;
`

function getButtonMode(mode) {
  switch (mode) {
    case 'primary':
      return primaryStyles
    case 'primary-outline':
      return primaryOutlineStyles
    case 'success':
      return primaryStyles
    case 'close-dark':
      return closeDarkStyles
    case 'dark':
      return darkStyles
    case 'light':
      return lightStyles
    case 'neutral':
      return neutralStyles
    case 'danger':
      return dangerStyles
    case 'danger-reverse':
      return dangerReverseStyles
    case 'error':
      return dangerStyles
    case 'warning':
      return warningStyles
    case 'naked':
      return nakedStyles
    case 'linkedin':
      return linkedinStyles
    default:
      return primaryStyles
  }
}

function getButtonSize(size, rounded) {
  if (rounded) {
    switch (size) {
      case 'auto':
        return roundedSizeAutoStyles
      case 'sm':
        return roundedSizeSmStyles
      case 'md':
        return roundedSizeMdStyles
      case 'lg':
        return roundedSizeLgStyles
      default:
        return roundedSizeMdStyles
    }
  } else {
    switch (size) {
      case 'xs':
        return sizeXsStyles
      case 'sm':
        return sizeSmStyles
      case 'md':
        return sizeMdStyles
      case 'lg':
        return sizeLgStyles
      default:
        return sizeMdStyles
    }
  }
}

export const inlineLinkStyles = css`
  display: inline-block;
  position: relative;
  color: ${color('texts', 'dark')};
  font-weight: ${fontWeight('regular')};
  line-height: 1.8;

  &::after {
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${color('gray', '200')};
    transition: ${transition('md')};
    content: ' ';
  }

  &:hover {
    &::after {
      background-color: ${color('seafoamblue')};
    }
  }
`

export const buttonStyles = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  align-self: ${({ alignself }) => alignself || null};
  justify-content: ${({ align }) => align || 'center'};
  width: auto;
  font-family: ${fontFamily('texts')};
  text-align: ${({ align }) => align || 'center'};
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: ${({ shadow }) => shadow || boxShadow('buttons')};
  appearance: none;
  overflow: hidden;
  border-radius: ${radius('sm')};
  transition: ${transition('sm')};
  line-height: 1;

  ${slidingBackgroundStyles};

  &:active {
    transform: translateY(2px);
    box-shadow: 0 0 4px ${rgba('black', 0.2)};
  }

  &:hover {
    ${media.mobile`
      transform: translateY(2px);
    `}
  }

  &[disabled] {
    pointer-events: none;
  }

  svg {
    display: block;

    & + span,
    & + ${ButtonText} {
      margin-left: ${gutter('sm')};
    }
  }

  ${ButtonText},
  span {
    ${overflowEllipsis};
    & + svg {
      margin-left: ${gutter('sm')};
    }
  }

  ${props => getButtonSize(props.size, props.rounded)}
  ${props => getButtonMode(props.mode)}
  ${props => (props.rounded ? roundedStyles : null)}
  ${props => (props.borderRounded ? borderRoundedStyles : null)}
  ${props => (props.pulsing ? pulsingStyles : null)}
  ${props => (props.withicon ? withIconStyles : null)}
  ${props => (props.width === 'full' ? fullWidthStyles : null)}
`

/** @component */
export const Button = styled.button`
  ${buttonStyles};
  ${ButtonLabel} {
    margin-left: ${props =>
      props.withicon ? props.theme.buttonIconWidth : props.theme.buttonIconWidth};
  }
`

export const LinkButton = styled(Link)`
  ${buttonStyles};
  ${ButtonLabel} {
    margin-left: ${props =>
      props.withicon ? props.theme.buttonIconWidth : props.theme.buttonIconWidth};
  }
`

LinkButton.propTypes = {
  to: string.isRequired,
  ...Button.propTypes
}

export const HrefButton = styled.a`
  ${buttonStyles};
  ${ButtonLabel} {
    margin-left: ${props =>
      props.withicon ? props.theme.buttonIconWidth : props.theme.buttonIconWidth};
  }
`

HrefButton.propTypes = {
  href: string.isRequired,
  ...Button.propTypes
}

export const InlineLink = styled(Link)`
  ${inlineLinkStyles};
`

InlineLink.propTypes = {
  to: string.isRequired,
  ...Button.propTypes
}

export const InlineHref = styled.a`
  ${inlineLinkStyles};
`

InlineHref.propTypes = {
  to: string.isRequired,
  ...Button.propTypes
}

export const ButtonIcon = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: ${gutter('sm')};
  background: ${rgba('black', 0.1)};
`

export const ButtonInlineIcon = styled.span`
  display: flex;
  align-items: center;

  & + ${ButtonText}, & + span {
    margin-left: ${gutter('xs')};
  }
`

export default Button

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${gutter('lg')};
  max-width: ${props => (props.maxwidth ? props.maxwidth : '100%')};

  &:last-child {
    margin-bottom: 0;
  }

  button,
  a {
    flex: 1 1 0;
    margin: 0 ${gutter('sm')};

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    ${media.mobile`
      margin: 0 ${gutter('xs')};
    `};
  }
`
