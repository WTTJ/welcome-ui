import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Box } from '@welcome-ui/box'
import { cardStyles } from '@welcome-ui/utils'
import { Shape } from '@welcome-ui/shape'
import { DialogBackdrop, Dialog as ReakitDialog } from 'reakit/Dialog'

export const Backdrop = styled(DialogBackdrop).withConfig({
  shouldForwardProp: prop => !['hideOnClickOutside'].includes(prop)
})(
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

export const Dialog = styled(ReakitDialog)(
  ({ size, theme }) => css`
    ${cardStyles};
    ${th('modals.default')};
    ${th(`modals.sizes.${size}`)};
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 20;
    opacity: 0;
    max-height: calc(100% - ${theme.toRem(20)});
    max-width: calc(100% - ${theme.toRem(20)});
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
  `
)

export const Content = styled(Box)`
  padding: xxl;
  flex: 1;
  overflow-y: auto;
`

export const Cover = styled(Shape)`
  ${th('modals.cover')};
`

export const Title = styled(Box)`
  ${th('modals.title')};
  width: 100%;
`

export const Footer = styled(Box)`
  ${th('modals.footer')};
  width: 100%;
`
