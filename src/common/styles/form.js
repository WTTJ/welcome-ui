import { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { getVariantStateColor } from '../../utils/variants'

export const fieldStyles = ({ size, type, variant }) => css`
  ${th('fields.default')};
  width: 100%;
  border-color: ${getVariantStateColor(variant)};
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
