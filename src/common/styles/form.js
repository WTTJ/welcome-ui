import { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'
import { getVariantColor } from '../../utils/variants'

export const fieldTypeStyles = css`
  ${getCss('fields', 'default')};
  width: 100%;
  padding: ${get('padding', 'sm')} ${get('padding', 'xs')};
  border-color: ${props => getVariantColor(props.variant)};
  transition: ${get('transition', 'md')};

  &::placeholder {
    color: ${get('color', 'nude', 'light')};
  }

  &:focus {
    ${getCss('fields', 'focus')};
  }

  &[disabled] {
    ${getCss('fields', 'disabled')};
  }
`
