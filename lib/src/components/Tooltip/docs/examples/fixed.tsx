import { Tooltip } from '@/Tooltip'
import { Button } from '@/Button'

const Example = () => {
  return (
    <Tooltip content="Tooltip" fixed>
      <Button>Fixed tooltip</Button>
    </Tooltip>
  )
}

export default Example
