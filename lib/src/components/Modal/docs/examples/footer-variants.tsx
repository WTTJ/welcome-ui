import { Button } from '@/components/Button'
import { Modal, useModal } from '@/components/Modal'

const Example = () => {
  const modalRight = useModal()
  const modalFull = useModal()

  return (
    <>
      <Modal.Trigger as={Button} store={modalRight}>
        Open modal (right)
      </Modal.Trigger>
      <Modal ariaLabel="example-right" store={modalRight}>
        <Modal.Content>
          <Modal.Body>Example content for right variant</Modal.Body>
          <Modal.Footer>
            <Modal.Footer.Checkbox
              checked={true}
              // eslint-disable-next-line no-console
              handleCheckbox={isChecked => console.log('You clicked checkbox:', isChecked)}
            />
            <Modal.Footer.Buttons>
              <Button onClick={() => modalRight.hide()} variant="secondary">
                Cancel
              </Button>
              <Button variant="primary">Save</Button>
            </Modal.Footer.Buttons>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal.Trigger as={Button} store={modalFull}>
        Open modal (full)
      </Modal.Trigger>
      <Modal ariaLabel="example-full" store={modalFull}>
        <Modal.Content>
          <Modal.Body>Example content for full variant</Modal.Body>
          <Modal.Footer variant="full">
            <Modal.Footer.Checkbox
              checked={true}
              // eslint-disable-next-line no-console
              handleCheckbox={isChecked => console.log('You clicked checkbox:', isChecked)}
            />
            <Modal.Footer.Buttons>
              <Button onClick={() => modalFull.hide()} variant="secondary">
                Cancel
              </Button>
              <Button variant="primary">Confirm</Button>
            </Modal.Footer.Buttons>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default Example
