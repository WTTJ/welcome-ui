import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Dialog, DialogBackdrop, DialogDisclosure } from 'reakit/Dialog'

import { system } from '../../../../packages/Core/utils/system'
import { Button } from '../../../../packages/Button'

export const MobileMenu = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60;
  background-color: dark.700;
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

export const MenuBackground = styled(DialogBackdrop)`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
`

export const MenuDialog = styled(Dialog)`
  position: fixed;
  background-color: dark.700;
  top: 1rem;
  right: 1rem; /* 16px by default */
  left: 1rem; /* 16px by default */
  max-height: calc(100vh - 2rem); /* 16px top and bottom */
  z-index: 999;
  max-width: 680;
  margin: auto;
  overflow: auto;
  border-radius: md;
  outline: none;
  padding: xl;
  box-sizing: border-box;

  * {
    outline: none;
  }
`

export const MenuCloseDisclosure = styled(DialogDisclosure)`
  padding: 0;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background: none;
`

export const CloseIcon = styled(Button)`
  position: absolute;
  right: ${th.space('xl')};
`
