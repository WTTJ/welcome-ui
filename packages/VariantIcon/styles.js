import styled, { Box, css } from '@xstyled/styled-components'
import { getVariantColor } from '@welcome-ui/utils'

export const VariantIcon = styled(Box)(
  ({ variant }) => css`
    display: inline-flex;
    margin-right: xxs;
    color: ${getVariantColor(variant)};
    flex-shrink: 0;
    align-self: center;
  `
)
