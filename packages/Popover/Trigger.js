import { oneOf } from 'prop-types'
import React from 'react'
import { PopoverDisclosure } from 'reakit/Popover'

export function Trigger({ triggerMethod = 'click', ...rest }) {
  const hoverable = triggerMethod === 'hover' || undefined

  return (
    <PopoverDisclosure
      onMouseEnter={hoverable && rest.show}
      onMouseLeave={hoverable && rest.hide}
      {...rest}
    />
  )
}

Trigger.propTypes = {
  triggerMethod: oneOf(['click', 'hover'])
}
