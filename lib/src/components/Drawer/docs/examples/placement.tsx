import * as React from 'react'

import { Drawer, DrawerProps, useDrawer } from '@/Drawer'
import { Button } from '@/Button'
import { Flex } from '@/Flex'

const Example = () => {
  const drawer = useDrawer()
  const [placement, setPlacement] = React.useState<DrawerProps['placement']>()

  return (
    <>
      <Flex gap="xl">
        <Drawer.Trigger as={Button} onClick={() => setPlacement('top')} store={drawer}>
          Top
        </Drawer.Trigger>
        <Drawer.Trigger as={Button} onClick={() => setPlacement('right')} store={drawer}>
          Right
        </Drawer.Trigger>
        <Drawer.Trigger as={Button} onClick={() => setPlacement('bottom')} store={drawer}>
          Bottom
        </Drawer.Trigger>
        <Drawer.Trigger as={Button} onClick={() => setPlacement('left')} store={drawer}>
          Left
        </Drawer.Trigger>
      </Flex>
      <Drawer aria-label="Placement drawer" placement={placement} store={drawer}>
        Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis aliquam
        nec, convallis sit amet erat. Mauris auctor blandit porta.
      </Drawer>
    </>
  )
}

export default Example
