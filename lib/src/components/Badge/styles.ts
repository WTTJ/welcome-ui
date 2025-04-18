import styled, { css, th } from '@xstyled/styled-components'

import type { WuiProps } from '@/System'

import type { BadgeOptions } from '.'

export type StyledBadgeProps = Pick<BadgeOptions, 'disabled' | 'size' | 'variant'> & {
  length: number
}

export const Badge = styled.divBox<StyledBadgeProps & WuiProps>(
  ({ disabled, length, size, variant }) => css`
    ${th('badges.default')};
    ${th(`badges.variants.${variant}`)};
    ${th(`badges.sizes.${size}`)};
    display: inline-flex;
    align-items: center;
    justify-content: center;

    ${disabled &&
    css`
      ${th(`badges.disabled.${variant}`)};
    `}

    ${length === 1 &&
    css`
      width: ${th(`badges.sizes.${size}.height`)};
    `}
  `
)
