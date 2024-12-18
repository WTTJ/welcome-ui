// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import styled, { system, th } from '@xstyled/styled-components'
import { Tab } from '@welcome-ui/tabs'
import * as WUIPopover from '@welcome-ui/popover'
import { Box } from '@welcome-ui/box'

// this component is imported by WH but not used, could be deprecated
export const Popover = styled(WUIPopover.Popover)`
  background-color: ${th('defaultCards.backgroundColor')};
  border-width: sm;
  border-style: solid;
  border-color: neutral-30;
  color: neutral-90;
  ${system};

  /** we change the arrow item color from popover component */
  > div > div > svg {
    color: ${th('defaultCards.backgroundColor')};
    #stroke {
      color: ${th('defaultCards.borderColor')};
    }
  }
`

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
  border-radius: md;
  transition: fast;
  /*
   * Taken from slack's emoji picker
   * The delay prevents flickering when hovering
   */
  transition-property: background;
  transition-timing-function: ease-out;
  transition-delay: 0.05s;
  cursor: pointer;

  &[data-active='true'] {
    outline: none;
    &:nth-child(3n) {
      background-color: secondary-orange;
    }
    &:nth-child(3n + 1) {
      background-color: secondary-blue;
    }
    &:nth-child(3n + 2) {
      background-color: secondary-green;
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
  ${system};
`
