import styled, { css } from '@xstyled/styled-components'

import { system } from '../../utils/'

export const Radios = styled.div(
  ({ flexDirection }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    flex-wrap: wrap;
    ${system};
  `
)
