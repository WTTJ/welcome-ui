import styled, { css } from '@xstyled/styled-components'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { StyledIcon } from '@welcome-ui/icon'
import { StyledButton } from '@welcome-ui/button'
import { IconGroupWrapper, IconWrapper } from '@welcome-ui/field'
import { shouldForwardProp } from '@welcome-ui/system'
import { StyledSelect } from '@welcome-ui/select'
import { defaultFieldStyles, DefaultFieldStylesProps } from '@welcome-ui/utils'

import { Focused } from './CustomInput'

export const StyledDatePicker = styled.box.attrs({
  // Workaround to this issue: https://github.com/Hacker0x01/react-datepicker/issues/3834
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  as: (ReactDatePicker.default as typeof ReactDatePicker) || ReactDatePicker,
})<DefaultFieldStylesProps & ReactDatePickerProps>(
  ({ iconPlacement, size, transparent, variant }) => css`
    ${defaultFieldStyles({ size, variant, transparent, isClearable: true, iconPlacement })};
  `
)

export const StyledTimePicker = styled.box.attrs({
  // Workaround to this issue: https://github.com/Hacker0x01/react-datepicker/issues/3834
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  as: (ReactDatePicker.default as typeof ReactDatePicker) || ReactDatePicker,
})<DefaultFieldStylesProps>(
  ({ iconPlacement, size, transparent, variant }) => css`
    ${defaultFieldStyles({ size, variant, transparent, isClearable: true, iconPlacement })};
    text-align: center;
  `
)

export const CustomInput = styled('div').withConfig({ shouldForwardProp })<{ focused: Focused }>(
  ({ focused }) => {
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
  ${/* sc-selector */ StyledSelect}:first-child:not(:last-child) {
    margin-right: sm;
  }
`

export const fixAriaMessageStyle = css`
  .react-datepicker__aria-live {
    position: absolute;
    clip-path: circle(0);
    border: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    width: 1px;
    white-space: nowrap;
  }
`
