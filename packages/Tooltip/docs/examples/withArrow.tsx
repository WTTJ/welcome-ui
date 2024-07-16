import * as React from 'react'
import { Tooltip } from '@welcome-ui/tooltip'
import { Button } from '@welcome-ui/button'

const Example = () => {
  return (
    <Tooltip content="Tooltip" fixed withArrow>
      <Button>Fixed tooltip with an arrow ⬇️</Button>
    </Tooltip>
  )
}

export default Example
