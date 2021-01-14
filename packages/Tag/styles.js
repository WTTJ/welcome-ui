import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { StyledIcon } from '@welcome-ui/icon'
import { system } from '@welcome-ui/system'
import { centerContent, getMax, overflowEllipsis } from '@welcome-ui/utils'

const shapeStyles = (size, w, h, shape = 'square') => css`
  ${th(`tags.shape.${size}`)}
  padding: 0;
  ${(w || h) &&
    css`
      width: ${getMax(w || 0, h)};
      height: ${getMax(w || 0, h)};
    `}
  ${shape === 'circle' && 'border-radius: 50%'};
`

export const Tag = styled.div(
  ({ h, hasAction, length, shape, size, variant, w }) => css`
    ${th('tags.default')};
    ${th(`tags.variants.${variant}`)};
    ${th(`tags.sizes.${size}`)}
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: md;
    line-height: initial; /* avoid cropped font */
    ${overflowEllipsis}
    ${system};
    ${!shape &&
      length !== 1 &&
      css`
        span,
        p {
          ${overflowEllipsis}
        }
      `}
    ${(shape || length === 1) &&
      css`
        justify-content: center;
        ${shapeStyles(size, w, h, shape)};
      `};
    ${hasAction &&
      css`
        padding-right: xl;
      `}
    max-width: 100%;

    > *:not(:last-child) {
      margin-right: xxs;
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

export const ActionIcon = styled.div(
  ({ size }) => css`
    position: absolute;
    ${th(`tags.sizes.${size}`)};
    top: 0;
    bottom: 0;
    right: 0;
    ${centerContent};
  `
)
