import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { Label as StyledLabel } from '../Label/styles'
import { system } from '../../utils/utils'

export const StyledFieldGroup = styled.fieldset`
  margin-bottom: xl;
  ${th('fields.fieldset')};
  ${system};

  & > ${StyledLabel} {
    margin-bottom: sm;
  }
`
