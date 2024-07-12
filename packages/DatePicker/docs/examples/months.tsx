import * as React from 'react'
import { DatePicker } from '@welcome-ui/date-picker'

const Example = () => {
  return <DatePicker dateFormat="MM/yyyy" name="welcome" showMonthYearPicker value={new Date()} />
}

export default Example
