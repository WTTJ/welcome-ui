import styled, { css, th } from '@xstyled/styled-components'

import type { BackdropProps } from './components/Assets/types'

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
