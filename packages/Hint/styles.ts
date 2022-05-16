import styled, { css, system, th } from '@xstyled/styled-components'
import { getVariantColor, Variant } from '@welcome-ui/utils'

export const Hint = styled.div<{ variant: Variant }>(
  ({ variant }) => css`
    ${th('hints')};
    color: ${getVariantColor(variant)};
    margin-top: sm;
    display: flex;
    align-items: center;
    ${system};
  `
)
