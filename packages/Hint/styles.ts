import styled, { css, DefaultTheme } from 'styled-components'
import { Box } from '@welcome-ui/box'

import { Variant } from './index'

export const VARIANTS: Record<Variant, keyof DefaultTheme['colors']> = {
  error: 'danger-500',
  info: 'info-500',
  success: 'success-500',
  warning: 'warning-500',
}

export const Hint = styled(Box)<{ variant: Variant }>(({ theme, variant }) => {
  const color = VARIANTS[variant]

  return css`
    ${theme.hints};
    color: ${theme.colors[color] || undefined};
    margin-top: ${theme.space.xs};
    display: flex;
    align-items: center;
  `
})
