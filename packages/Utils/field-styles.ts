import { css, th } from '@xstyled/styled-components'

import { getVariantColor, Variant } from './variants'

export type Size = 'xs' | 'sm' | 'md' | 'lg'

export type DefaultFieldStylesProps = Partial<{
  size: Size
  variant: Variant
  transparent?: boolean
}>

type DefaultFieldStyles = (args: DefaultFieldStylesProps) => ReturnType<typeof css>

export const defaultFieldStyles: DefaultFieldStyles = ({ size, transparent, variant }) => css`
  ${th('defaultFields.default')};
  width: 100%;
  border-color: ${getVariantColor(variant)};
  transition: medium;
  appearance: none;
  ${size && th(`defaultFields.sizes.${size}`)};

  ${!variant &&
  transparent &&
  css`
    border-color: transparent;
    background-color: transparent;
  `}

  &::placeholder {
    ${th('defaultFields.placeholder')};
  }

  &:focus {
    ${th('defaultFields.focused.default')};
    ${variant === 'error' && th('defaultFields.focused.error')};
    ${variant === 'warning' && th('defaultFields.focused.warning')};
    ${variant === 'success' && th('defaultFields.focused.success')};
    ${variant === 'info' && th('defaultFields.focused.info')};
  }

  &[disabled] {
    ${th('defaultFields.disabled')};
  }

  &:invalid,
  &:-moz-submit-invalid,
  &:-moz-ui-invalid {
    box-shadow: none;
  }
`
