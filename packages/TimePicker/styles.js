import styled from '@xstyled/styled-components'
import ReactDatePicker from 'react-datepicker'

import { componentSystem } from '../Core/utils/system'
import { fieldStyles } from '../Core/styles/form'

export const TimePicker = styled(ReactDatePicker)`
  ${fieldStyles};
  text-align: center;
  ${componentSystem};
`
