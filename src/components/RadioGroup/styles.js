import styled, { css } from 'styled-components'

import { system } from '../../utils/utils'

export const StyledRadios = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    ${system};
  `
)
