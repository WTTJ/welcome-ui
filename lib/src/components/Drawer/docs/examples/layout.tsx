import { Button, Drawer, useDrawer } from 'welcome-ui'
import * as React from 'react'

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
      <Drawer aria-label="Layout drawer" store={drawer}>
        <Drawer.Title>Hello</Drawer.Title>
        <Drawer.Content>
          Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
          aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.
        </Drawer.Content>
        <Drawer.Footer>
          <Button onClick={onClick}>Close Drawer</Button>
        </Drawer.Footer>
      </Drawer>
    </>
  )
}

export default Example
