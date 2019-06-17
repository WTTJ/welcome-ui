import { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { getVariantStateColor } from '../../utils/variants'

export const fieldTypeStyles = css`
  ${props =>
    props.fieldType === 'radioTab' ? th('fields.radiotabs.default') : th('fields.default')};
  width: 100%;
  padding: md sm;
  border-color: ${props => getVariantStateColor(props.variant)};
  transition: medium;

  &::placeholder {
    ${th('fields.placeholder')};
  }

  &:focus {
    ${th('fields.focused')};
  }

  &[disabled] {
    ${th('fields.disabled')};
  }
`
