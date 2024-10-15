import styled, { system, th } from '@xstyled/styled-components'
import { shouldForwardProp } from '@welcome-ui/system'

export const FieldGroup = styled.fieldsetBox.withConfig({ shouldForwardProp })`
  width: 100%;
  min-width: 0;
  min-height: 0;
  margin: 0;
  padding: 0;
  ${th('defaultFields.fieldset')};
  ${system};

  > * {
    margin-bottom: md;
  }
`
