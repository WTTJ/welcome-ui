import styled, { css, th } from '@wttj/xstyled-styled-components'
import { Text } from '@welcome-ui/text'

import { AlertOptions } from './index'

export const Alert = styled.divBox(
  ({ isFullWidth, size, variant }: AlertOptions) => css`
    position: relative;
    display: flex;
    align-items: center;
    max-width: ${isFullWidth ? '100%' : 'max-content'};
    ${th('alerts.default')};
    ${th(`alerts.${variant}`)};
    ${th(`alerts.sizes.${size}`)};
  `
)

export const Title = styled(Text).attrs(({ variant }: AlertOptions) => ({
  variant: 'h5',
  // We're renaming the prop because it'll be overridden by Text's variant
  $alertVariant: variant,
}))(
  ({ $alertVariant }: { $alertVariant: AlertOptions['variant'] }) => css`
    margin: 0;
    margin-bottom: sm;
    ${th(`alerts.title.${$alertVariant}`)};

    &:only-child {
      margin-bottom: 0;
    }
  `
)
