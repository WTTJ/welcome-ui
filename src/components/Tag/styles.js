import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { overflowEllipsis } from '../../common/styles/text'
import { getMax, getVariantColor, system } from '../../utils/'
import { Icon } from '../Icon/styles'

const shapeStyles = (size, width, height, shape = 'square') => css`
  ${th(`tags.shape.${shape}.${size}`)}
  width: ${width || height ? getMax(width || 0, height) : null};
  height: ${width || height ? getMax(width || 0, height) : null};
  padding: 0;
  border-radius: ${shape === 'circle' && '50%'};
`

export const Tag = styled.div(
  ({ height, length, shape, size, variant, width }) => css`
    ${th('tags.default')};
    ${th(`tags.sizes.${size}`)}
    ${variant !== 'default' && th('tags.variants')};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${getVariantColor(variant)};
    border-radius: md;
    ${overflowEllipsis};
    ${system};
    ${(shape || length === 1) && shapeStyles(size, width, height, shape)};

    ${Icon} {
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
