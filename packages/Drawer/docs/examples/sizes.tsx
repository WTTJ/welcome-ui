import * as React from 'react'
import { Drawer, DrawerProps, useDrawer } from '@welcome-ui/drawer'
import { Button } from '@welcome-ui/button'
import { Flex } from '@welcome-ui/flex'

const Example = () => {
  const drawer = useDrawer()
  const [size, setSize] = React.useState<DrawerProps['size']>()

  return (
    <>
      <Flex gap="xl">
        <Drawer.Trigger as={Button} onClick={() => setSize('sm')} store={drawer}>
          sm
        </Drawer.Trigger>
        <Drawer.Trigger as={Button} onClick={() => setSize('md')} store={drawer}>
          md
        </Drawer.Trigger>
        <Drawer.Trigger as={Button} onClick={() => setSize('lg')} store={drawer}>
          lg
        </Drawer.Trigger>
        <Drawer.Trigger as={Button} onClick={() => setSize('50%')} store={drawer}>
          50%
        </Drawer.Trigger>
      </Flex>
      <Drawer aria-label="Size drawer" size={size} store={drawer}>
        Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis aliquam
        nec, convallis sit amet erat. Mauris auctor blandit porta.
      </Drawer>
    </>
  )
}

export default Example
