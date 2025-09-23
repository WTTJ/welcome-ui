import { Button } from '@/components/Button'
import { Drawer, useDrawer } from '@/components/Drawer'

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
      <Drawer aria-label="Default drawer" className="bg-beige-20" store={drawer}>
        <Drawer.Title className="border-b border-b-beige-40 bg-beige-30">Hello</Drawer.Title>
        <Drawer.Content>
          Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
          aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.
        </Drawer.Content>
        <Drawer.Footer className="border-t border-t-beige-40 bg-beige-30">
          <div className="flex gap-lg">
            <Button onClick={onClick}>Save</Button>
            <Button onClick={onClick} variant="tertiary">
              Close
            </Button>
          </div>
        </Drawer.Footer>
      </Drawer>
    </>
  )
}

export default Example
