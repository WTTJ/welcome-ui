import styled from '@xstyled/styled-components'

import { Label as StyledLabel } from '../Label/styles'
import { system } from '../../utils/utils'

export const StyledFieldGroup = styled.fieldset`
  margin-bottom: xl;
  ${system};

  & > ${StyledLabel} {
    margin-bottom: sm;
  }
`
