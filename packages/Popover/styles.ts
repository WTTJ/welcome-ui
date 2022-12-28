import styled, { css, system, th } from '@xstyled/styled-components'
import { Popover as AriakitPopover, PopoverArrow, PopoverDisclosure } from 'ariakit/popover'

export const Arrow = styled(PopoverArrow)``

export const Content = styled.div`
  ${th('popovers.content')};
`

export const Title = styled.h6`
  ${th('popovers.title')};
  margin: 0;
`

export const Popover = styled(AriakitPopover)<{
  $withCloseButton: boolean
  $withLightBackground: boolean
}>(
  ({ $withCloseButton, $withLightBackground }) => css`
    ${th('popovers.default')};
    opacity: 0;
    outline: none;
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

    ${$withLightBackground &&
    css`
      ${th('popovers.light')};
    `}
  `
)

export const PopoverTrigger = styled(PopoverDisclosure)`
  ${system}
`
