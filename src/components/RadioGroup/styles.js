import styled, { css } from 'styled-components'

import { system } from '../../utils/utils'

export const Radios = styled.div(
  props => css`
    display: flex;
    flex-direction: column;
    ${system};
  `
)
