import * as React from 'react'
import { Tooltip } from 'welcome-ui/Tooltip'
import { Button } from 'welcome-ui/Button'

const Example = () => {
  return (
    <Tooltip content="Tooltip">
      <Button>Tooltip</Button>
    </Tooltip>
  )
}

export default Example
