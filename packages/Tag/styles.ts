import styled, { css } from '@xstyled/styled-components'
import { StyledIcon } from '@welcome-ui/icon'
import { centerContent, getMax, overflowEllipsis } from '@welcome-ui/utils'
import { system, WuiProps } from '@welcome-ui/system'
import { DefaultTheme } from 'styled-components'

import { Size } from './index'

const shapeStyles = (size: Size, w: string, h: string) => css`
  ${({ theme }) => theme.tags.shape[size]}
  padding: 0;
  ${(w || h) &&
  css`
    width: ${getMax(w || '0', h)};
    height: ${getMax(w || '0', h)};
  `}
`

export interface StyledTagProps {
  hasLink: boolean
  hasClickAction: boolean
  hasRemoveAction: boolean
  length: number
  size: Size
  variant: keyof DefaultTheme['tags']['variants']
}

export const Tag = styled.div<StyledTagProps & WuiProps>(
  ({ $h, $w, hasClickAction, hasLink, hasRemoveAction, length, size, theme, variant }) => css`
    ${theme.tags.default};
    ${theme.tags.variants[variant]};
    ${theme.tags.sizes[size]}
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.space.md};
    line-height: initial; /* avoid cropped font */
    transition: medium;
    ${overflowEllipsis}
    ${system}
    ${length !== 1 &&
    css`
      span,
      p {
        ${overflowEllipsis}
      }
    `}
    ${length === 1 &&
    css`
      justify-content: center;
      ${shapeStyles(size, $w as string, $h as string)};
    `};

    ${(hasLink || hasClickAction) &&
    css`
      cursor: pointer;
      text-decoration: none;

      &:hover {
        ${theme.tags.hover[variant]};
      }
    `};

    ${hasRemoveAction &&
    css`
      padding-right: ${theme.space.xxl};
    `}
    max-width: 100%;

    > *:not(:last-child) {
      margin-right: ${theme.space.xxs};
    }

    & > svg {
      width: ${theme.tags.icon[size]};
      height: ${theme.tags.icon[size]};
    }

    > *:not(:only-child) {
      ${/* sc-selector */ StyledIcon}:last-child {
        opacity: 0.7;
        transition: opacity ${theme.transitions.medium};
        cursor: pointer;

        &:hover {
          opacity: 1;
        }
      }
    }
  `
)

export const ActionIcon = styled.div<{ size: Size }>(
  ({ size, theme }) => css`
    position: absolute;
    ${theme.tags.sizes[size]};
    top: 0;
    bottom: 0;
    right: 0;
    ${centerContent};
  `
)
