import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { Label } from '../Label/styles'
import { system } from '../../utils/'

export const FieldGroup = styled.fieldset`
  min-width: 0;
  min-height: 0;
  margin: 0 0 xl 0;
  padding: 0;
  ${th('fields.fieldset')};
  ${system};

  & > ${Label} {
    margin-bottom: sm;
  }
`
