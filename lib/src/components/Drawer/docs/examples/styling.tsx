import { Button } from '@/Button'
import { Drawer, useDrawer } from '@/Drawer'
import { Stack } from '@/Stack'

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
        backgroundColor="beige-30"
        store={drawer}
        withCloseButton={false}
      >
        <Drawer.Close h={30} store={drawer} w={30} />
        <Drawer.Title borderBottom="1px solid" borderBottomColor="neutral-30">
          Hello
        </Drawer.Title>
        <Drawer.Content backgroundColor="neutral-10">
          Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
          aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.
        </Drawer.Content>
        <Drawer.Footer borderTop="1px solid" borderTopColor="neutral-30">
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
