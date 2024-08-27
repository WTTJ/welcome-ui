import styled, { css, th } from '@xstyled/styled-components'

import { Variant } from './index'

export const VARIANTS: Record<Variant, string> = {
  error: 'colors.danger-500',
  info: 'colors.info-500',
  success: 'colors.success-500',
  warning: 'colors.warning-500',
}

export const Hint = styled.divBox<{ variant: Variant }>(
  ({ variant }) => css`
    ${th('hints')};
    color: ${th(VARIANTS[variant]) || undefined};
    margin-top: xs;
    display: flex;
    align-items: center;
  `
)
