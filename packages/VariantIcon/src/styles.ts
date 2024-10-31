import styled, { css, system } from '@xstyled/styled-components'
import { getVariantColor, Variant } from '@welcome-ui/utils'

export const VariantIcon = styled.divBox<{ variant: Variant }>(
  ({ variant }) => css`
    display: inline-flex;
    color: ${getVariantColor(variant) || 'neutral-90'};
    flex-shrink: 0;
    align-self: center;

    ${system};
  `
)
