import { Button } from '@/components/Button'
import { Popover, usePopover } from '@/components/Popover'

const Example = () => {
  const popover = usePopover()

  return (
    <>
      <Popover.Trigger as={Button} store={popover}>
        Open Popover
      </Popover.Trigger>
      <Popover aria-label="usage popover" store={popover}>
        <Popover.Content>
          Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
          aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.
        </Popover.Content>
      </Popover>
    </>
  )
}

export default Example
