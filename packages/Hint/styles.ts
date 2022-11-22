import styled, { css } from 'styled-components'
import { Box } from '@welcome-ui/box'

import { Variant } from './index'

export const VARIANTS: Record<Variant, string> = {
  error: 'colors.danger-500',
  info: 'colors.info-500',
  success: 'colors.success-500',
  warning: 'colors.warning-500',
}

export const Hint = styled(Box)<{ variant: Variant }>(
  ({ theme, variant }) => css`
    ${theme.hints};
    color: ${theme[VARIANTS[variant]] || undefined};
    margin-top: xs;
    display: flex;
    align-items: center;
  `
)
