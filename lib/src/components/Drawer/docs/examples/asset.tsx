import { Button } from '@/components/Button'
import { AssetDrawer, Drawer, useDrawer } from '@/components/Drawer'
import { UserIcon } from '@/components/Icon'

const Example = () => {
  const drawer = useDrawer()

  return (
    <>
      <Drawer.Trigger as={Button} store={drawer}>
        Open AssetDrawer
      </Drawer.Trigger>
      <AssetDrawer aria-label="Asset drawer" maxWidth="42rem" store={drawer}>
        <AssetDrawer.Header
          action={
            <div className="flex gap-md">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
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
