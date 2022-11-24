import styled, { css, system, th, up } from '@xstyled/styled-components'
import { cardStyles } from '@welcome-ui/utils'
import { DialogBackdrop, Dialog as ReakitDialog } from 'reakit/Dialog'

import { Size } from '.'

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
    width: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    ${system};

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
