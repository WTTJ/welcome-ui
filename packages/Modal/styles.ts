import styled, { css, system, th, up } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { cardStyles } from '@welcome-ui/utils'
import { Dialog as AriakitDialog } from 'ariakit/dialog'

import { Size } from './index'

export const Backdrop = styled.div.withConfig({
  shouldForwardProp: prop => !['hideOnClickOutside'].includes(prop),
})<{ hideOnClickOutside: boolean }>(
  ({ hideOnClickOutside }) => css`
    ${th('modals.backdrop')};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 150ms ease-in-out;

    ${hideOnClickOutside &&
    css`
      cursor: pointer;
    `}

    /* on open dialog for animation */
    &[data-enter] {
      opacity: 1;
    }
  `
)

export const Dialog = styled(AriakitDialog)<{ size: Size }>(
  ({ size }) => css`
    ${cardStyles};
    ${th('modals.default')};
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: xl;
    opacity: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    transition: opacity 250ms ease-in-out, margin-top 250ms ease-in-out;
    cursor: auto;
    ${system};

    &:focus {
      outline: none !important; /* important for firefox */
    }

    /* on open dialog for animation */
    &[data-enter] {
      opacity: 1;
      margin-top: 0;
    }

    ${up(
      'md',
      css`
        height: auto;
        max-height: 90%;
        ${th(`modals.sizes.${size}`)};
      `
    )}
  `
)

export const Header = styled.headerBox`
  ${({ theme }) => theme.modals.header}
`

export const HeaderSubtitle = styled(Text)`
  ${({ theme }) => theme.modals.header.subtitle}
`

export const Content = styled.sectionBox`
  ${({ theme }) => theme.modals.content}
`

export const Footer = styled.footerBox`
  ${({ theme }) => theme.modals.footer}
`

export const FooterChildrenWrapper = styled(Box)`
  ${({ theme }) => theme.modals.footer.children}
`

export const FooterInformations = styled.divBox`
  ${({ theme }) => theme.modals.footer.informations}
`
