import styled, { css } from 'styled-components'
import { alignSelf, borders, color, flex, fontSize, order, space, width } from 'styled-system'

import { system } from '../../utils/utils'

export const Box = styled.div(
  props =>
    css`
      ${system};
    `
)
