import styled, { css } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
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
