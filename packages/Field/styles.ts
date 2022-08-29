import styled, { css, system, th } from '@xstyled/styled-components'
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
  size?: DefaultFieldStylesProps['size']
}

export const IconWrapper = styled.div<IconWrapperProps>(
  ({ iconPlacement, size }) => css`
    position: absolute;
    top: 0;
    left: ${iconPlacement === 'left' ? th(`defaultFields.iconPlacement.${size}.left`) : 'auto'};
    right: ${iconPlacement === 'right' ? th(`defaultFields.iconPlacement.${size}.right`) : 'auto'};
    bottom: 0;
    display: flex;
    width: 16;
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

export const IconGroupWrapper = styled.div(
  ({ size }: { size: DefaultFieldStylesProps['size'] }) => css`
    position: absolute;
    padding: 0;
    top: 0;
    bottom: 0;
    right: ${size === 'xs' ? 'sm' : 'md'};
    display: flex;
    align-items: center;
    gap: sm;

    > * {
      width: 16;
    }
  `
)
