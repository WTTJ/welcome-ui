import styled, { css, th, up } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { cardStyles } from '@welcome-ui/utils'

import { BackdropProps } from './Assets/Backdrop'

import { Size } from './index'

export const Backdrop = styled.divBox.withConfig({
  shouldForwardProp: prop => !['hideOnInteractOutside'].includes(prop),
})<Pick<BackdropProps, 'hideOnInteractOutside'>>(
  ({ hideOnInteractOutside }) => css`
    ${th('modals.backdrop')};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 150ms ease-in-out;

    ${hideOnInteractOutside &&
    css`
      cursor: pointer;
    `}

    &[data-enter] {
      opacity: 1;
    }
  `
)

export const Dialog = styled.divBox<{ size: Size }>(
  ({ size }) => css`
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
    max-width: 100%;
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
  ${th('modals.body')};
`

export const Header = styled.headerBox`
  position: sticky;
  top: 0;
  flex-shrink: 0;
  z-index: 1;
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
  z-index: 1;
  ${th('modals.footer')};
`

export const FooterChildrenWrapper = styled(Box)`
  ${th('modals.footer.children')};
`

export const FooterInformation = styled.divBox`
  ${th('modals.footer.information')};
`
