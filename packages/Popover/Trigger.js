import { oneOf } from 'prop-types'
import React from 'react'
import { PopoverDisclosure } from 'reakit/Popover'

export function Trigger({ triggerMethod = 'click', ...rest }) {
  const hoverable = triggerMethod === 'hover'

  return (
    <PopoverDisclosure
      onMouseEnter={hoverable ? rest.show : undefined}
      onMouseLeave={hoverable ? rest.hide : undefined}
      {...rest}
    />
  )
}

Trigger.propTypes = {
  triggerMethod: oneOf(['click', 'hover'])
}
