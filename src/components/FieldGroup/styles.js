import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { Label as StyledLabel } from '../Label/styles'
import { system } from '../../utils/utils'

export const StyledFieldGroup = styled.fieldset`
  margin: 0 0 xl 0;
  padding: 0;
  ${th('fields.fieldset')};
  ${system};

  & > ${StyledLabel} {
    margin-bottom: sm;
  }
`
