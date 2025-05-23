import { Button } from '@/Button'
import { AssetDrawer, Drawer, useDrawer } from '@/Drawer'
import { UserIcon } from '@/Icons'

const Example = () => {
  const drawer = useDrawer()

  return (
    <>
      <Drawer.Trigger as={Button} store={drawer}>
        Open Drawer
      </Drawer.Trigger>
      <AssetDrawer aria-label="Asset drawer" store={drawer}>
        <AssetDrawer.Header
          action={
            <>
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
            </>
          }
          icon={UserIcon}
          subtitle="Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis aliquam nec, convallis sit amet erat."
          title="Praesent sit amet quam faucibus dapibus"
        />
        Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis aliquam
        nec, convallis sit amet erat. Mauris auctor blandit porta.Praesent sit amet quam ac velit
        faucibus dapibus. Quisque sapien ligula, rutrum quis aliquam nec, convallis sit amet erat.
        Mauris auctor blandit porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien
        ligula, rutrum quis aliquam nec, convallis sit amet erat. Mauris auctor blandit
        porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
        aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.Praesent sit amet quam ac
        velit faucibus dapibus. Quisque sapien ligula, rutrum quis aliquam nec, convallis sit amet
        erat. Mauris auctor blandit porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque
        sapien ligula, rutrum quis aliquam nec, convallis sit amet erat. Mauris auctor blandit
        porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
        aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.Praesent sit amet quam ac
        velit faucibus dapibus. Quisque sapien ligula, rutrum quis aliquam nec, convallis sit amet
        erat. Mauris auctor blandit porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque
        sapien ligula, rutrum quis aliquam nec, convallis sit amet erat. Mauris auctor blandit
        porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
        aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.Praesent sit amet quam ac
        velit faucibus dapibus. Quisque sapien ligula, rutrum quis aliquam nec, convallis sit amet
        erat. Mauris auctor blandit porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque
        sapien ligula, rutrum quis aliquam nec, convallis sit amet erat. Mauris auctor blandit
        porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
        aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.Praesent sit amet quam ac
        velit faucibus dapibus. Quisque sapien ligula, rutrum quis aliquam nec, convallis sit amet
        erat. Mauris auctor blandit porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque
        sapien ligula, rutrum quis aliquam nec, convallis sit amet erat. Mauris auctor blandit
        porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
        aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.Praesent sit amet quam ac
        velit faucibus dapibus. Quisque sapien ligula, rutrum quis aliquam nec, convallis sit amet
        erat. Mauris auctor blandit porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque
        sapien ligula, rutrum quis aliquam nec, convallis sit amet erat. Mauris auctor blandit
        porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
        aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.Praesent sit amet quam ac
        velit faucibus dapibus. Quisque sapien ligula, rutrum quis aliquam nec, convallis sit amet
        erat. Mauris auctor blandit porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque
        sapien ligula, rutrum quis aliquam nec, convallis sit amet erat. Mauris auctor blandit
        porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
        aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.Praesent sit amet quam ac
        velit faucibus dapibus. Quisque sapien ligula, rutrum quis aliquam nec, convallis sit amet
        erat. Mauris auctor blandit porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque
        sapien ligula, rutrum quis aliquam nec, convallis sit amet erat. Mauris auctor blandit
        porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
        aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.Praesent sit amet quam ac
        velit faucibus dapibus. Quisque sapien ligula, rutrum quis aliquam nec, convallis sit amet
        erat. Mauris auctor blandit porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque
        sapien ligula, rutrum quis aliquam nec, convallis sit amet erat. Mauris auctor blandit
        porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
        aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.Praesent sit amet quam ac
        velit faucibus dapibus. Quisque sapien ligula, rutrum quis aliquam nec, convallis sit amet
        erat. Mauris auctor blandit porta.Praesent sit amet quam ac velit faucibus dapibus. Quisque
        sapien ligula, rutrum quis aliquam nec, convallis sit amet erat. Mauris auctor blandit
        porta.
      </AssetDrawer>
    </>
  )
}

export default Example
