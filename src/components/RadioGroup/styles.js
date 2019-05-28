import styled, { css } from 'styled-components'

import { system } from '../../utils/utils'

export const StyledRadios = styled.div(
  ({ flexDirection }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    ${system};
  `
)
