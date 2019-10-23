import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { Box } from '../Box'
import { Text } from '../Text'
import { system } from '../../utils/system'

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
