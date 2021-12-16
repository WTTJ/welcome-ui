import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { StyledLabel } from '@welcome-ui/label'
import { StyledFieldGroup } from '@welcome-ui/field-group'
import { shouldForwardProp, system, WuiProps } from '@welcome-ui/system'

const rowStyles = css`
  margin-right: sm;
`

const columnStyles = css`
  margin-bottom: sm;
`

const checkableFieldStyles = css`
  ${th('defaultFields.checkablelabel.default')};
  margin-bottom: sm;
`

type StyledFieldProps = {
  checkableField: boolean
  flexDirection: WuiProps['flexDirection']
  checked: boolean
}

export const Field = styled('div').withConfig({ shouldForwardProp })<StyledFieldProps>(
  ({ checkableField, checked, flexDirection }) => css`
    ${StyledFieldGroup} {
      margin-bottom: ${checkableField && 'xxs'};
    }
    ${StyledLabel} {
      ${flexDirection === 'row' && rowStyles};
      ${flexDirection === 'column' && columnStyles};
      ${checkableField && checkableFieldStyles};
      ${checked && th('defaultFields.checkablelabel.checked')}
    }
    ${system};
  `
)
