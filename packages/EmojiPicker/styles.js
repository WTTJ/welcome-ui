import styled from '@xstyled/styled-components'
import { system } from '@welcome-ui/system'
import { Tab } from '@welcome-ui/tabs'
import { Popover as WUIPopover } from '@welcome-ui/popover'
import { Box } from '@welcome-ui/box'

export const EmojiButton = styled(Box).attrs({
  as: 'button'
})`
  padding: 0;
  border: 0;
  background: none;
  transition: fast;
  /*
   * Taken from slack's emoji picker
   * The delay prevents flickering when hovering
   */
  transition-property: background;
  transition-timing-function: ease-out;
  transition-delay: 0.05s;
  cursor: pointer;
  &[data-active] {
    outline: none;
    border-radius: 4px;
    &:nth-child(3n) {
      background-color: sub.4;
    }
    &:nth-child(3n + 1) {
      background-color: sub.1;
    }
    &:nth-child(3n + 2) {
      background-color: sub.5;
    }
  }
`

export const TabList = styled(Tab.List)`
  padding: 0 md;
  ${system};
`

export const TabPanel = styled(Tab.Panel)`
  color: dark.900;
  ${system};
`

export const Popover = styled(WUIPopover)`
  background-color: light.900;
  border-width: sm;
  border-style: solid;
  border-color: light.800;
  ${system};
`
