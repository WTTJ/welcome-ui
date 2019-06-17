import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { Button } from '../Button/styles'
import { system } from '../../utils/utils'

const getSize = (size = 'md', rounded) => css`
  width: ${th(`buttons.sizes.${size}.height`)};
  height: ${th(`buttons.sizes.${size}.height`)};
  border-radius: ${rounded && th(`buttons.sizes.${size}.height`)};
`

export const IconButton = styled(Button)`
  ${props => getSize(props.size, props.rounded)};
  padding: 0;
  ${system};
`
