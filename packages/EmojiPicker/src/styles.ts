import styled, { css, system, th } from '@xstyled/styled-components'
import { Tab } from '@welcome-ui/tabs'
import * as WUIPopover from '@welcome-ui/popover'
import { Box } from '@welcome-ui/box'

export const Popover = styled(WUIPopover.Popover)(
  () => css`
    background-color: ${th('defaultCards.backgroundColor')};
    border-width: sm;
    border-style: solid;
    border-color: border;
    color: dark-900;
    ${system};

    /** we change the arrow item color from popover component */
    > div > div > svg {
      color: ${th('defaultCards.backgroundColor')};

      #stroke {
        color: ${th('defaultCards.borderColor')};
      }
    }
  `
)

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

  &[data-active='true'] {
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
