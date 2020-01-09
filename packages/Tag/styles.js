import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { StyledIcon } from '@welcome-ui/icon'
import { system } from '@welcome-ui/system'
import { centerContent, getMax, overflowEllipsis } from '@welcome-ui/utils'

const shapeStyles = (size, width, height, shape = 'square') => css`
  ${th(`tags.shape.${shape}.${size}`)}
  padding: 0;
  ${(width || height) &&
    css`
      width: ${getMax(width || 0, height)};
      height: ${getMax(width || 0, height)};
    `}
  ${shape === 'circle' && 'border-radius: 50%'};
`

export const Tag = styled.div(
  ({ hasAction, height, length, shape, size, variant, width }) => css`
    ${th('tags.default')};
    ${th(`tags.variants.${variant}`)};
    ${th(`tags.sizes.${size}`)}
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: md;
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
        ${shapeStyles(size, width, height, shape)};
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
        opacity: 1;
        transition: opacity ${th.transition('medium')};
        cursor: pointer;

        &:hover {
          opacity: 0.6;
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
