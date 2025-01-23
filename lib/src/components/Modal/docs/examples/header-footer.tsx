import * as React from 'react'

import { Modal, useModal } from '@/Modal'
import { Button } from '@/Button'
import { Box } from '@/Box'
import { ActionsIcon } from '@/Icons'

const Example = () => {
  const modal = useModal()
  const modal2 = useModal()
  const modal3 = useModal()
  const title = 'Nullam non lacinia'
  const subtitle = 'Praesent sit amet quam ac velit faucibus dapibus, quisque sapien ligula.'
  const icon = <ActionsIcon color="neutral-90" h={40} w={40} />
  const informations = {
    title: 'Donec id tellus',
    subtitle:
      'Sed lorem lacus, hendrerit non sodales id, consectetur quis magna. Mauris auctor blandit porta. In imperdiet rutrum nunc.',
  }

  return (
    <>
      <Modal.Trigger as={Button} store={modal}>
        Header with Icon and Footer
      </Modal.Trigger>
      <Modal ariaLabel="example" store={modal}>
        <Modal.Content store={modal}>
          <Modal.Header icon={icon} subtitle={subtitle} title={title} />
          <Modal.Body>
            Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
            aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.
          </Modal.Body>
          <Modal.Footer information={informations}>
            <Box w="100%">
              <Button mr="sm" variant="secondary">
                Lorem dolir
              </Button>
              <Button onClick={() => modal.hide()}>Close</Button>
            </Box>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal.Trigger as={Button} store={modal2}>
        Header and Footer
      </Modal.Trigger>
      <Modal ariaLabel="example-2" store={modal2}>
        <Modal.Content store={modal}>
          <Modal.Header subtitle={subtitle} title={title} />
          <Modal.Body>
            Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
            aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.
          </Modal.Body>
          <Modal.Footer>
            <Box w="100%">
              <Button mr="sm" variant="secondary">
                Lorem dolir
              </Button>
              <Button onClick={() => modal2.hide()}>Close</Button>
            </Box>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal.Trigger as={Button} store={modal3}>
        Header width Icon
      </Modal.Trigger>
      <Modal ariaLabel="example-3" store={modal3}>
        <Modal.Content store={modal}>
          <Modal.Header icon={icon} title={title} />
          <Modal.Body>
            Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
            aliquam nec, convallis sit amet erat. Mauris auctor blandit porta.
          </Modal.Body>
          <Modal.Footer information={informations} />
        </Modal.Content>
      </Modal>
    </>
  )
}

export default Example
