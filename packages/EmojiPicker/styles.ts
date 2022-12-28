import styled, { system, th } from '@xstyled/styled-components'
import { Tab } from '@welcome-ui/tabs'
import { Box } from '@welcome-ui/box'

export const TabList = styled(Tab.List)`
  padding: 0 md;
  /* Remove margin from Tab.List */
  margin-bottom: -xl;
  ${system};
`

export const EmojiButton = styled.buttonBox.attrs({
  as: 'button',
})`
  padding: 0;
  border: 0;
  background: none;
  border-radius: 4;
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
    &:nth-child(3n) {
      background-color: sub-4;
    }
    &:nth-child(3n + 1) {
      background-color: sub-1;
    }
    &:nth-child(3n + 2) {
      background-color: sub-5;
    }
  }
`
export const Tooltip = styled(Box)`
  ${th('tooltips')};
  position: absolute;
  pointer-events: none;
  &:empty {
    display: none;
  }
`
