import { Button } from '@/Button'
import { Tooltip } from '@/Tooltip'

const Example = () => {
  return (
    <Tooltip content="Tooltip">
      <Button disabled>Disabled Button</Button>
    </Tooltip>
  )
}

export default Example
