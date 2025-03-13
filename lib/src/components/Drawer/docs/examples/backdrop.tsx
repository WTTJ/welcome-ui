
import { Drawer, useDrawer } from '@/Drawer'
import { Button } from '@/Button'

const Example = () => {
  const drawer = useDrawer()

  return (
    <>
      <Drawer.Trigger as={Button} store={drawer}>
        Open Drawer with backdrop
      </Drawer.Trigger>
      <Drawer aria-label="Backdrop drawer" hideOnInteractOutside store={drawer} withBackdrop>
        Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis aliquam
        nec, convallis sit amet erat. Mauris auctor blandit porta.
      </Drawer>
    </>
  )
}

export default Example
