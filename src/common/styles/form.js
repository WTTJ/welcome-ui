import { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { getVariantStateColor } from '../../utils/'

export const fieldStyles = ({ fieldType, size, variant }) => css`
  ${fieldType === 'radioTab' ? th('fields.radiotabs.default') : th('fields.default')};
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
    ${th('fields.checked')};
  }
`
