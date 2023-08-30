import styled, { css } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { getVariantColor, Variant } from '@welcome-ui/utils'
import { cva } from '@welcome-ui/panda/css'
import { styled as styledPanda } from '@welcome-ui/panda/jsx'

export const VariantIcon = styled(Box)<{ variant: Variant }>(
  ({ variant }) => css`
    display: inline-flex;
    color: ${getVariantColor(variant)};
    flex-shrink: 0;
    align-self: center;
  `
)

export const variantIconStyles = cva({
  base: {
    display: 'inline-flex',
    flexShrink: '0',
    alignSelf: 'center',
  },
  variants: {
    variant: {
      default: {},
      success: {
        color: 'success-400',
      },
      info: {
        color: 'info-500',
      },
      warning: {
        color: 'warning-400',
      },
      error: {
        color: 'danger-400',
      },
    },
  },
})

export const VariantIconPanda = styledPanda('div', variantIconStyles)
