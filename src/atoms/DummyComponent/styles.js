import styled from 'styled-components'

import { get } from '../../theme/helpers'

export const DummyComponent = styled.div`
  position: relative;
  color: ${get('color', 'dark')};
  background: ${get('color', 'white')};
`

export default DummyComponent
