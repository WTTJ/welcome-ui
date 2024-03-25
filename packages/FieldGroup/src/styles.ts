import styled, { system, th } from '@wttj/xstyled-styled-components'

export const FieldGroup = styled('fieldset')`
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
