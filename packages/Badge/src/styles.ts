import { WuiProps } from '@welcome-ui/system'
import styled, { css, system, th } from '@xstyled/styled-components'
import { styled as pandaStyled } from '@welcome-ui/panda/jsx'

import { BadgeOptions } from './index'

export type StyledBadgeProps = Pick<BadgeOptions, 'disabled' | 'shape' | 'size' | 'variant'> & {
  length: number
}

export const Badge = styled.div<StyledBadgeProps & WuiProps>(
  ({ disabled, length, shape, size, variant }) => css`
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

    ${shape === 'square' &&
    css`
      border-radius: 0;
    `}
  `
)

// todo fixme
const DEFAULT_FONT_SIZE = 16
export const toRem = (px: number) => `${px / DEFAULT_FONT_SIZE}rem`

// todo length, texts styles & disabled attribute
export const BadgePanda = pandaStyled('div', {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'xs',
    lineHeight: 'xs',
    fontWeight: 'medium',
    fontFamily: 'subtitle-sm', // doesn't work ?
  },
  variants: {
    variant: {
      default: {
        color: 'nude-700',
        backgroundColor: 'nude-200',
        '&:disabled': {
          color: 'nude-400',
          backgroundColor: 'nude-100',
        },
      },
      primary: {
        color: 'dark-900',
        backgroundColor: 'primary-500',
        '&disabled': {
          color: 'primary-800',
          backgroundColor: 'primary-600',
        },
      },
    },
    size: {
      sm: {
        padding: 'xxs',
        height: toRem(16),
      },
      md: {
        padding: 'xs',
        height: toRem(20),
      },
    },
    shape: {
      square: {
        borderRadius: 0,
      },
      circle: {
        borderRadius: toRem(14),
      },
    },
  },
})
