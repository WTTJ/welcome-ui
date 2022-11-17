import styled, { css } from 'styled-components'
import { system, WuiProps } from '@welcome-ui/system'

import { BadgeOptions } from './index'

export type StyledBadgeProps = Pick<BadgeOptions, 'disabled' | 'shape' | 'size' | 'variant'> & {
  length: number
}

export const Badge = styled.div<StyledBadgeProps & WuiProps>(
  ({ disabled, length, shape, size, theme, variant }) => css`
    ${theme.badges.default};
    ${theme.badges.variants[variant]};
    ${theme.badges.sizes[size]};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    ${system};

    ${disabled &&
    css`
      ${theme.badges.disabled[variant]};
    `}

    ${length === 1 &&
    css`
      width: ${theme.badges.sizes[size].height};
    `}

    ${shape === 'square' &&
    css`
      border-radius: 0;
    `}
  `
)
