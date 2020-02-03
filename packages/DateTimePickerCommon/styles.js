import styled, { css } from '@xstyled/styled-components'
import ReactDatePicker from 'react-datepicker'
import { th } from '@xstyled/system'
import { IconWrapper } from '@welcome-ui/field'
import { StyledIcon } from '@welcome-ui/icon'
import { StyledButton } from '@welcome-ui/button'
import { StyledClearButton } from '@welcome-ui/clear-button'
import { componentSystem, filterFieldComponent } from '@welcome-ui/system'
import { StyledSelect } from '@welcome-ui/select'
import { fieldStyles } from '@welcome-ui/utils'

import { FILTER_PROPS } from './propTypes'

export const DatePicker = styled(ReactDatePicker)`
  ${fieldStyles};
  ${componentSystem};
`

export const TimePicker = styled(ReactDatePicker)`
  ${fieldStyles};
  text-align: center;
  ${componentSystem};
`

const iconPlacementStyles = (placement, size, rest) => {
  if (placement === 'right') {
    return css`
      ${DatePicker}, ${TimePicker} {
        padding-right: ${`calc(1.5 * ${th(`fields.sizes.${size}.height`)(rest)})`};
      }

      ${IconWrapper} {
        &:not(:last-child) {
          right: ${th(`fields.sizes.${size}.height`)(rest)};
          width: ${`calc(0.5 * ${th(`fields.sizes.${size}.height`)(rest)})`};
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
      ${DatePicker}, ${TimePicker} {
        padding-left: ${th(`fields.sizes.${size}.height`)(rest)};
      }
    `
  }
}

export const CustomInput = styled(filterFieldComponent('div', FILTER_PROPS))(
  ({ focused, icon, iconPlacement, size, ...rest }) => {
    return css`
      position: relative;
      ${DatePicker}, ${TimePicker} {
        padding-right: ${th(`fields.sizes.${size}.height`)(rest)};
      }

      ${icon && iconPlacementStyles(iconPlacement, size, rest)};

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
