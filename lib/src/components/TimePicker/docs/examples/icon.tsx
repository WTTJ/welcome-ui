import * as React from 'react'
import { TimePicker } from 'welcome-ui/TimePicker'
import { WttjIcon } from 'welcome-ui/Icons'

const Example = () => {
  return (
    <>
      <TimePicker icon={<WttjIcon />} name="welcome" value={new Date()} />
      <TimePicker icon={<WttjIcon />} iconPlacement="right" name="welcome" value={new Date()} />
    </>
  )
}

export default Example
