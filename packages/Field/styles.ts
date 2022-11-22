import styled, { css } from 'styled-components'
import { StyledLabel } from '@welcome-ui/label'
import { Box } from '@welcome-ui/box'
import { StyledHint } from '@welcome-ui/hint'
import { StyledFieldGroup } from '@welcome-ui/field-group'
import { system } from '@welcome-ui/system'
import { DefaultFieldStylesProps } from '@welcome-ui/utils'

const rowStyles = css`
  margin-right: sm;
`

const columnStyles = css`
  margin-bottom: sm;
`

const checkableFieldStyles = css`
  ${({ theme }) => theme.defaultFields.checkablelabel.default};
  margin-bottom: md;
`

type StyledFieldProps = {
  isCheckable?: boolean
  checked?: boolean
  withHintText?: boolean
}

export const Field = styled(Box)<StyledFieldProps>(
  ({ $flexDirection, checked, isCheckable, theme, withHintText }) => css`
    ${StyledFieldGroup} {
      margin-bottom: ${isCheckable && 'xxs'};
    }
    ${StyledLabel} {
      ${$flexDirection === 'row' && rowStyles};
      ${$flexDirection === 'column' && !isCheckable && columnStyles};
      ${isCheckable && !withHintText && checkableFieldStyles};
      ${checked && theme.defaultFields.checkablelabel.checked}
    }
    ${StyledHint} {
      ${isCheckable && withHintText && checkableFieldStyles};
    }
  `
)

type IconWrapperProps = {
  iconPlacement: 'left' | 'right'
  size?: DefaultFieldStylesProps['size']
}

export const IconWrapper = styled(Box)<IconWrapperProps>(
  ({ iconPlacement, size, theme }) => css`
    position: absolute;
    top: 0;
    left: ${iconPlacement === 'left' ? theme.defaultFields.iconPlacement[size].left : 'auto'};
    right: ${iconPlacement === 'right' ? theme.defaultFields.iconPlacement[size].right : 'auto'};
    bottom: 0;
    display: flex;
    width: 16;
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
