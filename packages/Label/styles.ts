import styled, { css } from 'styled-components'
import { system, WuiProps } from '@welcome-ui/system'
import { getVariantColor, Variant } from '@welcome-ui/utils'

type LabelProps = { required: boolean } & WuiProps

export const Label = styled('label')<LabelProps>(
  ({ required, theme }) => css`
    position: relative;
    display: flex;
    flex-shrink: 0;
    max-width: 100%;
    align-items: center;
    line-height: ${theme.lineHeights.lg};
    ${theme.labels};
    ${system};
    user-select: none;

    > * {
      &:not(:last-child) {
        margin-right: ${theme.space.sm};
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
    margin-left: ${({ theme }) => theme.space.xs};
    /* It prevents the element to shift the layout and it allows us to put it properly on top with super */
    line-height: 0;
    vertical-align: super;
    font-size: ${({ theme }) => theme.fontSizes['subtitle-sm']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors['primary-500']};
  }
`

export const Disabled = styled.div`
  display: inline-flex;
  margin-right: ${({ theme }) => theme.space.xs};
`

export const Icon = styled.div<{ variant: Variant }>(
  ({ theme, variant }) => css`
    display: inline-flex;
    margin-right: ${theme.space.xs};
    color: ${getVariantColor(variant)};
    fill: ${getVariantColor(variant)};
    flex-shrink: 0;
  `
)
