import { WuiProps } from '@welcome-ui/system'
import styled, { css, th } from '@wttj/xstyled-styled-components'

import { BadgeOptions } from './index'

export type StyledBadgeProps = Pick<BadgeOptions, 'disabled' | 'shape' | 'size' | 'variant'> & {
  length: number
}

export const Badge = styled.divBox(
  ({ disabled, length, shape, size, variant }: StyledBadgeProps & WuiProps) => css`
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

    ${shape === 'square' &&
    css`
      border-radius: 0;
    `}
  `
)
