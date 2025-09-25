import * as React from 'react'

import { Button } from '@/components/Button'
import { Drawer, useDrawer } from '@/components/Drawer'
import type { DrawerProps } from '@/components/Drawer/types'

const Example = () => {
  const drawer = useDrawer()
  const [placement, setPlacement] = React.useState<DrawerProps['placement']>()

  return (
    <>
      <div className="flex gap-xl">
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
      </div>
      <Drawer aria-label="Placement drawer" placement={placement} store={drawer}>
        <Drawer.Content>
          Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
          aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.
        </Drawer.Content>
      </Drawer>
    </>
  )
}

export default Example
