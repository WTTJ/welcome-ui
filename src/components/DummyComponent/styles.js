import styled from 'styled-components'

import { get } from '../../theme/helpers'

export const StyledDummyComponent = styled.div`
  position: relative;
  color: ${get('colors.light.700')};
  background: ${get('colors.light.200')};
`
