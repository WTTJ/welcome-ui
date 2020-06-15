import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { StyledLabel } from '@welcome-ui/label'
import { filterFieldComponent, system } from '@welcome-ui/system'

export const FieldGroup = styled(filterFieldComponent('fieldset'))`
  width: 100%;
  min-width: 0;
  min-height: 0;
  margin: 0;
  padding: 0;
  ${th('defaultFields.fieldset')};
  ${system};

  & > ${StyledLabel} {
    margin-bottom: sm;
  }
`
