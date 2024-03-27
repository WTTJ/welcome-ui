import styled, { css, system, th } from '@wttj/xstyled-styled-components'
import * as Ariakit from '@ariakit/react'

export const Arrow = styled(Ariakit.PopoverArrow)`
  color: ${th('popovers.default.backgroundColor')};
`

export const ArrowItem = styled.svgBox(
  ({ $transform }: { $transform: string }) => css`
    transform: ${$transform};
  `
)

export const Content = styled.divBox`
  ${th('popovers.content')};
`

export const Title = styled.h6Box`
  margin: 0;
  ${th('popovers.title')};
`

export const Popover = styled(Ariakit.Popover)(
  ({ $withCloseButton }: { $withCloseButton: boolean }) => css`
    ${th('popovers.default')};
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

export const PopoverTrigger = styled(Ariakit.PopoverDisclosure)`
  ${system}
`

export const PopoverHoverTrigger = styled(Ariakit.HovercardAnchor)`
  ${system}
`
