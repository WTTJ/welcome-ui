import styled, { css, system, th, Theme } from '@xstyled/styled-components'
import { Button as AriakitButton } from '@ariakit/react'

import { hideFocusRingsDataAttribute } from '../../utils/hide-focus-rings-root'

import { ComposedSize } from './theme'

import { ButtonOptions } from './index'

import { shouldForwardProp } from '@/System'

const shapeStyles = (size: ButtonOptions['size'], shape: ButtonOptions['shape'] = 'square') => css`
  width: ${th(`buttons.sizes.${size}.height`)};
  padding: 0;
  ${shape === 'circle' &&
  css`
    border-radius: ${th(`buttons.sizes.${size}.height`)};
  `};
`

const getButtonSize = (size: ComposedSize, theme: Theme) => {
  //Early return if size is a base value
  if (typeof size === 'string') {
    return th(`buttons.sizes.${size}`)
  }

  //Build the media queries style
  const sizeResponsiveStyles = Object.entries(size).reduce((acc, [breakpoint, sizeValue]) => {
    const sizeThemeValues = th(`buttons.sizes.${sizeValue}`)({ theme })
    const sizeStyles = Object.entries(sizeThemeValues).reduce(
      (style, [key, value]) => (value ? style + `${key}: ${value};` : style),
      ''
    )
    //FIXME styles are still in camelCase
    acc += `
      @media (min-width: ${breakpoint}) {
        border: 1px solid red;
        ${sizeStyles}
      }
    `
    return acc
  }, '')

  return sizeResponsiveStyles
}

export const Button = styled(AriakitButton).withConfig({ shouldForwardProp })<ButtonOptions>(
  ({ ai, danger, disabled, shape, size = 'md', theme, variant = 'primary' }) => css`
    ${th(`buttons.${variant}`)};
    ${ai &&
    css`
      ${th(`buttons.ai.${variant}`)};
    `}
    ${danger &&
    css`
      ${th(`buttons.danger.${variant}`)};
    `}
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    ${getButtonSize(size, theme)};
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

    & > svg.wui-icon,
    & > i.wui-icon-font {
      font-weight: initial;

      &:only-child {
        width: ${th(`buttons.icon.only.${size}`)};
        height: ${th(`buttons.icon.only.${size}`)};
        font-size: ${th(`buttons.icon.only.${size}`)};
      }
      &:not(:only-child) {
        width: ${th(`buttons.icon.default.${size}`)};
        height: ${th(`buttons.icon.default.${size}`)};
        font-size: ${th(`buttons.icon.default.${size}`)};
      }
    }

    & > *:not(:only-child):not(:last-child) {
      margin-right: sm;
    }

    ${!disabled &&
    css`
      [${hideFocusRingsDataAttribute}] &:focus {
        box-shadow: none;
      }
      &:focus {
        ${th(`buttons.focus.${variant}`)};
        ${ai &&
        css`
          ${th(`buttons.focus.ai.${variant}`)};
        `}
        ${danger &&
        css`
          ${th(`buttons.focus.danger.${variant}`)};
        `}
      }
      &:hover {
        ${th(`buttons.hover.${variant}`)};
        ${ai &&
        css`
          ${th(`buttons.hover.ai.${variant}`)};
        `}
        ${danger &&
        css`
          ${th(`buttons.hover.danger.${variant}`)};
        `}
      }
      &:active {
        ${th(`buttons.active.${variant}`)};
        ${ai &&
        css`
          ${th(`buttons.active.ai.${variant}`)};
        `}
        ${danger &&
        css`
          ${th(`buttons.active.danger.${variant}`)};
        `}
      }
    `};

    &[disabled] {
      cursor: not-allowed;
    }
  `
)
