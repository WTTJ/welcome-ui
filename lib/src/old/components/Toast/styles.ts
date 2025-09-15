import styled, { css, th } from '@xstyled/styled-components'

import { Alert } from '@old/Alert'
import { Box } from '@old/Box'

import type { GrowlOptions } from './Growl'
import type { SnackbarProps } from './Snackbar'

export const ToastWrapper = styled(Box)<{ isBottom: boolean }>(
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

export const Title = styled(Box)(
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

export const Snackbar = styled(Alert)`
  display: flex;
  align-items: center;
  padding: sm md;
  ${th('toasts.snackbar.default')};

  > div {
    align-self: center !important;
  }
`

export const SnackbarSeparator = styled.divBox<{ variant: SnackbarProps['variant'] }>(
  ({ variant }) => css`
    ${th('toasts.snackbar.separator.default')};
    ${th(`toasts.snackbar.separator.${variant}`)};
    padding-left: sm;
  `
)
