import styled from 'styled-components'

import { get } from '../../theme/helpers'

export const DummyComponent = styled.div`
  position: relative;
  color: ${get('color', 'light', 'dark')};
  background: ${get('color', 'light', 'light')};
`

export default DummyComponent
