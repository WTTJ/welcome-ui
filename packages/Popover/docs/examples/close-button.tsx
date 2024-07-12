import * as React from 'react'
import { Popover, usePopover } from '@welcome-ui/popover'
import { Button } from '@welcome-ui/button'

const Example = () => {
  const popover = usePopover({ withCloseButton: true })

  return (
    <>
      <Popover.Trigger as={Button} store={popover}>
        Open Popover
      </Popover.Trigger>
      <Popover aria-label="title popover" store={popover}>
        <Popover.Title>Amazing title</Popover.Title>
        <Popover.Content>
          Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
          aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.
        </Popover.Content>
      </Popover>
    </>
  )
}

export default Example
