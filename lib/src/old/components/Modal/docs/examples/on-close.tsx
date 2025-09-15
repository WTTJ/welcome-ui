import { Button } from '@old/Button'
import { Modal, useModal } from '@old/Modal'

const Example = () => {
  const modal = useModal()

  const onClose = () => {
    alert('closed!')
  }

  return (
    <>
      <Modal.Trigger as={Button} store={modal}>
        Open modal
      </Modal.Trigger>
      <Modal ariaLabel="example" onClose={onClose} store={modal}>
        <Modal.Content store={modal}>
          <Modal.Body>
            Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
            aliquam nec, convallis sit amet erat. Mauris auctor blandit porta. In imperdiet rutrum
            nunc. Integer suscipit sodales ex, ut lobortis orci rutrum id. Vestibulum scelerisque,
            felis ut sollicitudin elementum, dolor nibh faucibus orci, eu aliquet felis diam sed
            eros. Donec eget sapien lacinia, viverra felis in, placerat urna. Vestibulum sed viverra
            orci. Donec id tellus eget dui porta lobortis ac eu metus. Praesent id ultricies odio.
            In hac habitasse platea dictumst. Sed lorem lacus, hendrerit non sodales id, consectetur
            quis magna. Nullam non lacinia risus, ut varius est. Nam nec pulvinar tellus, eu
            ultrices elit. Cras tincidunt et purus eu condimentum. Nunc vitae consequat nibh.
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default Example
