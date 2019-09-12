import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { overflowEllipsis } from '../../common/styles/text'
import { getMax, system } from '../../utils/'
import { centerContent } from '../../utils/css'
import { Icon } from '../Icon/styles'

const shapeStyles = (size, width, height, shape = 'square') => css`
  ${th(`tags.shape.${shape}.${size}`)}
  width: ${width || height ? getMax(width || 0, height) : null};
  height: ${width || height ? getMax(width || 0, height) : null};
  padding: 0;
  border-radius: ${shape === 'circle' && '50%'};
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
    padding-right: ${hasAction ? th('space.xl') : null};
    ${overflowEllipsis};
    ${system};
    ${(shape || length === 1) && shapeStyles(size, width, height, shape)};

    > *:not(:last-child) {
      margin-right: xxs;
    }

    ${Icon}:last-child {
      cursor: pointer;

      &:hover {
        path,
        g {
          fill: ${th('colors.danger.500')};
        }
      }
    }
  `
)

export const RemoveIcon = styled.div(
  ({ size }) => css`
    position: absolute;
    ${th(`tags.sizes.${size}`)};
    top: 0;
    bottom: 0;
    right: 0;
    ${centerContent};
  `
)
