import * as React from 'react'

import { WttjIcon } from '@/Icons'
import { TimePicker } from '@/TimePicker'

const Example = () => {
  return (
    <>
      <TimePicker icon={<WttjIcon />} name="welcome" value={new Date()} />
      <TimePicker icon={<WttjIcon />} iconPlacement="right" name="welcome" value={new Date()} />
    </>
  )
}

export default Example
