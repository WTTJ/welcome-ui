import styled, { css, system, th } from '@xstyled/styled-components'

import { VariantIconOptions } from '.'

export const VariantIcon = styled.divBox<{ variant: VariantIconOptions['variant'] | string }>(
  ({ variant }) => css`
    display: inline-flex;
    ${th(`variantIcon.${variant}`)}
    flex-shrink: 0;
    align-self: center;

    ${system};
  `
)
