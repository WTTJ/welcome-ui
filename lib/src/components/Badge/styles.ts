import styled, { css, system, th } from '@xstyled/styled-components'

import { BadgeOptions } from '.'

import { WuiProps } from '@/System'

export type StyledBadgeProps = Pick<BadgeOptions, 'disabled' | 'size' | 'variant'> & {
  length: number
}

export const Badge = styled.div<StyledBadgeProps & WuiProps>(
  ({ disabled, length, size, variant }) => css`
    ${th('badges.default')};
    ${th(`badges.variants.${variant}`)};
    ${th(`badges.sizes.${size}`)};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    ${system};

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
