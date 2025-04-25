import * as React from 'react'

import { Button } from '@/Button'
import { Tooltip } from '@/Tooltip'

const Example = () => {
  return (
    <Tooltip content="Tooltip">
      <Button>Tooltip</Button>
    </Tooltip>
  )
}

export default Example
