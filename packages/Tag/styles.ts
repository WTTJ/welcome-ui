import styled, { css, system, th } from '@xstyled/styled-components'
import { StyledIcon } from '@welcome-ui/icon'
import { centerContent, getMax, overflowEllipsis } from '@welcome-ui/utils'
import { WuiProps } from '@welcome-ui/system'

import { Size, Variant } from './index'

const shapeStyles = (size: Size, w: string, h: string) => css`
  ${th(`tags.shape.${size}`)}
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
  variant: Variant
}

export const Tag = styled.div<StyledTagProps & WuiProps>(
  ({ h, hasClickAction, hasLink, hasRemoveAction, length, size, variant, w }) => css`
    ${th('tags.default')};
    ${th(`tags.variants.${variant}`)};
    ${th(`tags.sizes.${size}`)}
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: md;
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
      ${shapeStyles(size, w as string, h as string)};
    `};

    ${(hasLink || hasClickAction) &&
    css`
      cursor: pointer;
      text-decoration: none;

      &:hover {
        ${th(`tags.hover.${variant}`)};
      }
    `};

    ${hasRemoveAction &&
    css`
      padding-right: xl;
    `}
    max-width: 100%;

    > *:not(:last-child) {
      margin-right: xxs;
    }

    & > svg {
      width: ${th(`tags.icon.${size}`)};
      height: ${th(`tags.icon.${size}`)};
    }

    > *:not(:only-child) {
      ${/* sc-selector */ StyledIcon}:last-child {
        opacity: 0.7;
        transition: opacity ${th.transition('medium')};
        cursor: pointer;

        &:hover {
          opacity: 1;
        }
      }
    }
  `
)

export const ActionIcon = styled.div<{ size: Size }>(
  ({ size }) => css`
    position: absolute;
    ${th(`tags.sizes.${size}`)};
    top: 0;
    bottom: 0;
    right: 0;
    ${centerContent};
  `
)
