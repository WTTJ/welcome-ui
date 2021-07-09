import { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { getVariantColor, Variant } from './variants'

type Size = unknown

export const defaultFieldStyles = ({
  size,
  variant
}: {
  size: Size
  variant: Variant
}): ReturnType<typeof css> => css`
  ${th('defaultFields.default')};
  width: 100%;
  border-color: ${getVariantColor(variant)};
  transition: medium;
  appearance: none;
  ${size && th(`defaultFields.sizes.${size}`)};

  &::placeholder {
    ${th('defaultFields.placeholder')};
  }

  &:focus {
    ${th('defaultFields.focused.default')};
    border-color: ${getVariantColor(variant)};
    ${variant === 'error' && th('defaultFields.focused.error')};
    ${variant === 'warning' && th('defaultFields.focused.warning')};
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
