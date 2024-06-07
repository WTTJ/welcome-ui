import styled, { css, system, th } from '@xstyled/styled-components'
import { Button as AriakitButton } from '@ariakit/react'
import { shouldForwardProp } from '@welcome-ui/system'
import { hideFocusRingsDataAttribute } from '@welcome-ui/utils'
import type { WuiTheme } from '@welcome-ui/core'

import { ButtonOptions } from './index'

const shapeStyles = (
  size: ButtonOptions['size'],
  shape: ButtonOptions['shape'],
  theme: WuiTheme
) => {
  if (!shape) return
  const styles = {
    circle: css`
      width: ${theme.buttons.sizes[size].height};
      padding: 0;
      border-radius: ${theme.buttons.sizes[size].height};
    `,
    // square and circle styles must override each other for mediaqueries to be able
    // to work as expected
    square: css`
      width: ${theme.buttons.sizes[size].height};
      padding: 0;
      border-radius: 0;
    `,
    default: css`
      width: auto;
      padding: ${theme.buttons.sizes[size].padding};
      border-radius: 0;
    `,
  }

  if (typeof shape === 'string') {
    return styles[shape as keyof typeof styles]
  }

  return Object.keys(shape).map((breakpoint: keyof WuiTheme['screens']) => {
    const screenWidth = theme.screens[breakpoint]
    if (breakpoint === '_') {
      return styles[shape[breakpoint] as keyof typeof styles]
    }
    if (screenWidth) {
      return css`
        @media (width >= ${screenWidth}px) {
          ${styles[shape[breakpoint] as keyof typeof styles]};
        }
      `
    }
  })
}

export const Button = styled(AriakitButton).withConfig({ shouldForwardProp })<ButtonOptions>(
  ({ disabled, shape, size = 'md', theme, variant }: ButtonOptions & { theme: WuiTheme }) => css`
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
    ${shapeStyles(size, shape, theme)}};
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

    ${
      !disabled &&
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
      `
    };

    &[disabled] {
      cursor: not-allowed;
    }
  `
)
