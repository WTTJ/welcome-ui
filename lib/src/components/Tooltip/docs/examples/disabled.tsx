import { Button } from '@/components/Button'
import { Tooltip } from '@/components/Tooltip'

const Example = () => {
  return (
    <Tooltip content="Tooltip">
      <Button disabled>Disabled Button</Button>
    </Tooltip>
  )
}

export default Example
