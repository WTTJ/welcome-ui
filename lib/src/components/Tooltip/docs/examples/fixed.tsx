import { Button, Tooltip } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <Tooltip content="Tooltip" fixed>
      <Button>Fixed tooltip</Button>
    </Tooltip>
  )
}

export default Example
