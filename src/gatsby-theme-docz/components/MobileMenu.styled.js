import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../../../../packages/System/index'
import { Button } from '../../../../packages/Button'

export const MobileMenu = styled.div`
  ${th('docz.menu')};
  position: sticky;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60;
  padding: 0 md;
  box-sizing: border-box;
  ${system}
`

export const Logo = styled.div`
  display: flex;

  svg {
    width: 100;
    height: 36;
    flex-shrink: 0;
  }
`

export const CloseIcon = styled(Button)`
  position: absolute;
  right: ${th.space('xl')};
`
