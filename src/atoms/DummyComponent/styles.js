import styled from 'styled-components'

import helpers from '../../theme/helpers'

const { colors } = helpers

export const DummyComponent = styled.div`
  position: relative;
  color: ${colors('dark')};
  background: ${colors('white')};
`

export default DummyComponent
