import styled, { css, th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { cardStyles } from '@welcome-ui/utils'
import { Shape } from '@welcome-ui/shape'

export const Backdrop = styled.div(
  ({ hideOnClickOutside }) => css`
    ${th('modals.backdrop')};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    ${hideOnClickOutside &&
      css`
        cursor: pointer;
      `}
  `
)

export const Dialog = styled.div(
  ({ size }) => css`
    ${cardStyles};
    ${th('modals.default')};
    ${th(`modals.sizes.${size}`)};
    position: fixed;
    top: 50%;
    left: 50%;
    max-height: calc(100vh - ${th('modals.gutter')});
    max-width: calc(100% - ${th('modals.gutter')});
    margin: auto;
    overflow: auto;
    transform: translate3d(-50%, -50%, 0);

    &:focus {
      outline: none !important; /* important for firefox */
    }
  `
)

export const Content = styled(Box)`
  padding: xxl;
  color: dark.900;
`

export const Cover = styled(Shape)`
  ${th('modals.cover')};
`

export const Footer = styled(Box)`
  width: 100%;
  border-top-color: ${th('colors.nude.200')};
  border-top-style: solid;
  border-top-width: ${th('borderWidths.sm')};
  padding: lg xxl;
`
