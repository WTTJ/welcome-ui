import styled from 'styled-components'

import { get } from '../../theme/helpers'

export const StyledDummyComponent = styled.div`
  position: relative;
  color: ${get('color', 'light', 'dark')};
  background: ${get('color', 'light', 'light')};
`
