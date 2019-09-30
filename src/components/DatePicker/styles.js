import styled from '@xstyled/styled-components'
import ReactDatePicker from 'react-datepicker'

import { componentSystem } from '../../utils/system'
import { fieldStyles } from '../../common/styles/form'

export const DatePicker = styled(ReactDatePicker)`
  ${fieldStyles};
  ${componentSystem};
`
