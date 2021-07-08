import styled, { Box, css } from '@xstyled/styled-components'
import { getVariantColor } from '@welcome-ui/utils'

import { Variant } from './index'

export const VariantIcon = styled(Box)<{ variant: Variant }>(
  ({ variant }) => css`
    display: inline-flex;
    margin-right: xxs;
    color: ${getVariantColor(variant)};
    flex-shrink: 0;
    align-self: center;
  `
)
