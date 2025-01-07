import { DatePicker } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return <DatePicker dateFormat="MM/yyyy" name="welcome" showMonthYearPicker value={new Date()} />
}

export default Example
