import styled, { css } from 'styled-components'
import { Box } from '@welcome-ui/box'
import { Alert } from '@welcome-ui/alert'

import { GrowlOptions } from './Growl'
import { SnackbarOptions } from './Snackbar'

export const Toast = styled(Box)<{ isBottom: boolean }>(
  ({ isBottom, theme }) => css`
    ${theme.toasts.default}
    ${isBottom ? theme.toasts.bottom : theme.toasts.top}
  `
)

export const Growl = styled(Alert)<GrowlOptions>(
  ({ theme }) => css`
    position: relative;
    max-width: 25rem;
    padding: ${theme.space.lg};
    ${theme.toasts.growls.default};

    div:first-of-type {
      align-self: baseline;
    }

    button {
      flex-shrink: 0;
    }
  `
)

export const Title = styled(Box)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    padding-bottom: ${theme.space.xs};
    ${theme.toasts.growls.title};

    & > *:first-child {
      flex-shrink: 0;
    }
  `
)

export const Snackbar = styled(Alert)<SnackbarOptions>(
  ({ hasCloseButton, theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.space.sm} ${theme.space.md};

    svg {
      width: 16;
      height: 16;
    }

    button {
      flex-shrink: 0;
      margin-left: ${hasCloseButton ? theme.space.sm : 0};
    }
  `
)
