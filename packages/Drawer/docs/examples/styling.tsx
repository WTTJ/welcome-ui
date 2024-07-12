import * as React from 'react'
import { Drawer, useDrawer } from '@welcome-ui/drawer'
import { Button } from '@welcome-ui/button'
import { Stack } from '@welcome-ui/stack'

const Example = () => {
  const drawer = useDrawer()

  const onClick = () => {
    drawer.hide()
  }

  return (
    <>
      <Drawer.Trigger as={Button} store={drawer}>
        Open Drawer
      </Drawer.Trigger>
      <Drawer
        aria-label="Default drawer"
        backgroundColor="nude-200"
        store={drawer}
        withCloseButton={false}
      >
        <Drawer.Close h={30} store={drawer} w={30} />
        <Drawer.Title borderBottom="1px solid" borderBottomColor="dark-200">
          Hello
        </Drawer.Title>
        <Drawer.Content backgroundColor="light-900">
          Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
          aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.
        </Drawer.Content>
        <Drawer.Footer borderTop="1px solid" borderTopColor="dark-200">
          <Stack direction="row">
            <Button onClick={onClick}>Save</Button>
            <Button onClick={onClick} variant="tertiary">
              Close
            </Button>
          </Stack>
        </Drawer.Footer>
      </Drawer>
    </>
  )
}

export default Example
