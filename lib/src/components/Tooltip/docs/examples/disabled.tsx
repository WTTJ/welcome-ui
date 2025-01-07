import { Button, Tooltip } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <Tooltip content="Tooltip">
      <Button disabled>Disabled Button</Button>
    </Tooltip>
  )
}

export default Example
