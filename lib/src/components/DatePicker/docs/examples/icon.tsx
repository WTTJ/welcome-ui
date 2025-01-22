import * as React from 'react'
import { DatePicker } from 'welcome-ui/DatePicker'
import { WttjIcon } from 'welcome-ui/Icons'

const Example = () => {
  return (
    <>
      <DatePicker icon={<WttjIcon />} name="welcome" value={new Date()} />
      <DatePicker icon={<WttjIcon />} iconPlacement="right" name="welcome" value={new Date()} />
    </>
  )
}

export default Example
