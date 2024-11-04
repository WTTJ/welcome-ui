import styled, { css, system, th } from '@xstyled/styled-components'

import { Variant } from '.'

export const VariantIcon = styled.divBox<{ variant: Variant | string }>(
  ({ variant }) => css`
    display: inline-flex;
    ${th(`variantIcon.${variant}`)}
    flex-shrink: 0;
    align-self: center;

    ${system};
  `
)
