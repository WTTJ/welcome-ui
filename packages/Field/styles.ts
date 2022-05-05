import styled, { css } from '@xstyled/styled-components'
import { system, th } from '@xstyled/system'
import { StyledLabel } from '@welcome-ui/label'
import { StyledFieldGroup } from '@welcome-ui/field-group'
import { shouldForwardProp, WuiProps } from '@welcome-ui/system'
import { DefaultFieldStylesProps } from '@welcome-ui/utils'

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

type IconWrapperProps = {
  iconPlacement: 'left' | 'right'
  size: DefaultFieldStylesProps['size']
}

export const IconWrapper = styled.div<IconWrapperProps>(
  ({ iconPlacement, size, ...rest }) => css`
    position: absolute;
    top: 0;
    left: ${iconPlacement === 'left' ? 0 : 'auto'};
    right: ${iconPlacement === 'right' ? 0 : 'auto'};
    bottom: 0;
    display: flex;
    width: ${size ? th(`defaultFields.sizes.${size}.height`)(rest) : null};
    justify-content: center;
    align-items: center;
    pointer-events: none;
    transition: medium;
    transition-timing-function: primary;
    ${system};
    /* for button action */
    & > button {
      pointer-events: auto;
    }
  `
)
