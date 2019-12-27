import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { StyledLabel } from '@welcome-ui/label'

import { filterComponent, system } from '../Core/utils/system'

export const FieldGroup = styled(filterComponent('fieldset'))`
  width: 100%;
  min-width: 0;
  min-height: 0;
  margin: 0;
  padding: 0;
  ${th('fields.fieldset')};
  ${system};

  & > ${StyledLabel} {
    margin-bottom: sm;
  }
`
