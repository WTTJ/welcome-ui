import styled from 'styled-components'

import { Playground } from 'docz'

export const StyledPlayground = styled(Playground)`
  > *:not(:last-child) {
    margin-right: 10px;
  }
`

export default StyledPlayground
