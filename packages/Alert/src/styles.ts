import styled, { css, system, th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'

import { AlertOptions } from './index'

export const Alert = styled(Box)<AlertOptions>(
  ({ isFullWidth, size, variant }) => css`
    position: relative;
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: ${isFullWidth ? '100%' : 'max-content'};
    ${th('alerts.default')};
    ${th(`alerts.${variant}`)};
    ${th(`alerts.sizes.${size}`)};
    ${system};
  `
)

export const Title = styled(Text).attrs(() => ({
  variant: 'sm',
}))(
  () => css`
    margin: 0;
    margin-bottom: sm;
    font-weight: medium;
    ${system};

    &:only-child {
      margin-bottom: 0;
    }
  `
)
