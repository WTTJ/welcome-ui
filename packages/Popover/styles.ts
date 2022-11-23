import styled, { css } from 'styled-components'
import { Popover as BasePopover, PopoverArrow, PopoverDisclosure } from 'reakit/Popover'
import { system, WuiProps } from '@welcome-ui/system'

export const Arrow = styled(PopoverArrow)(
  ({ theme }) => css`
    color: ${theme.popovers.default.backgroundColor};
  `
)

export const ArrowItem = styled.svg<WuiProps>(
  ({ $transform }) => css`
    transform: ${$transform};
    ${system}
  `
)

export const Content = styled.div`
  ${({ theme }) => theme.popovers.content};
`

export const Title = styled.h6`
  margin: 0;
  ${({ theme }) => theme.popovers.title};
`

export const Popover = styled(BasePopover)<{ $withCloseButton: boolean }>(
  ({ $withCloseButton, theme }) => css`
    ${theme.popovers.default};
    outline: none;
    opacity: 0;
    transition: opacity 150ms ease-in-out;
    ${system}

    /* on open popover for animation */
    &[data-enter] {
      opacity: 1;
    }

    ${$withCloseButton &&
    css`
      ${Title} {
        padding-right: 50;
      }
    `}
  `
)

export const PopoverTrigger = styled(PopoverDisclosure)`
  ${system}
`
