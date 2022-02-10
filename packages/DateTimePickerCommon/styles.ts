import styled, { css } from '@xstyled/styled-components'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { th } from '@xstyled/system'
import { IconWrapper } from '@welcome-ui/field'
import { StyledIcon } from '@welcome-ui/icon'
import { StyledButton } from '@welcome-ui/button'
import { StyledClearButton } from '@welcome-ui/clear-button'
import { componentSystem, shouldForwardProp } from '@welcome-ui/system'
import { StyledSelect } from '@welcome-ui/select'
import { defaultFieldStyles, DefaultFieldStylesProps } from '@welcome-ui/utils'

import { Focused, Icon, IconPlacement } from './CustomInput'

export const StyledDatePicker = styled(ReactDatePicker)<
  DefaultFieldStylesProps & ReactDatePickerProps
>(
  ({ size, variant }) => css`
    ${defaultFieldStyles({ size, variant })};
    ${componentSystem};
  `
)

export const StyledTimePicker = styled(ReactDatePicker)<DefaultFieldStylesProps>(
  ({ size, variant }) => css`
    ${defaultFieldStyles({ size, variant })};
    text-align: center;
    ${componentSystem};
  `
)

const iconPlacementStyles = (placement: IconPlacement, size: DefaultFieldStylesProps['size']) => {
  if (placement === 'right') {
    return css`
      ${StyledDatePicker}, ${StyledTimePicker} {
        padding-right: ${`calc(1.5 * ${th(`defaultFields.sizes.${size}.height`)})`};
      }

      ${IconWrapper} {
        &:not(:last-child) {
          right: ${th(`defaultFields.sizes.${size}.height`)};
          width: ${`calc(0.5 * ${th(`defaultFields.sizes.${size}.height`)})`};
          justify-content: flex-end;
        }

        &:only-of-type {
          right: 0.625rem;
        }
      }
    `
  }
  if (placement === 'left') {
    return css`
      ${StyledDatePicker}, ${StyledTimePicker} {
        padding-left: ${th(`defaultFields.sizes.${size}.height`)};
      }
    `
  }
}

export const CustomInput = styled('div').withConfig({ shouldForwardProp })(
  ({
    focused,
    icon,
    iconPlacement,
    size,
  }: {
    focused: Focused
    icon: Icon
    iconPlacement: IconPlacement
    size: DefaultFieldStylesProps['size']
  }) => {
    return css`
      position: relative;
      ${StyledDatePicker}, ${StyledTimePicker} {
        padding-right: ${th(`defaultFields.sizes.${size}.height`)};
      }

      ${icon && iconPlacementStyles(iconPlacement, size)};

      ${StyledClearButton} {
        z-index: ${focused ? 1 : null};
      }
    `
  }
)

export const CustomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: lg;
  text-align: left;
  ${StyledButton} {
    width: 25;
    height: 25;
    ${StyledIcon} {
      width: 10;
      height: 10;
    }
  }
`

export const Selects = styled.div`
  display: flex;
  ${/* sc-selector */ StyledSelect}:first-child {
    margin-right: sm;
  }
`
