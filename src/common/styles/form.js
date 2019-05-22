import { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'
import { getVariantColor } from '../../utils/variants'

export const fieldTypeStyles = css`
  ${props =>
    props.fieldType === 'radioTab' ? getCss('fields.radiotabs.default') : getCss('fields.default')};
  width: 100%;
  padding: ${get('spaces.md')} ${get('spaces.sm')};
  border-color: ${props => getVariantColor(props.variant)};
  transition: ${get('transitions.md')};

  &::placeholder {
    ${getCss('fields.placeholder')};
  }

  &:focus {
    ${getCss('fields.focused')};
  }

  &[disabled] {
    ${getCss('fields.disabled')};
  }
`
