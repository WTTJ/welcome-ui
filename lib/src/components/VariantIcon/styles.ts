import styled, { css, th } from '@xstyled/styled-components'

import type { VariantIconOptions } from '.'

export const VariantIcon = styled.divBox<{ variant: string | VariantIconOptions['variant'] }>(
  ({ variant }) => css`
    display: inline-flex;
    ${th(`variantIcon.${variant}`)}
    flex-shrink: 0;
    align-self: center;
  `
)
