import { Button } from '@/components/Button'
import { Tooltip } from '@/components/Tooltip'

const Example = () => {
  return (
    <Tooltip content="Tooltip content" title="Tooltip Title">
      <Button>Tooltip with title</Button>
    </Tooltip>
  )
}

export default Example
