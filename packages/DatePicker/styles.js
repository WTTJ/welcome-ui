import styled from '@xstyled/styled-components'
import ReactDatePicker from 'react-datepicker'

import { componentSystem } from '../Core/utils/system'
import { fieldStyles } from '../Core/styles/form'

export const DatePicker = styled(ReactDatePicker)`
  ${fieldStyles};
  ${componentSystem};
`
