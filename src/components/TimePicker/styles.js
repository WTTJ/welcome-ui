import styled from '@xstyled/styled-components'
import ReactDatePicker from 'react-datepicker'

import { componentSystem } from '../../utils/system'
import { fieldStyles } from '../../common/styles/form'

export const TimePicker = styled(ReactDatePicker)`
  ${fieldStyles};
  text-align: center;
  ${componentSystem};
`
