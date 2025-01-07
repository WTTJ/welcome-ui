import { AssetModal, Button, Modal, useModal } from 'welcome-ui'
import * as React from 'react'

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
          <img src="https://cdn-images.welcometothejungle.com/rUlGHCfE1zos9CVMJELrqCeCVzH27VuBO8GH5yiMkic/rs:auto:1500::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9pbWFnZS9maWxlLzQ0MjIvMTcwMzg2L2NkNGRhNTc5LWQ4YTktNDQ0OC1iMGM2LWI3ZWYwY2U2ZjQ0MS5qcGc" />
        </AssetModal.Content>
      </Modal>
    </>
  )
}

export default Example
