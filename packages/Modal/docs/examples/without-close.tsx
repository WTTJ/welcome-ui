import * as React from 'react'
import { Modal, useModal } from '@welcome-ui/modal'
import { Button } from '@welcome-ui/button'
import { Flex } from '@welcome-ui/flex'

const Example = () => {
  const modal = useModal({ withClosingButton: false })
  const modal2 = useModal({ withClosingButton: false })

  return (
    <>
      <Modal.Trigger as={Button} store={modal}>
        Open modal (with header)
      </Modal.Trigger>
      <Modal ariaLabel="example" store={modal}>
        <Modal.Content>
          <Modal.Header title="Modal title" />
          <Modal.Body>
            <span>
              Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
              aliquam nec, convallis sit amet erat. Mauris auctor blandit porta. In imperdiet rutrum
              nunc. Integer suscipit sodales ex, ut lobortis orci rutrum id. Vestibulum scelerisque,
              felis ut sollicitudin elementum, dolor nibh faucibus orci, eu aliquet felis diam sed
              eros. Donec eget sapien lacinia, viverra felis in, placerat urna. Vestibulum sed
              viverra orci. Donec id tellus eget dui porta lobortis ac eu metus. Praesent id
              ultricies odio. In hac habitasse platea dictumst. Sed lorem lacus, hendrerit non
              sodales id, consectetur quis magna. Nullam non lacinia risus, ut varius est. Nam nec
              pulvinar tellus, eu ultrices elit. Cras tincidunt et purus eu condimentum. Nunc vitae
              consequat nibh.
            </span>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => modal.hide()}>Close here</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Modal.Trigger as={Button} store={modal2}>
        Open modal (without header)
      </Modal.Trigger>
      <Modal ariaLabel="example" store={modal2}>
        <Modal.Content>
          <Flex direction="column" gap="xxl" p="3xl">
            <span>
              Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
              aliquam nec, convallis sit amet erat. Mauris auctor blandit porta. In imperdiet rutrum
              nunc. Integer suscipit sodales ex, ut lobortis orci rutrum id. Vestibulum scelerisque,
              felis ut sollicitudin elementum, dolor nibh faucibus orci, eu aliquet felis diam sed
              eros. Donec eget sapien lacinia, viverra felis in, placerat urna. Vestibulum sed
              viverra orci. Donec id tellus eget dui porta lobortis ac eu metus. Praesent id
              ultricies odio. In hac habitasse platea dictumst. Sed lorem lacus, hendrerit non
              sodales id, consectetur quis magna. Nullam non lacinia risus, ut varius est. Nam nec
              pulvinar tellus, eu ultrices elit. Cras tincidunt et purus eu condimentum. Nunc vitae
              consequat nibh.
            </span>
            <Button onClick={() => modal2.hide()}>Close here</Button>
          </Flex>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default Example
