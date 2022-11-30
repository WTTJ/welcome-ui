import styled, { css, system } from '@xstyled/styled-components'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { StyledIcon } from '@welcome-ui/icon'
import { StyledButton } from '@welcome-ui/button'
import { IconGroupWrapper, IconWrapper } from '@welcome-ui/field'
import { shouldForwardProp } from '@welcome-ui/system'
import { StyledSelect } from '@welcome-ui/select'
import { defaultFieldStyles, DefaultFieldStylesProps } from '@welcome-ui/utils'

import { Focused } from './CustomInput'

export const StyledDatePicker = styled(ReactDatePicker)<
  DefaultFieldStylesProps & ReactDatePickerProps
>(
  ({ iconPlacement, size, transparent, variant }) => css`
    ${defaultFieldStyles({ size, variant, transparent, isClearable: true, iconPlacement })};
    ${system};
  `
)

export const StyledTimePicker = styled(ReactDatePicker)<DefaultFieldStylesProps>(
  ({ iconPlacement, size, transparent, variant }) => css`
    ${defaultFieldStyles({ size, variant, transparent, isClearable: true, iconPlacement })};
    text-align: center;
    ${system};
  `
)

export const CustomInput = styled('div').withConfig({ shouldForwardProp })(
  ({ focused }: { focused: Focused }) => {
    return css`
      position: relative;

      ${IconGroupWrapper} {
        z-index: ${focused ? 1 : null};
      }

      ${IconWrapper} {
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
