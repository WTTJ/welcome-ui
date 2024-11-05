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
  hasClickAction: boolean
  hasLink: boolean
  hasRemoveAction: boolean
  length: number
  size: Size
  variant: Variant
}

export const Tag = styled.div.withConfig({
  shouldForwardProp: prop => !['hasClickAction', 'hasLink', 'hasRemoveAction'].includes(prop),
})<StyledTagProps & WuiProps>(
  ({ h, hasClickAction, hasLink, hasRemoveAction, length, size, variant, w }) => css`
    ${th('tags.default')};
    ${th(`tags.variants.${variant}`)};
    ${th(`tags.sizes.${size}`)}
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: initial; /* avoid cropped font */
    transition: medium;
    max-width: 100%;
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

      &:hover,
      &:focus {
        ${th(`tags.hover.${variant}`)};
      }
    `};

    ${hasRemoveAction &&
    css`
      padding-right: xl;
    `}

    > *:not(:last-child) {
      margin-right: xxs;
    }

    & > svg {
      width: ${th(`tags.icon.${size}`)};
      height: ${th(`tags.icon.${size}`)};
    }

    > *:not(:only-child) {
      ${/* sc-selector */ StyledIcon}:last-child {
        opacity: 1;
        transition: opacity ${th.transition('medium')};
        cursor: pointer;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  `
)

export const ActionIcon = styled.divBox<{ size: Size }>(
  ({ size }) => css`
    position: absolute;
    ${th(`tags.sizes.${size}`)};
    top: 0;
    bottom: 0;
    right: 0;
    ${centerContent};
  `
)

export const Button = styled.buttonBox`
  all: unset;
  display: flex;
`
