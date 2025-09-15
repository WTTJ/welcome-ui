import { Button } from '@old/Button'
import { Tooltip } from '@old/Tooltip'

const Example = () => {
  return (
    <Tooltip content="Tooltip" fixed withArrow>
      <Button>With an arrow ⬇️</Button>
    </Tooltip>
  )
}

export default Example
