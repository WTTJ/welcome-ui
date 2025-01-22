import * as React from 'react'
import { DatePicker } from 'welcome-ui/DatePicker'

const Example = () => {
  return <DatePicker dateFormat="MM/yyyy" name="welcome" showMonthYearPicker value={new Date()} />
}

export default Example
