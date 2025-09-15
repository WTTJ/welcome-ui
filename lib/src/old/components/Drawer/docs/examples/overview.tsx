import { Button } from '@old/Button'
import { Drawer, useDrawer } from '@old/Drawer'

const Example = () => {
  const drawer = useDrawer()

  return (
    <>
      <Drawer.Trigger as={Button} store={drawer}>
        Open Drawer
      </Drawer.Trigger>
      <Drawer aria-label="Default drawer" store={drawer}>
        Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis aliquam
        nec, convallis sit amet erat. Mauris auctor blandit porta.
      </Drawer>
    </>
  )
}

export default Example
