import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../../../../packages/System/index'

export const Menu = styled.aside`
  ${th('docz.menu')};
  position: relative;
  display: flex;
  flex-direction: column;
  width: 16rem;
  flex-shrink: 0;
  box-sizing: border-box;
  height: 100vh;
  overflow-y: auto;
  padding: xl xl 80 xl;
  ${system}
`
