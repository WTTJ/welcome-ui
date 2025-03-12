import styled, { css, system } from '@xstyled/styled-components'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'

import { defaultFieldStyles, DefaultFieldStylesProps } from '../../utils/field-styles'

import { Focused } from './CustomInput'

import { StyledIcon } from '@/Icon'
import { IconGroupWrapper, IconWrapper } from '@/Field'
import { StyledSelect } from '@/Select'
import { StyledButton } from '@/Button'

// Workaround to this issue: https://github.com/Hacker0x01/react-datepicker/issues/3834
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const StyledDatePicker = styled(ReactDatePicker.default || ReactDatePicker)<
  DefaultFieldStylesProps & ReactDatePickerProps
>(
  ({ iconPlacement, size, transparent, variant }) => css`
    ${defaultFieldStyles({ size, variant, transparent, isClearable: true, iconPlacement })};
    ${system};
  `
)

export const StyledTimePicker = styled(
  // Workaround to this issue: https://github.com/Hacker0x01/react-datepicker/issues/3834
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ReactDatePicker.default || ReactDatePicker
)<DefaultFieldStylesProps>(
  ({ iconPlacement, size, transparent, variant }) => css`
    ${defaultFieldStyles({ size, variant, transparent, isClearable: true, iconPlacement })};
    text-align: center;
    ${system};
  `
)

export const CustomInput = styled.div<{ focused: Focused }>(
  ({ focused }) => css`
    position: relative;

    ${IconGroupWrapper} {
      z-index: ${focused ? 1 : null};
    }

    ${IconWrapper} {
      z-index: ${focused ? 1 : null};
    }
  `
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
