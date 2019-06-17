import styled from 'styled-components'

import { get } from '../../theme/helpers'
import { Label as StyledLabel } from '../Label/styles'
import { system } from '../../utils/utils'

export const StyledFieldGroup = styled.fieldset`
  margin-bottom: ${get('space.xl')};
  ${system};

  & > ${StyledLabel} {
    margin-bottom: ${get('space.sm')};
  }
`
