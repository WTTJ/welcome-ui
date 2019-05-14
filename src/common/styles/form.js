import { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'

export const getVariantColor = (variant, fallback) => {
  switch (variant) {
    case 'error':
      return get('color', 'danger', 'default')
    case 'warning':
      return get('color', 'warning', 'default')
    case 'info':
      return get('color', 'info', 'default')
    default:
      return fallback || get('color', 'primary', 'default')
  }
}

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
