import styled, { css } from 'styled-components'
import { system, WuiProps } from '@welcome-ui/system'
import { Tab } from '@welcome-ui/tabs'
import { Popover as WUIPopover } from '@welcome-ui/popover'
import { Box } from '@welcome-ui/box'

export const Popover = styled(WUIPopover)(
  ({ theme }) => css`
    background-color: ${theme.colors['light-900']};
    border-width: ${theme.spaces.sm};
    border-style: solid;
    border-color: border;
    color: ${theme.colors['dark-900']};
    ${system};
  `
)

export const TabList = styled(Tab.List)(
  ({ theme }) => css`
  padding: 0 ${theme.spaces.md};
  /* Remove margin from Tab.List */
  margin-bottom: -{theme.spaces.xl};
  ${system};
`
)

export const EmojiButton = styled.button<WuiProps>(
  ({ theme }) => css`
    padding: 0;
    border: 0;
    background: none;
    border-radius: 4px;
    transition: ${theme.transitions.fast};
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
        background-color: ${theme.colors['sub-4']};
      }
      &:nth-child(3n + 1) {
        background-color: ${theme.colors['sub-1']};
      }
      &:nth-child(3n + 2) {
        background-color: ${theme.colors['sub-5']};
      }
    }

    ${system};
  `
)
export const Tooltip = styled(Box)(
  ({ theme }) => css`
    ${theme.tooltips};
    position: absolute;
    pointer-events: none;

    &:empty {
      display: none;
    }
  `
)
