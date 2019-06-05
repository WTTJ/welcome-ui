import styled, { css } from 'styled-components'

import { Button } from '../Button/styles'
import { getCss } from '../../theme/helpers'

const getSize = (size = 'md', rounded) => css`
  width: ${getCss(`buttons.sizes.${size}.height`)};
  height: ${getCss(`buttons.sizes.${size}.height`)};
  border-radius: ${rounded && getCss(`buttons.sizes.${size}.height`)};
`

export const IconButton = styled(Button)`
  ${props => getSize(props.size, props.rounded)};
  padding: 0;
`
