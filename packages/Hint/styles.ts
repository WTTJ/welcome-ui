import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { system } from '@welcome-ui/system'
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
