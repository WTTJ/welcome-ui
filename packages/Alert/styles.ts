import styled, { css } from 'styled-components'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'

import { AlertOptions } from '.'

export const Alert = styled(Box)<AlertOptions>(({ theme, variant }) => {
  const defaultStyles = theme.alerts.default
  const variantStyles = theme.alerts?.[variant]

  return css`
    ${defaultStyles};
    ${variantStyles},
  `
})

export const Title = styled(Text).attrs(({ variant }: AlertOptions) => ({
  variant: 'h5',
  // We're renaming the prop because it'll be overridden by Text's variant
  alertVariant: variant,
}))(({ alertVariant, theme }) => {
  const variantStyles = theme.alerts.title[alertVariant as AlertOptions['variant']]

  return css`
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: sm;
    ${variantStyles};

    &:only-child {
      margin-bottom: 0;
    }
  `
})
