import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { shouldForwardProp, system } from '@welcome-ui/system'
import { getVariantColor, Variant } from '@welcome-ui/utils'

export const Label = styled('label').withConfig({ shouldForwardProp })<{ required: boolean }>(
  ({ required }) => css`
    position: relative;
    display: flex;
    flex-shrink: 0;
    max-width: 100%;
    align-items: flex-start;
    line-height: body1;
    ${th('labels')};
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
    margin-left: 0.125rem;
    /* It prevents the element to shift the layout and it allows us to put it properly on top with super */
    line-height: 0;
    vertical-align: super;
    font-size: subtitle2;
    font-weight: bold;
    color: primary.400;
  }
`

export const Disabled = styled.div`
  display: inline-flex;
  margin-right: xxs;
`

export const Icon = styled.div<{ variant: Variant }>(
  ({ variant }) => css`
    display: inline-flex;
    margin-right: xxs;
    color: ${getVariantColor(variant)};
    fill: ${getVariantColor(variant)};
    flex-shrink: 0;
  `
)
