import styled, { css, system, th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'

import { AlertOptions } from '.'

export const Alert = styled(Box)<AlertOptions>(
  ({ size, variant }) => css`
    position: relative;
    ${th('alerts.default')};
    ${th(`alerts.${variant}`)};
    ${th(`alerts.sizes.${size}`)};
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
    height: 100%;
    ${th(`alerts.title.${alertVariant}`)};
    ${system}

    &:only-child {
      margin-bottom: 0;
    }
  `
)
