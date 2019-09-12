import styled, { css } from '@xstyled/styled-components'

import { getVariantStateColor } from '../../utils/'

export const VariantIcon = styled.div(
  ({ variant }) => css`
    display: inline-flex;
    margin-right: xxs;
    color: ${getVariantStateColor(variant)};
    fill: ${getVariantStateColor(variant)};
    flex-shrink: 0;
  `
)
