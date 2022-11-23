import { css } from 'styled-components'

import { getVariantColor, Variant } from './variants'

export type Size = 'xs' | 'sm' | 'md' | 'lg'

export type DefaultFieldStylesProps = Partial<{
  size: Size
  variant: Variant
  transparent?: boolean
}>

type DefaultFieldStyles = (args: DefaultFieldStylesProps) => ReturnType<typeof css>

export const defaultFieldStyles: DefaultFieldStyles = ({ size, transparent, variant }) => css`
  ${({ theme }) => css`
    ${theme.defaultFields.default};
    width: 100%;
    border-color: ${getVariantColor(variant)};
    transition: ${theme.transitions.medium};
    appearance: none;
    ${size && theme.defaultFields.sizes[size]};

    ${!variant &&
    transparent &&
    css`
      border-color: transparent;
      background-color: transparent;
    `}

    &::placeholder {
      ${theme.defaultFields.placeholder};
    }

    &:focus {
      ${theme.defaultFields.focused.default};
      ${variant === 'error' && theme.defaultFields.focused.error};
      ${variant === 'warning' && theme.defaultFields.focused.warning};
      ${variant === 'success' && theme.defaultFields.focused.success};
      ${variant === 'info' && theme.defaultFields.focused.info};
    }

    &[disabled] {
      ${theme.defaultFields.disabled};
    }

    &:invalid,
    &:-moz-submit-invalid,
    &:-moz-ui-invalid {
      box-shadow: none;
    }
  `}
`
