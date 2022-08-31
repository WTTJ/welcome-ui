import { css, th } from '@xstyled/styled-components'

import { getVariantColor, Variant } from './variants'

export type Size = 'xs' | 'sm' | 'md' | 'lg'

export type FieldVariant =
  | Variant
  | 'transparent'
  | 'transparent-error'
  | 'transparent-success'
  | 'transparent-warning'

export type DefaultFieldStylesProps = Partial<{ size: Size; variant: FieldVariant }>

type DefaultFieldStyles = (args: DefaultFieldStylesProps) => ReturnType<typeof css>

const getVariant = (variant: FieldVariant): Variant => {
  if (
    variant === 'transparent-error' ||
    variant === 'transparent-success' ||
    variant === 'transparent-warning'
  ) {
    return variant.split('-')[1] as Variant
  }

  return variant
}

export const defaultFieldStyles: DefaultFieldStyles = ({ size, variant }) => css`
  ${th('defaultFields.default')};
  width: 100%;
  border-color: ${getVariantColor(getVariant(variant))};
  transition: medium;
  appearance: none;
  ${size && th(`defaultFields.sizes.${size}`)};
  ${variant?.includes('transparent') &&
  css`
    background-color: transparent;
  `}

  &::placeholder {
    ${th('defaultFields.placeholder')};
  }

  &:focus {
    ${th('defaultFields.focused.default')};
    ${(variant === 'error' || variant === 'transparent-error') &&
    th('defaultFields.focused.error')};
    ${(variant === 'warning' || variant === 'transparent-warning') &&
    th('defaultFields.focused.warning')};
    ${(variant === 'success' || variant === 'transparent-success') &&
    th('defaultFields.focused.success')};
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
