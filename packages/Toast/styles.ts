import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Box } from '@welcome-ui/box'
import { system } from '@welcome-ui/system'
import { getVariantColor } from '@welcome-ui/utils'
import { Alert } from '@welcome-ui/alert'

import { Variant } from '.'

export const Toast = styled(Box)<{ isBottom: boolean }>(
  ({ isBottom }) => css`
    ${th('toasts.default')}
    ${isBottom ? th('toasts.bottom') : th('toasts.top')}
  `
)

export const Growl = styled.div<{ variant: Variant }>(
  ({ variant }) => css`
    position: relative;
    max-width: 25rem;
    padding: lg;
    ${th('toasts.growls.default')};
    ${th(`toasts.growls.${variant}`)};
    ${system};
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
      margin-right: sm;
    }
  `
)

export const Snackbar = styled(Alert)`
  display: flex;
  align-items: center;

  ${Title} > *:not(:only-child):not(:last-child) {
    margin-right: sm;
  }
`
