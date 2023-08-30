import { WuiProps } from '@welcome-ui/system'
import styled, { css, system, th } from '@xstyled/styled-components'
import { cva, type RecipeVariantProps } from '@welcome-ui/panda/css'
import { styled as styledPanda } from '@welcome-ui/panda/jsx'

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

export const badgeStyles = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'xs',
    lineHeight: 'xs',
    fontWeight: 'medium',
    fontFamily: 'subtitle-sm',
  },
  variants: {
    variant: {
      default: {
        color: 'nude-700',
        backgroundColor: 'nude-200',
        _disabled: {
          color: 'nude-400',
          backgroundColor: 'nude-100',
        },
      },
      primary: {
        color: 'dark-900',
        backgroundColor: 'primary-500',
        _disabled: {
          color: 'primary-800',
          backgroundColor: 'primary-600',
        },
      },
    },
    size: {
      sm: {
        padding: 'xxs',
        height: 16,
        '&[data-length="1"]': {
          width: 16,
        },
      },
      md: {
        padding: 'xs',
        height: 20,
        '&[data-length="1"]': {
          width: 20,
        },
      },
    },
    shape: {
      square: {
        borderRadius: 0,
      },
      circle: {
        borderRadius: 14,
      },
    },
    disabled: {
      true: {},
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    shape: 'circle',
  },
})

export type BadgeVariants = RecipeVariantProps<typeof badgeStyles>
export const BadgePanda = styledPanda('div', badgeStyles)
