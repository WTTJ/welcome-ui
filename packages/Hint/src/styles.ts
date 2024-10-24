import styled, { css, system, th } from '@xstyled/styled-components'
import { Variant } from '@welcome-ui/utils'

export const VARIANTS: Record<Variant, string> = {
  danger: 'colors.danger-50',
  info: 'colors.info-50',
  success: 'colors.success-50',
  warning: 'colors.warning-50',
}

export const Hint = styled.div<{ variant: Variant }>(
  ({ variant }) => css`
    ${th('hints')};
    color: ${th(VARIANTS[variant]) || undefined};
    margin-top: xs;
    display: flex;
    align-items: center;
    ${system};
  `
)
