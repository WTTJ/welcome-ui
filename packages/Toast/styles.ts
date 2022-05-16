import styled, { css, th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { getVariantColor } from '@welcome-ui/utils'
import { Alert } from '@welcome-ui/alert'

import { GrowlOptions } from './Growl'
import { SnackbarOptions } from './Snackbar'

import { Variant } from '.'

export const Toast = styled(Box)<{ isBottom: boolean }>(
  ({ isBottom }) => css`
    ${th('toasts.default')}
    ${isBottom ? th('toasts.bottom') : th('toasts.top')}
  `
)

export const Growl = styled.div<GrowlOptions>(
  ({ hasCloseButton, variant }) => css`
    position: relative;
    max-width: 25rem;
    padding: lg;
    ${th('toasts.growls.default')};
    ${th(`toasts.growls.${variant}`)};
    ${Title} {
      padding-right: ${hasCloseButton ? '3xl' : '0'};
    }
    button {
      flex-shrink: 0;
    }
  `
)

export const Title = styled(Box)<{ variant: Variant }>(
  ({ variant }) => css`
    display: flex;
    align-items: center;
    color: ${getVariantColor(variant)};
    padding-bottom: md;
    /* stylelint-disable-next-line */
    padding-right: 3xl;
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

    ${Title} {
      padding-right: 0;
      padding-bottom: 0;
    }

    button {
      flex-shrink: 0;
      margin-left: ${hasCloseButton ? 'sm' : 0};
    }
  `
)
