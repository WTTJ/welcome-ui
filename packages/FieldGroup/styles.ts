import styled, { css } from 'styled-components'
import { StyledLabel } from '@welcome-ui/label'
import { system } from '@welcome-ui/system'

export const FieldGroup = styled.fieldset(
  ({ theme }) => css`
    width: 100%;
    min-width: 0;
    min-height: 0;
    margin: 0;
    padding: 0;
    ${theme.defaultFields.fieldset};
    ${system};

    & > ${StyledLabel} {
      margin-bottom: md;
    }
  `
)
