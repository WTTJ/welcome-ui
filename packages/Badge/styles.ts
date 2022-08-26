import { WuiProps } from '@welcome-ui/system'
import styled, { css, system, th } from '@xstyled/styled-components'

import { Shape, Size, Variant } from './index'

export type StyledBadgeProps = {
  shape: Shape
  size: Size
  length: number
  variant: Variant
  disabled: boolean
}

export const Badge = styled.div<StyledBadgeProps & WuiProps>(
  ({ disabled, length, shape, size, variant }) => css`
    ${th('badges.default')};
    ${th(`badges.variants.${variant}`)};
    ${th(`badges.sizes.${size}`)}
    display: inline-flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.2px;

    ${disabled &&
    css`
      ${th(`badges.disabled.${variant}`)}
    `}

    ${length === 1 &&
    css`
      ${th(`badges.singleDigit.${size}`)}
    `}

    ${shape === 'circle' &&
    css`
      border-radius: 14;
    `}
    ${system};
  `
)
