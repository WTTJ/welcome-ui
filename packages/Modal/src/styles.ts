import styled, { css, system, th, up } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { cardStyles } from '@welcome-ui/utils'
import { DialogBackdrop, Dialog as ReakitDialog } from 'reakit'

import { Size } from './index'

export const Backdrop = styled(DialogBackdrop).withConfig({
  shouldForwardProp: prop => !['hideOnClickOutside'].includes(prop),
})<{ hideOnClickOutside: boolean }>(
  ({ hideOnClickOutside }) => css`
    ${th('modals.backdrop')};
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 150ms ease-in-out;
    ${system};

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

export const Dialog = styled(ReakitDialog)<{ size: Size }>(
  ({ size }) => css`
    ${cardStyles};
    ${th('modals.default')};
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: xl;
    opacity: 0;
    height: 100%;
    max-height: 100%;
    width: 100%;
    overflow: hidden;

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

export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
`

export const Header = styled.headerBox`
  ${({ theme }) => css`
    flex-shrink: 0;
    ${theme.modals.header}
  `}
`

export const HeaderSubtitle = styled(Text)`
  ${({ theme }) => theme.modals.header.subtitle}
`

export const Body = styled.sectionBox`
  ${({ theme }) => css`
    max-height: 100%;
    overflow-y: auto;
    ${theme.modals.body}
  `}
`

export const Footer = styled.footerBox`
  ${({ theme }) => css`
    margin-top: auto;
    flex-shrink: 0;
    ${theme.modals.footer}
  `}
`

export const FooterChildrenWrapper = styled(Box)`
  ${({ theme }) => theme.modals.footer.children}
`

export const FooterInformation = styled.divBox`
  ${({ theme }) => theme.modals.footer.information}
`
