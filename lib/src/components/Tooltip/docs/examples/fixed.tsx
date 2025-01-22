import * as React from 'react'
import { Tooltip } from 'welcome-ui/Tooltip'
import { Button } from 'welcome-ui/Button'

const Example = () => {
  return (
    <Tooltip content="Tooltip" fixed>
      <Button>Fixed tooltip</Button>
    </Tooltip>
  )
}

export default Example
