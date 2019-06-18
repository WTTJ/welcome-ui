import styled from '@xstyled/styled-components'

import { system } from '../../utils/utils'

export const Shape = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: cover;
  justify-content: cover;

  ${system}

  img {
    object-fit: cover;
  }
`
