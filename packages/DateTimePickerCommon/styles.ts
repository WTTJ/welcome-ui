import styled, { css, DefaultTheme } from 'styled-components'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { IconWrapper } from '@welcome-ui/field'
import { StyledIcon } from '@welcome-ui/icon'
import { StyledButton } from '@welcome-ui/button'
import { StyledClearButton } from '@welcome-ui/clear-button'
import { system } from '@welcome-ui/system'
import { StyledSelect } from '@welcome-ui/select'
import { defaultFieldStyles, DefaultFieldStylesProps } from '@welcome-ui/utils'

import { Focused, Icon, IconPlacement } from './CustomInput'

export const StyledDatePicker = styled(ReactDatePicker)<
  DefaultFieldStylesProps & ReactDatePickerProps
>(
  ({ size, transparent, variant }) => css`
    ${defaultFieldStyles({ size, variant, transparent })};
    ${system};
  `
)

export const StyledTimePicker = styled(ReactDatePicker)<DefaultFieldStylesProps>(
  ({ size, transparent, variant }) => css`
    ${defaultFieldStyles({ size, variant, transparent })};
    text-align: center;
    ${system};
  `
)

const iconPlacementStyles = (
  placement: IconPlacement,
  size: DefaultFieldStylesProps['size'],
  theme: DefaultTheme
) => {
  if (placement === 'right') {
    return css`
      ${StyledDatePicker}, ${StyledTimePicker} {
        padding-right: ${`calc(1.5 * ${theme.defaultFields.sizes[size].height}`};
      }

      ${IconWrapper} {
        &:not(:last-child) {
          right: ${theme.defaultFields.sizes[size].height};
          width: ${`calc(0.5 * ${theme.defaultFields.sizes[size].height}`};
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
        padding-left: ${theme.defaultFields.sizes[size].height};
      }
    `
  }
}

export const CustomInput = styled('div')<{
  focused: Focused
  icon: Icon
  iconPlacement: IconPlacement
  size: DefaultFieldStylesProps['size']
}>(({ focused, icon, iconPlacement, size, theme }) => {
  return css`
    position: relative;
    ${StyledDatePicker}, ${StyledTimePicker} {
      padding-right: ${theme.defaultFields.sizes[size].height};
    }

    ${icon && iconPlacementStyles(iconPlacement, size, theme)};

    ${StyledClearButton} {
      z-index: ${focused ? 1 : null};
    }
  `
})

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
