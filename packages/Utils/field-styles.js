import { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { getVariantColor } from './variants'

export const defaultFieldStyles = ({ size, variant }) => css`
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
