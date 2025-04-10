import { AssetModal, Modal, useModal } from '@/Modal'
import { Button } from '@/Button'

const Example = () => {
  const modal = useModal()

  return (
    <>
      <Modal.Trigger as={Button} store={modal}>
        Open modal
      </Modal.Trigger>
      <Modal
        ariaLabel="asset modal example"
        as={AssetModal}
        backdrop={<AssetModal.Backdrop />}
        store={modal}
      >
        <AssetModal.Content>
          <AssetModal.AssetWithTitle subtitle="THE JOB IS YOURS" title="Sapin & Rétroviseur">
            <AssetModal.Iframe>
              <iframe
                allowFullScreen
                src="https://www.youtube.com/embed/uSTy3cT5hbw"
                title="YouTube video player"
              />
            </AssetModal.Iframe>
          </AssetModal.AssetWithTitle>
        </AssetModal.Content>
      </Modal>
    </>
  )
}

export default Example
