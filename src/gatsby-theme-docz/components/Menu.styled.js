import styled from '@xstyled/styled-components'

import { system } from '../../utils/system'

export const Menu = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 16rem;
  flex-shrink: 0;
  box-sizing: border-box;
  height: 100vh;
  overflow-y: auto;
  background-color: dark.700;
  padding: xl xl 80 xl;
  box-sizing: border-box;
  ${system}
`
