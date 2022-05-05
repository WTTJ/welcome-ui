import styled, { css } from '@xstyled/styled-components'
import { system, th } from '@xstyled/system'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'

import { AlertOptions } from '.'

export const Alert = styled(Box)<AlertOptions>(
  ({ variant }) => css`
    ${th('alerts.default')};
    ${th(`alerts.${variant}`)};
    ${system}
  `
)

export const Title = styled(Text).attrs(({ variant }: AlertOptions) => ({
  variant: 'h5',
  // We're renaming the prop because it'll be overridden by Text's variant
  alertVariant: variant,
}))(
  ({ alertVariant }) => css`
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: sm;
    ${th(`alerts.title.${alertVariant}`)};
    ${system}

    &:only-child {
      margin-bottom: 0;
    }
  `
)
