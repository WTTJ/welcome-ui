import styled, { css } from '@xstyled/styled-components'
import { getVariantColor } from '@welcome-ui/utils'

export const VariantIcon = styled.div(
  ({ variant }) => css`
    display: inline-flex;
    margin-right: xxs;
    color: ${getVariantColor(variant)};
    fill: ${getVariantColor(variant)};
    flex-shrink: 0;
  `
)
