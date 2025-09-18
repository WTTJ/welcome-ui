import { Button } from '@/components/Button'
import { Tooltip } from '@/components/Tooltip'

const Example = () => {
  return (
    <Tooltip content="Tooltip" fixed>
      <Button>Fixed tooltip</Button>
    </Tooltip>
  )
}

export default Example
