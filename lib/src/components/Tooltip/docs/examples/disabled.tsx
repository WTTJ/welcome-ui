import * as React from 'react'

import { Tooltip } from '@/Tooltip'
import { Button } from '@/Button'

const Example = () => {
  return (
    <Tooltip content="Tooltip">
      <Button disabled>Disabled Button</Button>
    </Tooltip>
  )
}

export default Example
