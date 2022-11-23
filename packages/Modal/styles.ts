import styled, { css } from 'styled-components'
import { up } from '@welcome-ui/system'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { cardStyles } from '@welcome-ui/utils'
import { DialogBackdrop, Dialog as ReakitDialog } from 'reakit/Dialog'

import { Size } from './index'

export const Backdrop = styled(DialogBackdrop).withConfig({
  shouldForwardProp: prop => !['hideOnClickOutside'].includes(prop),
})<{ hideOnClickOutside: boolean }>(
  ({ hideOnClickOutside, theme }) => css`
    ${theme.modals.backdrop};
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
  ({ size, theme }) => css`
    ${cardStyles};
    ${theme.modals.default};
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: ${theme.space.xl};
    opacity: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    transition: opacity 250ms ease-in-out, margin-top 250ms ease-in-out;
    cursor: auto;

    &:focus {
      outline: none !important; /* important for firefox */
    }

    /* on open dialog for animation */
    &[data-enter] {
      opacity: 1;
      margin-top: 0;
    }

    ${up('md')} {
      height: auto;
      max-height: 90%;
      ${theme.modals.sizes[size]};
    }
  `
)

export const Content = styled(Box)(
  ({ theme }) => css`
    flex: 1;
    ${theme.modals.content}
  `
)

export const Cover = styled(Box)(
  ({ theme }) => css`
    ${theme.modals.cover}
  `
)

export const Header = styled(Box)(
  ({ theme }) => css`
    ${theme.modals.header}
  `
)

export const Subtitle = styled(Text)(
  ({ theme }) => css`
    ${theme.modals.header.subtitle}
  `
)

export const Footer = styled(Box)(
  ({ theme }) => css`
    ${theme.modals.footer}
  `
)

export const FooterWrapper = styled(Box)(
  ({ theme }) => css`
    ${theme.modals.footer.children}
  `
)

export const FooterInformations = styled(Box)(
  ({ theme }) => css`
    ${theme.modals.footer.informations}
  `
)
