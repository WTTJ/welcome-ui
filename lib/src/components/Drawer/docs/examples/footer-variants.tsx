import { Accordion, useAccordion } from '@/components/Accordion'
import { Button } from '@/components/Button'
import { Drawer, useDrawer } from '@/components/Drawer'

const Example = () => {
  const drawer = useDrawer()
  const drawer2 = useDrawer()
  const accordion = useAccordion()
  const accordion2 = useAccordion()
  const accordion3 = useAccordion()
  const accordion4 = useAccordion()
  const accordion5 = useAccordion()
  const accordion6 = useAccordion()
  const accordion7 = useAccordion()
  const accordion8 = useAccordion()

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
          <Accordion store={accordion} title="Accordion title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Accordion>
          <Accordion store={accordion2} title="Accordion title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Accordion>
          <Accordion store={accordion3} title="Accordion title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Accordion>
          <Accordion store={accordion4} title="Accordion title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Accordion>
          <Accordion store={accordion5} title="Accordion title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Accordion>
          <Accordion store={accordion6} title="Accordion title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Accordion>
          <Accordion store={accordion7} title="Accordion title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Accordion>
          <Accordion store={accordion8} title="Accordion title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Accordion>
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
