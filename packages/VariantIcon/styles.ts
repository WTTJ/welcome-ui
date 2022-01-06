import styled, { css } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { getVariantColor, Variant } from '@welcome-ui/utils'

export const VariantIcon = styled(Box)<{ variant: Variant }>(
  ({ variant }) => css`
    display: inline-flex;
    margin-right: xxs;
    color: ${getVariantColor(variant)};
    flex-shrink: 0;
    align-self: center;
  `
)
