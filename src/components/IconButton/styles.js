import styled, { css } from 'styled-components'

import { Button } from '../Button/styles'
import { system } from '../../utils/utils'
import { get } from '../../theme/helpers'

const getSize = (size = 'md', rounded) => css`
  width: ${get(`buttons.sizes.${size}.height`)};
  height: ${get(`buttons.sizes.${size}.height`)};
  border-radius: ${rounded && get(`buttons.sizes.${size}.height`)};
`

export const IconButton = styled(Button)`
  ${props => getSize(props.size, props.rounded)};
  padding: 0;
  ${system};
`
