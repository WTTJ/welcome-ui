import styled from 'styled-components'
import { Playground } from 'docz'

import { get } from './src/theme/helpers'

export const StyledPlayground = styled(Playground)`
  margin-bottom: -${get('space.sm')};

  > * {
    margin-right: ${get('space.sm')};
    margin-bottom: ${get('space.sm')};
  }
`

export default StyledPlayground
