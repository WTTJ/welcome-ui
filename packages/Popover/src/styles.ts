import styled, { css, system, th } from '@xstyled/styled-components'
import * as Ariakit from '@ariakit/react'

export const Arrow = styled(Ariakit.PopoverArrow)`
  color: ${th('popovers.default.backgroundColor')};
`

export const ArrowItem = styled.svgBox<{ $transform: string }>(
  ({ $transform }) => css`
    transform: ${$transform};
  `
)

export const Content = styled.div`
  ${th('popovers.content')};
`

export const Title = styled.h6`
  margin: 0;
  ${th('popovers.title')};
`

export const Popover = styled(Ariakit.Popover)<{ $withCloseButton: boolean }>(
  ({ $withCloseButton }) => css`
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

export const PopoverTrigger = styled.box.attrs({ as: Ariakit.PopoverDisclosure })``

export const PopoverHoverTrigger = styled.box.attrs({ as: Ariakit.HovercardAnchor })``
