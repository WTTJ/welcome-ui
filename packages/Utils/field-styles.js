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
    ${th('defaultFields.focused')};
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

// TODO: should be removed when field components theme has been fully moved to core
export const fieldStyles = ({ size, type, variant }) => css`
  ${th('fields.default')};
  width: 100%;
  border-color: ${getVariantColor(variant)};
  transition: medium;
  appearance: none;
  ${size && th(`fields.sizes.${size}`)};

  &::placeholder {
    ${th('fields.placeholder')};
  }

  &:focus {
    ${th('fields.focused')};
  }

  &[disabled] {
    ${th('fields.disabled')};
  }

  &[aria-checked='true'] {
    ${['radio', 'checkbox'].includes(type) && th(`fields.${type}.checked`)};
  }

  &:invalid,
  &:-moz-submit-invalid,
  &:-moz-ui-invalid {
    box-shadow: none;
  }
`
