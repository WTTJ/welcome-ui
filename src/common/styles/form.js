import { css } from 'styled-components'

import themeHelpers from '../../theme/helpers'

const { colors, borderWidth, padding, radius, textStyles, transition } = themeHelpers

export const getVariantColor = (variant, fallback) => {
  switch (variant) {
    case 'error':
      return colors('danger')
    case 'warning':
      return colors('warning')
    default:
      return fallback || colors('border', 'primary')
  }
}

export const fieldFocusStyles = css`
  border-color: ${colors('primary')};
`

export const fieldDisabledStyles = css`
  background-color: ${colors('bg', 'tertiary')};
  pointer-events: 'none';
`

export const fieldTypeStyles = css`
  width: 100%;
  padding: ${padding('sm')} ${padding('xs')};
  color: ${colors('text', 'secondary')};
  ${textStyles('input')}
  border: ${borderWidth('input')} solid ${colors('border', 'primary')};
  border-radius: ${radius('md')};
  border-color: ${props => getVariantColor(props.variant)};
  transition: ${transition('md')};

  &::placeholder {
    color: ${colors('text', 'quaternary')};
  }

  &:focus {
    ${fieldFocusStyles};
  }

  &[disabled] {
    ${fieldDisabledStyles};
  }
`
