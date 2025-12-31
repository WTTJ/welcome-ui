import { Button } from '@/components/Button'
import { Drawer, useDrawer } from '@/components/Drawer'

const Example = () => {
  const drawer = useDrawer()
  const drawer2 = useDrawer()

  const onClickCloseDrawer = () => drawer.hide()
  const onClickCloseDrawer2 = () => drawer2.hide()
  // eslint-disable-next-line no-console
  const onClickApply = () => console.log('Apply action')

  return (
    <>
      <div className="flex gap-lg">
        <Drawer.Trigger as={Button} store={drawer}>
          Open Drawer (right)
        </Drawer.Trigger>
        <Drawer.Trigger as={Button} store={drawer2}>
          Open Drawer (full)
        </Drawer.Trigger>
      </div>

      <Drawer aria-label="Drawer with right footer" store={drawer}>
        <Drawer.Header>
          <Drawer.Header.Title title="Right footer" />
        </Drawer.Header>
        <Drawer.Content>Content with actions aligned to the right.</Drawer.Content>
        <Drawer.Footer>
          <Button onClick={onClickCloseDrawer} variant="secondary">
            Cancel
          </Button>
          <Button onClick={onClickApply}>Apply</Button>
        </Drawer.Footer>
      </Drawer>

      <Drawer aria-label="Drawer with full footer" store={drawer2}>
        <Drawer.Header>
          <Drawer.Header.Title title="Full footer" />
        </Drawer.Header>
        <Drawer.Content>
          Content with full-width footer where elements take the full available space.
        </Drawer.Content>
        <Drawer.Footer variant="full">
          <Button onClick={onClickCloseDrawer2} variant="secondary">
            Cancel
          </Button>
          <Button onClick={onClickApply}>Apply</Button>
        </Drawer.Footer>
      </Drawer>
    </>
  )
}

export default Example
