import * as React from 'react'

import { Tooltip } from '@/Tooltip'
import { Button } from '@/Button'

const Example = () => {
  return (
    <Tooltip content="Tooltip" fixed withArrow>
      <Button>With an arrow ⬇️</Button>
    </Tooltip>
  )
}

export default Example
