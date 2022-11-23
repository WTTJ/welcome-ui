import styled, { css } from 'styled-components'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'

import { AlertOptions } from '.'

export const Alert = styled(Box)<AlertOptions>(
  ({ size, theme, variant }) => css`
    ${theme.alerts.default};
    ${theme.alerts[variant]};
    ${theme.alerts.sizes[size]};
  `
)

export const Title = styled(Text).attrs(({ variant }: AlertOptions) => ({
  variant: 'h5',
  // We're renaming the prop because it'll be overridden by Text's variant
  alertVariant: variant,
}))<{ alertVariant: AlertOptions['variant'] }>(
  ({ alertVariant, theme }) => css`
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: ${theme.space.sm};
    height: 100%;
    ${theme.alerts.title[alertVariant]};

    &:only-child {
      margin-bottom: 0;
    }
  `
)
