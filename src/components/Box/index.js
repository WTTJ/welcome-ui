import styled, { css } from 'styled-components'

import { system } from '../../utils/utils'

export const Box = styled.div(
  props =>
    css`
      ${system(props)};
    `
)
