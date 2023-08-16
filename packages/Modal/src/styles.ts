import styled, { css, system, th, up } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { cardStyles } from '@welcome-ui/utils'
import * as Ariakit from '@ariakit/react'

import { Size } from './index'

export const Backdrop = styled.div.withConfig({
  shouldForwardProp: prop => !['hideOnInteractOutside'].includes(prop),
})<{ hideOnInteractOutside: boolean }>(
  ({ hideOnInteractOutside }) => css`
    ${th('modals.backdrop')};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 150ms ease-in-out;
    ${system};

    ${hideOnInteractOutside &&
    css`
      cursor: pointer;
    `}

    &[data-enter] {
      opacity: 1;
    }
  `
)

export const Dialog = styled(Ariakit.Dialog)(
  ({ size }: { size: Size }) => css`
    ${cardStyles};
    ${th('modals.default')};
    position: fixed;
    inset: 0;
    margin: auto;
    margin-top: xl;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    display: flex;
    flex-direction: column;
    align-self: center;
    height: 100%;
    max-height: 100%;
    overflow: auto;
    opacity: 0;
    transition: opacity 250ms ease-in-out, margin-top 250ms ease-in-out;

    &[data-enter] {
      opacity: 1;
      margin-top: 0;
    }

    ${up(
      'md',
      css`
        height: fit-content;
        max-height: calc(100vh - ${th('space.xl')} * 2);
        ${th(`modals.sizes.${size}`)};
      `
    )}
  `
)

export const Content = styled.divBox``

export const Body = styled.sectionBox`
  max-height: 100%;
  ${th('modals.body')};
`

export const Header = styled.headerBox`
  position: sticky;
  top: 0;
  flex-shrink: 0;
  ${th('modals.header')};
`

export const HeaderSubtitle = styled(Text)`
  ${th('.modals.header.subtitle')};
  margin-bottom: 0;
`

export const Footer = styled.footerBox`
  position: sticky;
  bottom: 0;
  flex-shrink: 0;
  ${th('modals.footer')};
`

export const FooterChildrenWrapper = styled(Box)`
  ${th('modals.footer.children')};
`

export const FooterInformation = styled.divBox`
  ${th('modals.footer.information')};
`
