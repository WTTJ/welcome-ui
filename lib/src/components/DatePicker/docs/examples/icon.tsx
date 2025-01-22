import * as React from 'react'
import { DatePicker } from '@welcome-ui/date-picker'
import { WttjIcon } from '@welcome-ui/icons'

const Example = () => {
  return (
    <>
      <DatePicker icon={<WttjIcon />} name="welcome" value={new Date()} />
      <DatePicker icon={<WttjIcon />} iconPlacement="right" name="welcome" value={new Date()} />
    </>
  )
}

export default Example
