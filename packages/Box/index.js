import styled, { css } from '@xstyled/styled-components'

import { system } from '../Core/utils/system'

export const Box = styled.div(
  () =>
    css`
      ${system};
    `
)

export default Box
