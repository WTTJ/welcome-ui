import styled, { css } from '@xstyled/styled-components'
import { Popover as BasePopover, PopoverArrow } from 'reakit/Popover'
import { th } from '@xstyled/system'
import { shouldForwardProp, system } from '@welcome-ui/system'

export const Arrow = styled(PopoverArrow)`
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

export const Popover = styled(BasePopover)(
  ({ withCloseButton }) => css`
    ${th('popovers.default')};
    outline: none;
    ${system}

    ${withCloseButton &&
      css`
        ${Title} {
          padding-right: 50;
        }
      `}
  `
)
