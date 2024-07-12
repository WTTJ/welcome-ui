import * as React from 'react'
import { Tooltip } from '@welcome-ui/tooltip'
import { Button } from '@welcome-ui/button'

const Example = () => {
  return (
    <Tooltip content="Tooltip" fixed>
      <Button>Fixed tooltip</Button>
    </Tooltip>
  )
}

export default Example
