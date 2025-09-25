import * as React from 'react'

import { Button } from '@/components/Button'
import { Drawer, useDrawer } from '@/components/Drawer'
import type { DrawerProps } from '@/components/Drawer/types'

const Example = () => {
  const drawer = useDrawer()
  const [size, setSize] = React.useState<DrawerProps['size']>()

  return (
    <>
      <div className="flex gap-xl">
        <Drawer.Trigger as={Button} onClick={() => setSize('sm')} store={drawer}>
          sm
        </Drawer.Trigger>
        <Drawer.Trigger as={Button} onClick={() => setSize('md')} store={drawer}>
          md
        </Drawer.Trigger>
        <Drawer.Trigger as={Button} onClick={() => setSize('lg')} store={drawer}>
          lg
        </Drawer.Trigger>
      </div>
      <Drawer aria-label="Size drawer" size={size} store={drawer}>
        <Drawer.Content>
          Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
          aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.
        </Drawer.Content>
      </Drawer>
    </>
  )
}

export default Example
