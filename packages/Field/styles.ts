import styled, { css, system, th } from '@xstyled/styled-components'
import { StyledLabel } from '@welcome-ui/label'
import { StyledHint } from '@welcome-ui/hint'
import { StyledFieldGroup } from '@welcome-ui/field-group'
import { shouldForwardProp, WuiProps } from '@welcome-ui/system'
import { FieldIconSize } from '@welcome-ui/utils'

const rowStyles = css`
  margin-right: lg;
`

const columnStyles = css`
  margin-bottom: sm;
`

const checkableFieldStyles = css`
  ${th('defaultFields.checkablelabel.default')};
  align-items: flex-start;
  overflow-wrap: break-word;

  input {
    margin-top: xs;
  }
`

type StyledFieldProps = {
  isCheckable?: boolean
  flexDirection: WuiProps['flexDirection']
  checked?: boolean
  withHintText?: boolean
}

export const Field = styled('div').withConfig({ shouldForwardProp })<StyledFieldProps>(
  ({ checked, flexDirection, isCheckable, withHintText }) => css`
    ${StyledFieldGroup} {
      margin-bottom: ${isCheckable && 'xxs'};
    }
    ${StyledLabel} {
      ${flexDirection === 'row' && rowStyles};
      ${flexDirection === 'column' && !isCheckable && columnStyles};
      ${isCheckable && checkableFieldStyles};
      ${isCheckable && withHintText && th('defaultFields.checkablelabel.default')}
      ${checked && th('defaultFields.checkablelabel.checked')}
      margin-bottom: ${!withHintText && 'xs'}
    }
    ${StyledHint} {
      margin-bottom: ${isCheckable && 'xxs'};
    }
    ${system};
  `
)

type IconWrapperProps = {
  iconPlacement: 'left' | 'right'
  size?: FieldIconSize
}

export const IconWrapper = styled.div<IconWrapperProps>(
  ({ iconPlacement, size }) => css`
    position: absolute;
    top: 0;
    left: ${iconPlacement === 'left' ? th(`defaultFields.iconPlacement.${size}.left`) : 'auto'};
    right: ${iconPlacement === 'right' ? th(`defaultFields.iconPlacement.${size}.right`) : 'auto'};
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    transition: medium;
    transition-timing-function: primary;
    color: dark-900;
    ${system};

    /* for button action */
    & > button {
      pointer-events: auto;
    }

    ${size === 'xs' &&
    css`
      button {
        height: ${th('buttons.sizes.xxs.height')};
        width: ${th('buttons.sizes.xxs.height')};
      }
    `}
  `
)

export const IconGroupWrapper = styled.div(
  ({ size }: { size: FieldIconSize }) => css`
    position: absolute;
    padding: 0;
    top: 0;
    bottom: 0;
    right: ${size === 'xs' ? 'sm' : 'md'};
    display: flex;
    align-items: center;
    gap: xs;
    color: dark-900;
    ${size === 'xs' &&
    css`
      button {
        height: ${th('buttons.sizes.xxs.height')};
        width: ${th('buttons.sizes.xxs.height')};
      }
    `}
  `
)
