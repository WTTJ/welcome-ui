import styled, { css, th } from '@wttj/xstyled-styled-components'
import { Box } from '@welcome-ui/box'
import { Alert } from '@welcome-ui/alert'

import { GrowlOptions } from './Growl'
import { SnackbarOptions } from './Snackbar'

export const ToastWrapper = styled.divBox<{ isBottom: boolean }>(
  ({ isBottom }) => css`
    ${th('toasts.default')}
    ${isBottom ? th('toasts.bottom') : th('toasts.top')}

    position: fixed;
    z-index: 9999;
    transition: all 400ms ease-out;
  `
)

export const Growl = styled(Alert)<GrowlOptions>(
  () => css`
    position: relative;
    max-width: 25rem;
    padding: lg;
    ${th('toasts.growls.default')};

    div:first-of-type {
      align-self: baseline;
    }

    button {
      flex-shrink: 0;
    }
  `
)

export const Title = styled.divBox(
  () => css`
    display: flex;
    align-items: center;
    padding-bottom: xs;
    ${th('toasts.growls.title')};

    & > *:first-child {
      flex-shrink: 0;
    }
  `
)

export const Snackbar = styled(Alert)<SnackbarOptions>(
  ({ hasCloseButton }) => css`
    display: flex;
    align-items: center;
    padding: sm md;

    svg {
      width: 16;
      height: 16;
    }

    button {
      flex-shrink: 0;
      margin-left: ${hasCloseButton ? 'sm' : 0};
    }
  `
)
