import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { overflowEllipsis } from '../../common/styles/text'
import { getMax } from '../../utils/getMax'
import { system } from '../../utils/system'
import { centerContent } from '../../utils/css'
import { Icon } from '../Icon/styles'

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
    ${hasAction &&
      css`
        padding-right: xl;
      `}
    ${overflowEllipsis};
    ${system};
    ${(shape || length === 1) && shapeStyles(size, width, height, shape)};

    > *:not(:last-child) {
      margin-right: xxs;
    }

    > *:not(:only-child) {
      ${/* sc-selector */ Icon}:last-child {
        cursor: pointer;

        path {
          transition: fill ${th.transition('medium')};
        }

        &:hover {
          path,
          g {
            fill: ${th('colors.danger.500')};
          }
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
