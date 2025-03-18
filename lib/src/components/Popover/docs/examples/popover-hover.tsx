import { PopoverHover, usePopoverHover } from '@/Popover'
import { Button } from '@/Button'

const Example = () => {
  const popover = usePopoverHover()

  return (
    <>
      <PopoverHover.Trigger as={Button} store={popover}>
        Hover the button to open
      </PopoverHover.Trigger>
      <PopoverHover aria-label="hover to open popover" store={popover}>
        <PopoverHover.Title>Amazing title</PopoverHover.Title>
        <PopoverHover.Content>
          Praesent sit amet quam ac velit faucibus dapibus.
          <br />
          Quisque sapien ligula, rutrum quis aliquam nec, convallis sit amet erat.
          <br />
          Mauris auctor blandit porta.
        </PopoverHover.Content>
      </PopoverHover>
    </>
  )
}

export default Example
