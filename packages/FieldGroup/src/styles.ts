import styled, { th } from '@xstyled/styled-components'

export const FieldGroup = styled.fieldsetBox`
  width: 100%;
  min-width: 0;
  min-height: 0;
  margin: 0;
  padding: 0;
  ${th('defaultFields.fieldset')};

  > * {
    margin-bottom: md;
  }
`
