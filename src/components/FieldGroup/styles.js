import styled from 'styled-components'

import { get } from '../../theme/helpers'
import { StyledLabel } from '../Label/styles'

export const StyledFieldGroup = styled.fieldset`
  margin-bottom: ${get('spaces.xl')};

  & > ${StyledLabel} {
    margin-bottom: ${get('space.sm')};
  }
`
