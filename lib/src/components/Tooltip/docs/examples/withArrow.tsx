import { Button } from '@/components/Button'
import { Tooltip } from '@/components/Tooltip'

const Example = () => {
  return (
    <Tooltip content="Tooltip" fixed withArrow>
      <Button>With an arrow ⬇️</Button>
    </Tooltip>
  )
}

export default Example
