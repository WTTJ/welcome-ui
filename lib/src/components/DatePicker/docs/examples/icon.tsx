import { DatePicker, WttjIcon } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <>
      <DatePicker icon={<WttjIcon />} name="welcome" value={new Date()} />
      <DatePicker icon={<WttjIcon />} iconPlacement="right" name="welcome" value={new Date()} />
    </>
  )
}

export default Example
