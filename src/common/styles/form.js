import { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'
import { getVariantStateColor } from '../../utils/variants'
import { getTransitions } from '../../utils/transitions'

export const fieldTypeStyles = css`
  ${props =>
    props.fieldType === 'radioTab' ? getCss('fields.radiotabs.default') : getCss('fields.default')};
  width: 100%;
  padding: ${get('space.md')} ${get('space.sm')};
  border-color: ${props => getVariantStateColor(props.variant)};
  transition: ${getTransitions(['all'])};

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
