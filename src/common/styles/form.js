import { css } from 'styled-components'

import { get } from '../../theme/helpers'

export const getVariantColor = (variant, fallback) => {
  switch (variant) {
    case 'error':
      return get('color', 'danger', 'default')
    case 'warning':
      return get('color', 'warning', 'default')
    case 'info':
      return get('color', 'info', 'default')
    default:
      return fallback || null
  }
}

export const fieldTypeStyles = css`
  ${get('fields', 'default')};
  width: 100%;
  padding: ${get('padding', 'sm')} ${get('padding', 'xs')};
  border-color: ${props => getVariantColor(props.variant)};
  transition: ${get('transition', 'md')};

  &::placeholder {
    color: ${get('color', 'mute', 'light')};
  }

  &:focus {
    ${get('fields', 'focus')};
  }

  &[disabled] {
    ${get('fields', 'disabled')};
  }
`
