import { Button } from '../../../lib/src/old/components/Button'
import { Modal, useModal } from '../../../lib/src/old/components/Modal'

// Usage examples
export const Example = () => {
  const modal = useModal()

  return (
    <>
      <Modal.Trigger as={Button} store={modal}>
        Open modal
      </Modal.Trigger>
      <Modal ariaLabel="example" store={modal}>
        <Modal.Content
          alignItems="center"
          backgroundColor="neutral-90"
          data-testid="modal-content"
          store={modal}
          withClosingButton
        >
          <Modal.Body>
            Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
            aliquam nec, convallis sit amet erat. Mauris auctor blandit porta. In imperdiet rutrum
            nunc.
          </Modal.Body>
        </Modal.Content>
      </Modal>

      <Modal ariaLabel="example" store={modal}>
        <Modal.Content store={modal} withClosingButton={false}>
          <Modal.Body>
            Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
            aliquam nec, convallis sit amet erat. Mauris auctor blandit porta. In imperdiet rutrum
            nunc.
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  )
}
