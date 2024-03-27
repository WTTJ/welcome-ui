import styled, { css, th } from '@wttj/xstyled-styled-components'
import { StyledLabel } from '@welcome-ui/label'
import { FieldIconSize } from '@welcome-ui/utils'

const checkableFieldStyles = css`
  ${th('defaultFields.checkablelabel.default')};
  align-items: flex-start;
  overflow-wrap: break-word;
`

type StyledFieldProps = {
  checked?: boolean
  isCheckable?: boolean
  isRadioGroup?: boolean
  withHintText?: boolean
}

export const Field = styled.divBox(
  ({ checked, isCheckable, isRadioGroup, withHintText }: StyledFieldProps) => css`
    ${isCheckable &&
    css`
      input {
        margin-top: xs;
      }
    `}
    ${StyledLabel} {
      ${isCheckable && checkableFieldStyles};
      ${isCheckable && withHintText && th('defaultFields.checkablelabel.default')}
      ${checked && th('defaultFields.checkablelabel.checked')}
      ${!isCheckable &&
      css`
        margin-bottom: sm;
      `}
      ${isRadioGroup &&
      css`
        margin-bottom: md;
      `}
    }
  `
)

export const Label = styled.divBox`
  display: flex;
  align-items: flex-start;
  gap: sm;
`

export const LabelWithHint = styled.divBox`
  display: flex;
  flex-direction: column;
`

type IconWrapperProps = {
  iconPlacement: 'left' | 'right'
  size?: FieldIconSize
}

export const IconWrapper = styled.divBox(
  ({ iconPlacement, size }: IconWrapperProps) => css`
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
