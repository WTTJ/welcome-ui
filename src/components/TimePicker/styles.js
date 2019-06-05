import styled from 'styled-components'
import TimePicker from 'react-datepicker'

import { fieldTypeStyles } from '../../common/styles/form'

export const StyledTimePicker = styled(TimePicker)`
  ${fieldTypeStyles};
  text-align: center;
`
