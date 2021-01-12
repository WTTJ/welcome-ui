import styled, { css } from '@xstyled/styled-components'
import { Popover as BasePopover, PopoverArrow } from 'reakit/Popover'
import { th } from '@xstyled/system'
import { shouldForwardProp, system } from '@welcome-ui/system'

export const Arrow = styled(PopoverArrow).withConfig({
  shouldForwardProp: prop => ['size', 'placement'].includes(prop)
})`
  color: ${th('popovers.default.backgroundColor')};
`

export const ArrowItem = styled('svg').withConfig({ shouldForwardProp })(
  ({ transform }) => css`
    transform: ${transform};
  `
)

export const Content = styled.div`
  ${th('popovers.content')};
`

export const Title = styled.h6`
  margin: 0;
  ${th('popovers.title')};
`

export const Popover = styled(BasePopover).withConfig({
  shouldForwardProp: prop => prop !== 'withCloseButton'
})(
  ({ withCloseButton }) => css`
    ${th('popovers.default')};
    outline: none;
    opacity: 0;
    transition: opacity 150ms ease-in-out;
    ${system}

    /* on open popover for animation */
    &[data-enter] {
      opacity: 1;
    }

    ${withCloseButton &&
      css`
        ${Title} {
          padding-right: 50;
        }
      `}
  `
)
