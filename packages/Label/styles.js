import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { system } from '@welcome-ui/system'

import { getVariantStateColor } from '../Core/utils/variants'

export const Label = styled.label(
  ({ required }) => css`
    display: flex;
    flex-shrink: 0;
    align-items: flex-start;
    line-height: body1;
    ${th('fields.label')};
    ${system};
    user-select: none;

    > * {
      &:not(:last-child) {
        margin-right: xxs;
      }

      :last-child {
        ${required && requiredStyles};
      }
    }
  `
)

export const requiredStyles = css`
  &::after {
    content: '*';
    color: primary.500;
    margin-left: xxs;
  }
`

export const Disabled = styled.div`
  display: inline-flex;
  margin-right: xxs;
`

export const Icon = styled.div(
  ({ variant }) => css`
    display: inline-flex;
    margin-right: xxs;
    color: ${getVariantStateColor(variant)};
    fill: ${getVariantStateColor(variant)};
    flex-shrink: 0;
  `
)
