import styled from '@xstyled/styled-components'
import ReactDatePicker from 'react-datepicker'
import { componentSystem } from '@welcome-ui/system'
import { fieldStyles } from '@welcome-ui/utils'

export const DatePicker = styled(ReactDatePicker)`
  ${fieldStyles};
  ${componentSystem};
`
