import { css } from 'styled-components'

import { get } from '../../theme/helpers'

export const getVariantColor = (variant, fallback) => {
  switch (variant) {
    case 'error':
      return get('color', 'danger')
    case 'warning':
      return get('color', 'warning')
    case 'info':
      return get('color', 'info')
    default:
      return fallback || get('color', 'border', 'primary')
  }
}

export const fieldFocusStyles = css`
  border-color: ${get('color', 'primary')};
`

export const fieldDisabledStyles = css`
  background-color: ${get('color', 'bg', 'light')};
  pointer-events: 'none';
`

export const fieldTypeStyles = css`
  width: 100%;
  padding: ${get('padding', 'sm')} ${get('padding', 'xs')};
  color: ${get('color', 'text', 'secondary')};
  ${get('textStyles', 'input')}
  border: ${get('borderWidth', 'input')} solid ${get('color', 'border', 'primary')};
  border-radius: ${get('radius', 'md')};
  border-color: ${props => getVariantColor(props.variant)};
  transition: ${get('transition', 'md')};

  &::placeholder {
    color: ${get('color', 'text', 'quaternary')};
  }

  &:focus {
    ${fieldFocusStyles};
  }

  &[disabled] {
    ${fieldDisabledStyles};
  }
`
