import { Button } from '@/components/Button'
import { Drawer, useDrawer } from '@/components/Drawer'

const Example = () => {
  const drawer = useDrawer()

  return (
    <>
      <Drawer.Trigger as={Button} store={drawer}>
        Drawer with content header
      </Drawer.Trigger>
      <Drawer aria-label="Size drawer" store={drawer}>
        <Drawer.Content iconName="info-circle" subtitle="Subtitle" title="Size drawer">
          Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
          aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.
        </Drawer.Content>
      </Drawer>
    </>
  )
}

export default Example
