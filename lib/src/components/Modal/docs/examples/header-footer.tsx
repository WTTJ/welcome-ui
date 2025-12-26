import { Button } from '@/components/Button'
import { Modal, useModal } from '@/components/Modal'
import { Window } from '@/components/Window'

const Example = () => {
  const modal = useModal()
  const modal2 = useModal()
  const modal3 = useModal()
  const title = 'Nullam non lacinia'
  const subtitle = 'Praesent sit amet quam ac velit faucibus dapibus, quisque sapien ligula.'

  return (
    <>
      <Modal.Trigger as={Button} store={modal}>
        Header with Icon and Footer
      </Modal.Trigger>
      <Modal ariaLabel="example" store={modal}>
        <Modal.Content>
          <Modal.Header>
            <Window.Header.Title title={title} />
            <Window.Header.RightActions isClosable onClose={modal.hide} />
          </Modal.Header>
          <Modal.Body iconName="rocket" subtitle={subtitle} title={title}>
            Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
            aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.
          </Modal.Body>
          <Modal.Footer>
            <Modal.Footer.Buttons>
              <Button variant="secondary">Lorem dolir</Button>
              <Button onClick={() => modal.hide()}>Close</Button>
            </Modal.Footer.Buttons>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal.Trigger as={Button} store={modal2}>
        Header and Footer
      </Modal.Trigger>
      <Modal ariaLabel="example-2" store={modal2}>
        <Modal.Content>
          <Modal.Header>
            <Window.Header.Title title={title} />
            <Window.Header.RightActions isClosable onClose={modal2.hide} />
          </Modal.Header>
          <Modal.Body subtitle={subtitle} title={title}>
            Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
            aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.
          </Modal.Body>
          <Modal.Footer>
            <Modal.Footer.Buttons>
              <Button variant="secondary">Lorem dolir</Button>
              <Button onClick={() => modal2.hide()}>Close</Button>
            </Modal.Footer.Buttons>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal.Trigger as={Button} store={modal3}>
        Header width Icon
      </Modal.Trigger>
      <Modal ariaLabel="example-3" store={modal3}>
        <Modal.Content>
          <Modal.Header>
            <Window.Header.Title title={title} />
            <Window.Header.RightActions isClosable onClose={modal3.hide} />
          </Modal.Header>
          <Modal.Body iconName="rocket" title={title}>
            Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
            aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.
          </Modal.Body>
          <Modal.Footer />
        </Modal.Content>
      </Modal>
    </>
  )
}

export default Example
