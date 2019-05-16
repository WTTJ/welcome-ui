import styled from 'styled-components'

import { get } from '../../theme/helpers'

export const StyledDummyComponent = styled.div`
  position: relative;
  color: ${get('colors.light.dark')};
  background: ${get('colors.light.light')};
`
