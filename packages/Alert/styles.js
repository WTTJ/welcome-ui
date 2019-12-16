import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'

import { system } from '../Core/utils/system'

export const Alert = styled(Box)(
  ({ variant }) => css`
    ${th('alerts.default')};
    ${th(`alerts.${variant}`)};
    ${system}
  `
)

export const Title = styled(Text)`
  margin: 0;
  margin-bottom: sm;
  font-size: inherit;
  font-weight: medium;
  ${system}

  &:only-child {
    margin-bottom: 0;
  }
`
