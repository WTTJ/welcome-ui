import styled, { css } from '@xstyled/styled-components'
import { Popover as BasePopover } from 'reakit/Popover'
import { th } from '@xstyled/system'

export const Popover = styled(BasePopover)`
  ${th('popovers.default')};
  outline: none;
`

export const Content = styled.div(
  ({ withCloseButton }) => css`
    ${th('popovers.content')};
    ${withCloseButton &&
      css`
        padding-right: 50;
      `}
  `
)

export const Title = styled.h6(
  ({ withCloseButton }) => css`
    margin: 0;
    ${th('popovers.title')};
    ${withCloseButton &&
      css`
        padding-right: 50;
      `}
  `
)
