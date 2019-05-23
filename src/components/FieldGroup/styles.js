import styled from 'styled-components'

import { get } from '../../theme/helpers'
import { StyledLabel } from '../Label/styles'

export const StyledFieldGroup = styled.fieldset`
  & > ${StyledLabel} {
    margin-bottom: ${get('space.sm')};
  }
`
